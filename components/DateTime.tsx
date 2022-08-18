import { css } from '@emotion/css'
import dayjs, { Dayjs } from 'dayjs'
import duration, { Duration } from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(duration)
dayjs.extend(customParseFormat)

type DurationProps = {
  from: string,
  to: string
}
type BasicTimeProps = {
  from: string,
  to?: string
}
type DateProps = BasicTimeProps & {
  format?: string,
  toLabel?: string, 
  fromLabel?: string
}

const style = css`
  display: inline-block;
  position: relative;
  time {
    font-size: inherit;
  }
  &.is-range {
    time:first-child {
      position: relative;
      margin-right: 1.5em;
      &:before {
        content: "—" / "to";
        position: absolute; 
        right: -1.25em;
      }
    }
  } 
`

const parseTime = (fromString: string, toString: string = undefined): {
  from: Dayjs,
  to: Dayjs,
  isRange: boolean
} => {
  const validFormats = ['DD.MM.YYYY', 'DD-MM-YYYY', 'YYYY']
  const to = toString === 'now' ? dayjs() :  dayjs(toString, validFormats, true)
  // return object
  return {
    from: dayjs(fromString, validFormats, true),
    to: to,
    isRange: to.isValid()
  }
}

function formatDuration(duration: Duration): string {
  const month = Math.round(duration.asMonths() % 12)
  const years = Math.floor(duration.asMonths() / 12)
  
  const yearString = years > 1 ? `${years} yrs` : (years === 1 ? `${years} yr` : '')
  const monthString = month > 0 ? `${month} mth` : ''
  //
  return `${yearString} ${monthString}`.trim()
}

const Duration = ({ from: fromString, to: toString }: DurationProps) => {
  const {from, to} = parseTime(fromString, toString)
  const duration = dayjs.duration(to.diff(from))
  return (
    <span className={`${style} is-duration dateTime`}>
      <time dateTime={duration.toISOString()}>{formatDuration(duration)}</time>
    </span>
  )
}

const DateTime = ({ from: fromString, to: toString = undefined, format = 'MMMM D, YYYY', toLabel, fromLabel }: DateProps) => {
  const {from, to, isRange} = parseTime(fromString, toString)
  
  const showRange: boolean = isRange && (!to.isValid() || from.format(format) !== to.format(format))
  // return date or range
  return (
    <span className={`${style} ${showRange && 'is-range'} dateTime`} role="group" aria-label={`${from.format(format)}${isRange === true ? " to " + to.format(format) : ''}`}>
      <time aria-hidden dateTime={from.toISOString()}>{fromLabel ??from.format(format)}</time>
      {showRange && <time aria-hidden dateTime={to.toISOString()}>{toLabel ?? to.format(format)}</time>}
    </span>
  )
}

export { DateTime, Duration }
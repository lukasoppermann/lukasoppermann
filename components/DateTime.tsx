import { css } from '@emotion/css'
import moment from 'moment'

type DateProps = {
  from: string,
  to?: string,
  format?: string,
  duration?: boolean
}

type dateObject = {
  year?: number,
  month?: number,
  day?: number
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

const isFullDateObject = (date: dateObject): boolean => {
  return (date !== undefined && typeof date?.day === 'number' && typeof date?.month === 'number' && typeof date?.year === 'number')
}

const formatDate = (date: dateObject, formatString: string = 'DD.MM.YYYY') => {
  if (date === undefined) return null
  // return string if exists
  if (typeof date === 'string') return date
  
  // else
  return formatString
    .replace('DD', `${date.day}`)
    .replace('MM', `${date.month}`)
    .replace('YYYY', `${date.year}`)
    .replace(/^[^\d]+/g, '')
    .replace(/[^\d]+$/g, '')
}


const calcDuration = (from: dateObject, to: dateObject) => {
  // guard
  if (!isFullDateObject(from) || !isFullDateObject(to)) {
    return null
  }

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const start = new Date(from.year, from.month, from.day)
  const end = new Date(to.year, to.month, to.day)


  const diffDays = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / oneDay)

  let diffString = `P${diffDays}D`
  let formattedDuration = `${diffDays} days`

  if (diffDays > 365) {
    const year = Math.floor(diffDays / 365)
    const month = Math.floor((diffDays % 365) / 30)
    diffString = `P${year}Y${month}M`
    formattedDuration = `${year} ${year > 1 ? 'yrs' : 'yr'} ${month > 0 ? month + ' mth' : ''} `
  }
  else if (diffDays > 31) {
    const month = Math.floor(diffDays / 30)
    const weeks = Math.floor((diffDays % 30) / 7)
    diffString = `P${month}M${weeks}W`
    formattedDuration = `${month} month`
  }
  else if (diffDays > 7) {
    const weeks = Math.floor(diffDays / 7)
    const days = Math.floor(diffDays % 7)
    diffString = `P${weeks}W${days}D`
    formattedDuration = `${weeks} ${weeks > 1 ? 'weeks' : 'week'}`
  }

  return {
    days: diffDays,
    string: diffString,
    formatted: formattedDuration
  }
}

const isRange = (from: any, to: any): boolean => {
  return (from !== to && from !== undefined && to !== undefined)
}

const prepareDates = (from: any, to: any) => {
  if (from !== undefined) {
    // split date string
    const fromDateArray = from.split('.').reverse().map(item => item === undefined ? undefined : parseInt(item))
    // return date object of valid
    if (!isNaN(fromDateArray[0])) {
      from = {
        year: fromDateArray[0],
        month: fromDateArray[1] || '',
        day: fromDateArray[2] || ''
      }
    }
  }
  if (to !== undefined) {
    // split date string
    const toDateArray = to.split('.').reverse().map(item => item === undefined ? undefined : parseInt(item))
    // return date object of valid   
    if (!isNaN(toDateArray[0])) {
      to = {
        year: toDateArray[0],
        month: toDateArray[1] || '',
        day: toDateArray[2] || ''
      }
    }
  }
  
  return {
    from: from,
    to: to,
    duration: calcDuration(from, to),
    isRange: isRange(from, to)
  }
}

function formatDuration(duration: moment.Duration): string {
  // TODO: Format in years + month
  return duration.locale("en").humanize()
}

const DateTime = ({ from: fromString, to: toString = undefined, format = 'MMMM d, YYYY', duration = false }: DateProps) => {
  const validFormats = ['DD.MM.YYYY', 'DD-MM-YYYY']
  const from = moment(fromString, validFormats, true)
  const to = moment(toString, validFormats, true)
  const isRange = to.isValid()
  
  console.log('from: ', from, 'to:', to, 'range: ', isRange)
  
  // return a duration
  if (duration !== false) {
    const duration = moment.duration(to.diff(from))
    return (
      <span className={`${style} is-duration dateTime`}>
        <time dateTime={duration.toISOString()}>{formatDuration(duration)}</time>
      </span>
    )
  }
  // return date or range
  return (
    <span className={`${style} ${isRange && 'is-range'} dateTime`} role="group" aria-label={`${from.format(format)}${isRange && "to " + to.format(format)}`}>
      <time aria-hidden dateTime={from.toISOString()}>{from.format(format)}</time>
      {isRange && <time aria-hidden dateTime={to.toISOString()}>{to.format(format)}</time>}
    </span>
  )
}

export { DateTime }
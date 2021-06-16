import { css } from '@emotion/css'
import { DateString, DD, MM, YYYY } from '@types/Date'

type DateProps = {
  from: DateString,
  to?: DateString,
  format?: string
}

type dateObject = {
  array?: any[],
  year?: YYYY,
  month?: MM,
  day?: DD
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
        content: "—";
        position: absolute; 
        right: -1.25em;
      }
    }
  } 
`

const formatDate = (date: dateObject, formatString: string = 'DD.MM.YYYY') => {
  return formatString
    .replace('DD', date.day)
    .replace('MM', date.month)
    .replace('YYYY', date.year)
    .replace(/^[^0-9]+/g, '')
}

const DateTime = ({ from, to }: DateProps) => {
  let fromDate: dateObject = {
    array: from?.split('.').reverse(),
    year: undefined,
    month: undefined,
    day: undefined
  }
  let toDate: dateObject = {
    array: to?.split('.').reverse(),
    year: undefined,
    month: undefined,
    day: undefined
  }
  

  if (fromDate.array !== undefined) {
    [fromDate.year, fromDate.month, fromDate.day] = fromDate.array
  }
  if (toDate.array !== undefined) {
    [toDate.year, toDate.month, toDate.day] = toDate.array
  }
  
  if (isNaN(Date.parse(to))) {
    return (
      <span className={`${style} dateTime`}>
        <time dateTime={fromDate.array.join('-')}>{formatDate(fromDate)}</time>
      </span>
    )
  }
  // range
  // const toDate = to.split('.').reverse()
  // const [toYear, toMonth, toDay] = toDate

  return (
    <span className={`${style} is-range dateTime`}>
      <time dateTime={fromDate.array.join('-')}>{formatDate(fromDate)}</time>
      <time dateTime={toDate.array.join('-')}>{formatDate(toDate)}</time>
    </span>
  )
}

export { DateTime }
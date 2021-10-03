import { css } from '@emotion/css'

type DateString = string

type DateProps = {
  from: DateString,
  to?: DateString,
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
        content: "—";
        position: absolute; 
        right: -1.25em;
      }
    }
  } 
`

const formatDate = (date: dateObject, formatString: string = 'DD.MM.YYYY') => {
  return formatString
    .replace('DD', `${date.day}`)
    .replace('MM', `${date.month}`)
    .replace('YYYY', `${date.year}`)
    .replace(/^[^0-9]+/g, '')
}

const calcDuration = (from: dateObject, to: dateObject) => {
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

const prepareDates = (from: string, to: string) => {
  const fromDateArray = from.split('.').reverse().map(item => item === undefined ? undefined : parseInt(item))
  const toDateArray = to.split('.').reverse().map(item => item === undefined ? undefined : parseInt(item))


  const fromDate: dateObject = {
    year: fromDateArray[0],
    month: fromDateArray[1],
    day: fromDateArray[2]
  }
  const toDate: dateObject = {
    year: toDateArray[0],
    month: toDateArray[1],
    day: toDateArray[2]
  }


  return {
    from: fromDate,
    to: toDate,
    duration: calcDuration(fromDate, toDate),
    isRange: toDate.year && to !== from
  }
}

const DateTime = ({ from, to, format = 'DD.MM.YYYY', duration = false }: DateProps) => {
  const dateObject = prepareDates(from, to)

  if (duration !== false) {
    return (
      <span className={`${style} is-duration dateTime`}>
        <time dateTime={dateObject.duration.string}>{dateObject.duration.formatted}</time>
      </span>
    )
  }

  return (
    <span className={`${style} ${dateObject.isRange ? 'is-range' : ''} dateTime`}>
      <time dateTime={Object.values(dateObject.from).join('-')}>{formatDate(dateObject.from, format)}</time>
      {dateObject.isRange && <time dateTime={Object.values(dateObject.to).join('-')}>{formatDate(dateObject.to, format)}</time>}
    </span>
  )
}

export { DateTime }
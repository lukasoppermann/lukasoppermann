import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export const parseTime = (fromString: string, toString?: string): {
  from: dayjs.Dayjs,
  to: dayjs.Dayjs,
  isRange: boolean
} => {
  const validFormats = ['DD.MM.YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD', 'YYYY']
  const parseDate = (value: string, label: string) => {
    const date = value === 'now' ? dayjs() : dayjs(value, validFormats, true)
    if (!date.isValid()) {
      throw new RangeError(`Invalid ${label} date: ${value}`)
    }
    return date
  }
  const to = toString === undefined ? dayjs() : parseDate(toString, 'end')
  const from = parseDate(fromString, 'start')
  // return object
  return {
    from,
    to: to,
    isRange: toString !== undefined
  }
}
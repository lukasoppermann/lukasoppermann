import dayjs, { Dayjs } from 'dayjs'

export const parseTime = (fromString: string, toString?: string): {
  from: Dayjs,
  to: Dayjs,
  isRange: boolean
} => {
  const validFormats = ['DD.MM.YYYY', 'DD-MM-YYYY', 'YYYY']
  const to = toString === 'now' ? dayjs() : dayjs(toString, validFormats, true)
  // return object
  return {
    from: dayjs(fromString, validFormats, true),
    to: to,
    isRange: to.isValid()
  }
}
import { css } from '@emotion/css'

type DateProps = {
  date?: string,
}

const Date = ({ date }: DateProps) => {
  return (
    <time dateTime="2018-07-07">{date}</time>
  )
}

export { Date }
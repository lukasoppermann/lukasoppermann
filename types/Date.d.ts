type d = 1|2|3|4|5|6|7|8|9|0
type oneToNine = 1|2|3|4|5|6|7|8|9

export type YYYY = `19${d}${d}` | `20${d}${d}`
export type MM = `0${oneToNine}` | `1${0|1|2}`
export type DD = `${0}${oneToNine}` | `${1|2}${d}` | `3${0|1}`
export type DateString = `${DD}.${MM}.${YYYY}` | `${MM}.${YYYY}` | `${YYYY}`
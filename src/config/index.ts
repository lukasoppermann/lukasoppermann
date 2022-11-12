type ConfigEmail = {
  raw: string,
  safeEmail: string
}

export default <ConfigEmail>{
  raw: 'hello@lukasoppermann.com',
  safeEmail: 'hello&commat;lukasoppermann&period;com',
}
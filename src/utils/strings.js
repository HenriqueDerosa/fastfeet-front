export const toPad2 = value =>
  Number(value) < 10 ? `0${value}` : String(value)

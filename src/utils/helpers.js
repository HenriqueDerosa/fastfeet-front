import { clearString } from './strings'

export const filterList = (text, list) => {
  if (text === '') return list
  const search = clearString(text)

  return list.filter(item => {
    const values = Object.values(item).map(
      i => typeof i === 'string' && clearString(i)
    )

    return !text ? item : values[1].indexOf(search) > -1
  })
}

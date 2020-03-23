import produce from 'immer'
import { camelizeKeys } from 'humps'

/**
 * turns snake_case into camelCase => to keep javascript name pattern
 */
export default (...params) => camelizeKeys(produce(...params))

import { combineReducers } from 'redux'

import auth from './auth/reducer'
import orders from './orders/reducer'
import user from './user/reducer'

export default combineReducers({
  auth,
  orders,
  user,
})

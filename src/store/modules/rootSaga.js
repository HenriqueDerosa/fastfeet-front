import { all } from 'redux-saga/effects'

import auth from './auth/sagas'
import orders from './orders/sagas'
import deliverymen from './deliverymen/sagas'
import recipients from './recipients/sagas'
import problems from './problems/sagas'
import user from './user/sagas'

export default function* rootSaga() {
  return yield all([auth, orders, deliverymen, recipients, problems, user])
}

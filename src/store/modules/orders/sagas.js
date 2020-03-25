import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { getOrdersSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'

export function* getOrdersRequest() {
  try {
    const response = yield call(api.get, 'order')
    const orders = response.data
    yield put(getOrdersSuccess(orders))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@orders/GET_ORDERS_REQUEST', getOrdersRequest),
])

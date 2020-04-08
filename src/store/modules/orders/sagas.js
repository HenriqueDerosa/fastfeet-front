import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { decamelizeKeys } from 'humps'

import api from '~/services/api'

import { getOrdersSuccess, createOrderSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'
import history from '~/services/history'

export function* getOrdersRequest() {
  try {
    const response = yield call(api.get, 'order')
    const orders = response.data
    yield put(getOrdersSuccess(orders))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}

export function* createOrderRequest({ payload }) {
  try {
    console.log(payload)
    const response = yield call(api.post, 'order', decamelizeKeys(payload))
    const order = response.data

    toast.success('Encomenda criada com sucesso')
    history.goBack()

    yield put(createOrderSuccess(order))
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
  takeLatest('@orders/CREATE_ORDER_REQUEST', createOrderRequest),
])

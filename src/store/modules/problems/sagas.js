import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { getProblemsSuccess, cancelOrderSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'

export function* getProblemsRequest() {
  try {
    const response = yield call(api.get, 'order/problems')
    const problem = response.data
    yield put(getProblemsSuccess(problem))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}
export function* cancelOrderRequest({ payload: id }) {
  try {
    yield call(api.delete, `problem/${id}/cancel-order`)
    yield put(cancelOrderSuccess(id))
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
  takeLatest('@problems/GET_PROBLEMS_REQUEST', getProblemsRequest),
  takeLatest('@problems/CANCEL_ORDER_REQUEST', cancelOrderRequest),
])

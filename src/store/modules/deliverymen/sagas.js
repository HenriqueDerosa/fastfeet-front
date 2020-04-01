import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { getDeliverymenSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'

export function* getDeliverymenRequest() {
  try {
    const response = yield call(api.get, 'deliverymen')
    const deliverymen = response.data
    yield put(getDeliverymenSuccess(deliverymen))
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
  takeLatest('@deliverymen/GET_DELIVERYMEN_REQUEST', getDeliverymenRequest),
])

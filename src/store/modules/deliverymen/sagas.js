import { takeLatest, call, put, all } from 'redux-saga/effects'
import humps from 'humps'
import { toast } from 'react-toastify'

import api from '~/services/api'

import {
  getDeliverymenSuccess,
  createDeliverymanSuccess,
  deleteDeliverymenSuccess,
  updateDeliverymanSuccess,
} from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'
import history from '~/services/history'

export function* getDeliverymenRequest() {
  try {
    const response = yield call(api.get, 'deliverymen')
    const deliverymen = response.data
    yield put(getDeliverymenSuccess(deliverymen))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}

export function* createDeliverymanRequest({ payload }) {
  try {
    const response = yield call(api.post, 'deliverymen', payload)
    const deliveryman = response.data

    toast.success('Entregador criado com sucesso')
    history.goBack()

    yield put(createDeliverymanSuccess(deliveryman))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}
export function* updateDeliverymanRequest({ payload }) {
  try {
    const response = yield call(
      api.put,
      `deliverymen/${payload.id}`,
      humps.decamelizeKeys(payload.data)
    )
    const deliveryman = response.data

    toast.success('Entregador atualizado com sucesso')
    history.goBack()

    yield put(updateDeliverymanSuccess(deliveryman))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}
export function* deleteDeliverymanRequest({ payload: id }) {
  try {
    yield call(api.delete, `deliverymen/${id}`)
    toast.success('Entregador removido com sucesso')

    yield put(deleteDeliverymenSuccess(id))
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
  takeLatest(
    '@deliverymen/CREATE_DELIVERYMAN_REQUEST',
    createDeliverymanRequest
  ),
  takeLatest(
    '@deliverymen/UPDATE_DELIVERYMAN_REQUEST',
    updateDeliverymanRequest
  ),
  takeLatest(
    '@deliverymen/DELETE_DELIVERYMEN_REQUEST',
    deleteDeliverymanRequest
  ),
])

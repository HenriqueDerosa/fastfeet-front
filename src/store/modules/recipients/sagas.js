import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { getRecipientsSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'

export function* getRecipientsRequest() {
  try {
    const response = yield call(api.get, 'recipients')
    const recipients = response.data
    yield put(getRecipientsSuccess(recipients))
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
  takeLatest('@recipients/GET_RECIPIENTS_REQUEST', getRecipientsRequest),
])

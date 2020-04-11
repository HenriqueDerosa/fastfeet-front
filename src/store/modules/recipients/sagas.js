import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { getRecipientsSuccess, createRecipientSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE } from '~/utils/constants'
import history from '~/services/history'

export function* getRecipientsRequest() {
  try {
    const response = yield call(api.get, 'recipients')
    const recipients = response.data
    yield put(getRecipientsSuccess(recipients))
  } catch (err) {
    toast.error(GENERIC_ERROR_MESSAGE)
  }
}

export function* createRecipientRequest({ payload }) {
  try {
    const response = yield call(api.post, 'recipients', payload)
    const recipients = response.data

    toast.success('Destinatário criado com sucesso')
    history.goBack()

    yield put(createRecipientSuccess(recipients))
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
  takeLatest('@recipients/CREATE_RECIPIENT_REQUEST', createRecipientRequest),
])

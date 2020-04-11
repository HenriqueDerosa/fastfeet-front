export function getRecipientsRequest() {
  return {
    type: '@recipients/GET_RECIPIENTS_REQUEST',
  }
}

export function getRecipientsSuccess(recipients) {
  return {
    type: '@recipients/GET_RECIPIENTS_SUCCESS',
    payload: recipients,
  }
}

export function createRecipientRequest(data) {
  return {
    type: '@recipients/CREATE_RECIPIENT_REQUEST',
    payload: data,
  }
}

export function createRecipientSuccess(recipients) {
  return {
    type: '@recipients/CREATE_RECIPIENT_SUCCESS',
    payload: recipients,
  }
}

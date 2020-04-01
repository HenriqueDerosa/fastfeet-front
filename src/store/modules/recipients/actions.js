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

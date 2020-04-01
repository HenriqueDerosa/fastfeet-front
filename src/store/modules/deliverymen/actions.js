export function getDeliverymenRequest() {
  return {
    type: '@deliverymen/GET_DELIVERYMEN_REQUEST',
  }
}

export function getDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliverymen/GET_DELIVERYMEN_SUCCESS',
    payload: deliverymen,
  }
}

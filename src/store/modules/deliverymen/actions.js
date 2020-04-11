export function createDeliverymanRequest(data) {
  return {
    type: '@deliverymen/CREATE_DELIVERYMAN_REQUEST',
    payload: data,
  }
}

export function createDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliverymen/CREATE_DELIVERYMAN_SUCCESS',
    payload: deliveryman,
  }
}

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

export function deleteDeliverymenRequest(id) {
  return {
    type: '@deliverymen/DELETE_DELIVERYMEN_REQUEST',
    payload: id,
  }
}

export function deleteDeliverymenSuccess(id) {
  return {
    type: '@deliverymen/DELETE_DELIVERYMEN_SUCCESS',
    payload: id,
  }
}

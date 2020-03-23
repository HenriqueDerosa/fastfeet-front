export function getOrdersRequest() {
  return {
    type: '@orders/GET_ORDERS_REQUEST',
  }
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: orders,
  }
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}

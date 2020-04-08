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
export function createOrderRequest(data) {
  return {
    type: '@orders/CREATE_ORDER_REQUEST',
    payload: data,
  }
}

export function createOrderSuccess(order) {
  return {
    type: '@orders/CREATE_ORDER_SUCCESS',
    payload: order,
  }
}

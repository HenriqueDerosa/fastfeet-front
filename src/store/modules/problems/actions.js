export function getProblemsRequest() {
  return {
    type: '@problems/GET_PROBLEMS_REQUEST',
  }
}

export function getProblemsSuccess(problems) {
  return {
    type: '@problems/GET_PROBLEMS_SUCCESS',
    payload: problems,
  }
}
export function cancelOrderRequest(id) {
  return {
    type: '@problems/CANCEL_ORDER_REQUEST',
    payload: id,
  }
}

export function cancelOrderSuccess(id) {
  return {
    type: '@problems/CANCEL_ORDER_SUCCESS',
    payload: id,
  }
}

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

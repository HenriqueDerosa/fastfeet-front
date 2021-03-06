import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: null,
}

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@problems/GET_PROBLEMS_REQUEST': {
        draft.loading = true
        break
      }
      case '@problems/GET_PROBLEMS_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }
      case '@problems/CANCEL_ORDER_REQUEST': {
        draft.loading = true
        break
      }
      case '@problems/CANCEL_ORDER_SUCCESS': {
        draft.loading = false
        const id = action.payload
        draft.list = draft.list.filter(item => item.id !== id)
        break
      }
      default:
    }
  })
}

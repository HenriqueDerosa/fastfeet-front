import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  token: null,
  loading: false,
  list: [],
}

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@orders/GET_ORDERS_REQUEST': {
        draft.loading = true
        break
      }
      case '@orders/GET_ORDERS_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }
      case '@orders/DELETE_ORDER_REQUEST': {
        draft.loading = true
        break
      }
      case '@orders/DELETE_ORDER_SUCCESS': {
        draft.loading = false
        const id = action.payload
        draft.list = draft.list.filter(item => item.id !== id)
        break
      }
      default:
    }
  })
}

import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: [],
}

export default function deliverymen(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliverymen/GET_DELIVERYMEN_REQUEST': {
        draft.loading = true
        break
      }
      case '@deliverymen/GET_DELIVERYMEN_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }
      default:
    }
  })
}

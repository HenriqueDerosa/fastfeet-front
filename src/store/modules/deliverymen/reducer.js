import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: null,
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
      case '@deliverymen/SAVE_FILE_REQUEST': {
        draft.loading = true
        break
      }
      case '@deliverymen/SAVE_FILE_SUCCESS': {
        draft.loading = false
        break
      }
      case '@deliverymen/DELETE_DELIVERYMEN_REQUEST': {
        draft.loading = true
        break
      }
      case '@deliverymen/DELETE_DELIVERYMEN_SUCCESS': {
        draft.loading = false
        const id = action.payload
        draft.list = draft.list.filter(item => item.id !== id)
        break
      }
      default:
    }
  })
}

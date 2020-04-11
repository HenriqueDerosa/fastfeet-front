import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: null,
}

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipients/GET_RECIPIENTS_REQUEST': {
        draft.loading = true
        break
      }
      case '@recipients/GET_RECIPIENTS_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }
      case '@recipients/DELETE_RECIPIENT_REQUEST': {
        draft.loading = true
        break
      }
      case '@recipients/DELETE_RECIPIENT_SUCCESS': {
        draft.loading = false
        const id = action.payload
        draft.list = draft.list.filter(item => item.id !== id)
        break
      }
      default:
        break
    }
  })
}

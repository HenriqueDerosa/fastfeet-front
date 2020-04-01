import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: [],
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
      default:
    }
  })
}

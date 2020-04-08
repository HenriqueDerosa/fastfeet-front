import { ORDER_STATUS } from '~/utils/constants'

const colors = {
  primary: '#7D40E7',
  blueberry: '#4D85EE',
  punch: '#DE3B3B',
  quickSilver: '#999999',
  silver: '#C6C6C6',
  alto: '#DDDDDD',
  selago: '#F4EFFC',
  gallery: '#eee',
  white: '#FFFFFF',
  whiteLilac: '#F8F9FD',
  lima: '#82BF18',
  tundora: '#444444',
  cinnabar: '#E74040',
  tulipTree: '#E7BA40',

  // status colors
  status: {
    [ORDER_STATUS.DELIVERED]: '#2CA42B',
    [ORDER_STATUS.PENDING]: '#C1BC35',
    [ORDER_STATUS.WITHDRAWN]: '#4D85EE',
    [ORDER_STATUS.CANCELLED]: '#DE3B3B',
  },
}

export default colors

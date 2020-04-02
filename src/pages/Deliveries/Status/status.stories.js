import React from 'react'
import StyledRouter from '~/../stories/decorators/router'
import Status from '.'

export default {
  title: 'Order Status',
  component: Status,
}

export const Default = () => {
  return (
    <StyledRouter>
      <Status>for actions</Status>
    </StyledRouter>
  )
}

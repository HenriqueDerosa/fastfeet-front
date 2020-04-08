import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'

import Deliveries from '../pages/Deliveries'
import Deliverymen from '../pages/Deliverymen'
import Recipients from '../pages/Recipients'
import Problems from '../pages/Problems'
import Profile from '../pages/Profile'
import { URL } from '~/utils/constants'
import RegisterDeliveryman from '~/pages/Register/Deliveryman'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path={URL.ORDERS} component={Deliveries} isPrivate />
      <Route path={URL.DELIVERYMEN} exact component={Deliverymen} isPrivate />
      <Route
        path={URL.REGISTER_DELIVERYMAN}
        exact
        component={RegisterDeliveryman}
        isPrivate
      />
      <Route path={URL.RECIPIENTS} component={Recipients} isPrivate />
      <Route path={URL.PROBLEMS} component={Problems} isPrivate />
      <Route path={URL.PROFILE} component={Profile} isPrivate />
    </Switch>
  )
}

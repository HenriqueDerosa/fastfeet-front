import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'

import Deliveries from '../pages/Deliveries'
import Deliverymen from '../pages/Deliverymen'
import Recipients from '../pages/Recipients'
import Problems from '../pages/Problems'
import { URL } from '~/utils/constants'
import RegisterDeliveryman from '~/pages/Register/Deliveryman'
import RegisterDeliveries from '~/pages/Register/Deliveries'
import RegisterRecipients from '~/pages/Register/Recipients'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path={URL.ORDERS} exact component={Deliveries} isPrivate />
      <Route path={URL.DELIVERYMEN} exact component={Deliverymen} isPrivate />
      <Route path={URL.RECIPIENTS} exact component={Recipients} isPrivate />
      <Route path={URL.PROBLEMS} exact component={Problems} isPrivate />

      <Route
        path={URL.REGISTER_DELIVERYMAN}
        exact
        component={RegisterDeliveryman}
        isPrivate
      />
      <Route
        path={URL.REGISTER_DELIVERIES}
        exact
        component={RegisterDeliveries}
        isPrivate
      />
      <Route
        path={URL.REGISTER_RECIPIENTS}
        exact
        component={RegisterRecipients}
        isPrivate
      />
    </Switch>
  )
}

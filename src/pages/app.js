import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../app/login'
import LogoutPage from '../app/logout'
import HomePage from '../app/home'
import RSVPPage from '../app/rsvp'
import TravelPage from '../app/travel'
import PhotosPage from '../app/photos'
import AccommodationPage from '../app/accommodation'
import PrivateRoute from '../components/private_route'

const App = () => (
  <div>
    <PrivateRoute path='/app/home' component={HomePage} />
    <PrivateRoute path='/app/accommodation' component={AccommodationPage} />
    <PrivateRoute path='/app/travel' component={TravelPage} />
    <PrivateRoute path='/app/photos' component={PhotosPage} />
    <PrivateRoute path='/app/rsvp' component={RSVPPage} />
    <PrivateRoute path='/app/logout' component={LogoutPage} />
    <Route path='/app/login' component={LoginPage} />
  </div>
)

export default App
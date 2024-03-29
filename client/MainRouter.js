import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Game from './core/Game'
import ScoreBoard from './core/ScoreBoard'
import Menu from './core/Menu'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
        <Route path="/score-board" component={ScoreBoard}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)
}

export default MainRouter

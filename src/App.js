import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home'
import UserList from './Userlist'
import Posts from './Posts'
import UserShow from './usershow'
import PostShow from './PostShow'

function App(props){
    return( 
        <BrowserRouter>
        <div>
            <h1> Blog UI App</h1>
            <Link to='/'>Home</Link>|
            <Link to='/users'>Users</Link>|
            <Link to='/posts'>Posts</Link>|

            <Route path='/' component={Home} exact={true}/>
            <Route path='/users' component={UserList} exact={true}/>
            <Route path='/posts' component={Posts} exact={true}/>
            <Route path='/users/:id' component={UserShow}/>
            <Route path='/posts/:id' component={PostShow} />
            
        </div>
        
        </BrowserRouter>
        
    )
}

export default App
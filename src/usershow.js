import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            userpost:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            //console.log(response.data)
            const user =response.data
            this.setState({user})

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
                console.log(response.data)
                const userpost=response.data
                this.setState({userpost})
        })
        })
    }
    render(){
        return(
            <div>
                <h1> Username {this.state.user.name}</h1>
                <p>posts written by user</p>
                <ul>
                    {
                        this.state.userpost.map((post)=>{
                            return <li> <Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default UserShow
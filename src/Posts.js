import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


    class PostList extends React.Component{
        constructor(){
            super()
            this.state={
                posts:[]
            }

        }

    componentDidMount(){
            
            axios.get('https://jsonplaceholder.typicode.com/posts')

            .then((response)=>{
            
                const posts=response.data
                this.setState({posts})
            })
        }

        render(){
            return (
                <div>
                    <h2>Post lists-{this.state.posts.length}</h2>
                    <ul>
                        {
                        this.state.posts.map((post)=>{
                            return <li> <Link to={`/posts/${post.id}`}>{post.title}</Link> </li>

                        })}
                    </ul>
                </div>
            )
        }
}

export default PostList
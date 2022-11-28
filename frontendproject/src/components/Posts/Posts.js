import React from "react";
import Post from "./Post/post";
import useStyles from './styles'
//to fetch the global redux store global
import { useSelector } from "react-redux";
const Posts = () => {
    //initialize as a hook
    const posts = useSelector((state) => state.posts )
    const classes = useStyles()
    console.log(posts)
    return(
        <>
           <h1>Posts</h1>
           <Post/>
           <Post/>

        </>
    )
}
export default Posts
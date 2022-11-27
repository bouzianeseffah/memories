 //import everything from the action as api
 import * as api from '../api';

 //creat action

 export  const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        //redux thunk 
        dispatch( {
            //action
            type: 'FETCH_ALL',
            //the data where we store all of our posts
            payload: data
        } );
        
    } catch (error) {
        console.log(error.message)
        
    }  
 }
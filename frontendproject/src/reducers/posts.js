//reducer is a function that exept the state and the action
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            //our actual posts 
            return action.payload;

        case 'CREATE':
          return posts;
        
        default:
            return posts;
    }
}
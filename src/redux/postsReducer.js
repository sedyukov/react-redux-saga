import {CREATE_POST, FETCH_POSTS} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return {...state, posts: state.posts.concat(action.payload)} //old syntax
            return {...state, posts: [...state.posts, action.payload]}
        case FETCH_POSTS:
            console.log(1)
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}


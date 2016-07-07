import AuthorApi from '../api/authorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors) {
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

// TODO: implement this instead of throwing error
export function loadAuthorsFailure(error) {
    return {
        type: types.LOAD_AUTHORS_FAILURE,
        error
    };
}

// this is a thunk that will make the async call to authors api
// http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/
export function loadAuthors() {
    // thunk always returns a function that accepts dispatch as callback argument
    return function(dispatch) {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
import TemplateApi from '../api/API_TEMPLATE';
import * as types from './actionTypes';

export function testTemplateSuccess(test) {
    return {
        type: types.TEMPLATE_TEST,
        test
    };
}

// this is a thunk that will make the async call to authors api
// http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/
export function testTemplate() {
    // thunk always returns a function that accepts dispatch as callback argument
    return function(dispatch) {
        return TemplateApi.testTemplate().then(tests => {
            dispatch(testTemplateSuccess(tests));
        }).catch(error => {
            throw(error);
        });
    };
}
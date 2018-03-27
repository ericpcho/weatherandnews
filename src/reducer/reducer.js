import * as actions from '../actions/actions.js'

const initialState = {
    news: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    if (action.type === actions.FETCH_NEWS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }

    if (action.type === actions.FETCH_NEWS_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            news: action.news
        })
    }

    return state;
}

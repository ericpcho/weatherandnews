import * as actions from '../actions/actions.js'

const initialState = {
    news: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    if (action.type === actions.FETCH_NEWS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }

    return state;
}

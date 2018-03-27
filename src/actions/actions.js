import {API_BASE_URL} from '../config'

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST
})

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    news
})

export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
export const fetchNewsError = (error) => ({
    type: FETCH_NEWS_ERROR,
    error
})

export const fetchNews = () => dispatch => {
    dispatch(fetchNewsRequest)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7e49126398d34be684ec94684eed9151`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json();
        })
        .then((news) => dispatch(fetchNewsSuccess(news)))
        .catch(error => dispatch(fetchNewsError(error)))
}

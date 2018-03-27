import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions.js'

export class News extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchNews())
    }

    render() {  
        console.log(this.props.articles)

        const articles = this.props.articles.map((article, index) =>
            <li key={index}> 
            <a href={article.url}>  {article.title} </a> 
            </li> 
        );

        return (
            <div>
                <h1>
                    Simple Weather and News
                </h1>
                <ul>
                    {articles}
                </ul>
            </div>
        )
            
    }    
}

const mapStateToProps = state => ({
    articles: state.news ? state.news.articles : []
});

export default connect(mapStateToProps)(News);
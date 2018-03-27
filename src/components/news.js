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
        console.log(this.props.news)
        const news = this.props.news.map((news, index) =>
            <li key={index}> 
              {news}
            </li> 
        );

        return (
            <div>
                <ul>
                    {news}
                </ul>
            </div>
        )
            
    }    
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(News);
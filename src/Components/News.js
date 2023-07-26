import React, { Component } from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category : 'general'
    }

    static propsTypes ={
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f358ed0ff318429e8280823192ba285c&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalresults: parsedData.totalResults,
            loading: false
        })
    }

    nextfunc = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalresults / 20))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f358ed0ff318429e8280823192ba285c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })

        }
    }

    previousfunc = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f358ed0ff318429e8280823192ba285c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        console.log("Previous")
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{margin : '30px'}}>WittyNewsWire - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousfunc}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalresults / 20)} type="button" className="btn btn-dark" onClick={this.nextfunc}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

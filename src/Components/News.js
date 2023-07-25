import React, { Component } from 'react'
import Newitems from './Newitems'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f358ed0ff318429e8280823192ba285c&page=1pageSize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalresults: parsedData.totalResults
        })
    }

    nextfunc = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalresults / 20)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f358ed0ff318429e8280823192ba285c&page=${this.state.page + 1}&pageSize=20`

            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })

        }
    }

    previousfunc = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f358ed0ff318429e8280823192ba285c&page=${this.state.page - 1}&pageSize=20`

        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
        console.log("Previous")
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>WittyNewsWire - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newitems title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 95) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousfunc}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.nextfunc}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

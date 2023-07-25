import React, { Component } from 'react'

export default class Newitems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card " style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-9.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer"  className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

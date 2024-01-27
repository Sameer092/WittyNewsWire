import React, { useEffect, useState } from 'react';
import Newitems from './Newitems';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

const SearchResults = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            searchQuery
        )}&apiKey=beb83bdf637a41b38edda08dbcafd004`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `WittyNewsWire - Search Results for "${searchQuery}"`;
        updateNews();
        //eslint-disable-next-line
    }, [searchQuery]);

    return (
        <>
            <h1 className={`text-center ${props.mode === 'dark' ? 'text-white' : 'text-black'}`} style={{ margin: '30px', marginTop: '90px' }}>
                {`WittyNewsWire - Search Results for "${searchQuery}"`}
            </h1>
            {loading && <Spinner />}
            {!loading && articles.length === 0 && (
                <div className="text-center mt-5">
                    <h3>No Result Found</h3>
                </div>
            )}
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newitems
                                    title={element.title ? element.title : ''}
                                    mode={props.mode}
                                    description={element.description ? element.description : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default SearchResults;

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default function News(props) {
    let [articles, setarticles] = useState([])
    let [page, setpage] = useState(1)
    let [totalResults, settotalResults] = useState(0)
    async function getData() {
        try {
            setpage(1)
            var rawdata = ""
            if (props.search === "None") {
                rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
            }
            else {
                rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
            }
            let result = await rawdata.json()
            setarticles(result.articles)
            settotalResults(result.totalResults)
        }
        catch (error) {
            console.log(error)
            alert("Someting Went Wrong")
        }
    }
    const fetchMoreData = async () => {
        try {
            setpage(page + 1)
            let rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
            let result = await rawdata.json()
            setarticles(articles.concat(result.articles))
        }
        catch (error) {
            console.log(error)
            alert("Someting Went Wrong")
        }
    }
    useEffect(() => {
        getData()
    }, [props.q, props.language, props.pageSize, props.search])
    return (
        <>
            <div className='container-fluid'>
                <h5 className='background text-light text-center p-3 mt-1'>{props.q} News Section</h5>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner />}
                >
                    <div className='row'>
                        {articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                pic={item.urlToImage}
                                description={item.description}
                                source={item.source.name}
                                date={item.publishedAt}
                                url={item.url}
                            />
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

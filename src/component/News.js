import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setloading] = useState(false);
  const [totalarticles, settotalarticles] = useState(0);
  const [page, setPage] = useState(1);

  const capatlixefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pagesize}&page=${page}&apiKey=${props.apikey}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(45);
    let parseddata = await data.json();
    props.setProgress(80);
    setArticle(parseddata.articles);
    setloading(false);
    settotalarticles(parseddata.totalResults);

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    document.title = `NewsMonkey-${capatlixefirstletter(props.category)}`;
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pagesize}&page=${page+1}&apiKey=${props.apikey}`;
    setPage(page+1);
   
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticle(article.concat(parseddata.articles));
    settotalarticles(parseddata.totalResults);
    

  }

  return (
    
    <>
    
      <h2 className='text-center ' style={{marginTop:"90px"}}>NewsMonkey-Top {capatlixefirstletter(props.category)} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalarticles}
        loader={<Spinner />}>
        <div className='container'>
          <div className='row'>
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )

}

export default News
News.defaultProps = {
  country: 'in',
  pagesize: 18,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

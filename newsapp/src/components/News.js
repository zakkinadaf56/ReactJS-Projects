import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
   this.state={
    articles: [],
    loading:false
   } 
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bdebb8fdead74df7845bbb8db2f7b3b8";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{

         return   <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark ">&larr; Previous</button>
        <button type="button" class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
import React from 'react'
import { connect } from 'react-redux'

class News extends React.Component {
  render () {

    return (
        <div className="news">
		    <ul className="newsHead">
		        <li><div id="roll" className="select">要闻快递</div></li>
		        <li><div id="opportunity">兴证资讯</div></li>
		    </ul>
		    <div id="news-list">
		    </div>
		    <div className="more">更多...</div>
		</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  	
  }
}

const ConnectedNews = connect(mapStateToProps)(News)

export default ConnectedNews

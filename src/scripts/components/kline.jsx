import React from 'react'
import { connect } from 'react-redux'

class Kline extends React.Component {
  render () {
  	let { } = this.props;
  	// console.log("kline.params=>"+JSON.stringify(this.props.params));
    // console.log("kline.props=>"+JSON.stringify(this.props));
    /*
    {
    "history":{},
    "location":{
      "pathname":"/kline/hs_000637",
      "search":"",
      "hash":"",
      "state":null,
      "action":"PUSH",
      "key":"o0jeay",
      "query":{},
      "$searchBase":{"search":"","searchBase":""}
    },
    "params":{"code":"hs_000637"},
    "route":{"path":"/kline/:code"},
    "routeParams":{"code":"hs_000637"},
    "routes":[{"path":"/kline/:code"}],
    "children":null}
    */
    return (
        <div>
		    kline page
		</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  
  }
}

const ConnectedKline = connect(mapStateToProps)(Kline)

export default ConnectedKline

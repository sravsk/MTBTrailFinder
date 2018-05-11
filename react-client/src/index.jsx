import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router , Redirect, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Trail from './components/Trail.jsx';
import FilterItem from './components/FilterItem.jsx';
import StickyHeader from './components/StickyHeader.jsx';
import { Grid } from 'react-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    trails : [],
    isHidden: true,
    redirect : false
    }
  }

  componentDidMount() {
    this.fetch();
  }

  search(difficulty, distance, location, address) {
    $.ajax({
      url : '/trails',
      method : 'POST',
      cache : false,
      'content-type':'application/json',
      data : JSON.stringify({
        difficulty : difficulty,
        distance : distance,
        location : location,
        address : address
      }),
      success : (data) => {
        this.setState ({
          isHidden: !this.state.isHidden,
          redirect: true
        })
        this.fetch();
      },
      error : (err) => {
        console.log('error in seach post method', err);
      }
    })
  }

  fetch() {
    $.ajax({
      url: '/trails',
      method : 'GET',
      success: (data) => {
        this.setState({
          trails: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    console.log(this.state);
     const { trails, showing, redirect } = this.state;
    return (
      <div>
        <Route render={()=><StickyHeader />}/>
        <Route render={()=><div>{this.state.isHidden && <FilterItem onSearch={this.search.bind(this)} trails={ this.state.trails} />}</div>}/>
         <Switch>
            <Route render={()=><div>{!this.state.isHidden && <Trail trails={ this.state.trails} />}</div>}/>
            <Redirect to='/trails'/>
          </Switch>
        <Route render={()=><Footer />}/>
        </div>
      )
  }
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));


import React, { Component } from 'react';
import Question from '../components/Question';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PagesActions from './../actions';
import './App.css';


function mapStateToProps(state) {
  return {
    currentPage: state.navigation.currentPage,
    questions: state.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PagesActions, dispatch);
}

class App extends Component {

  onRateChange(n){
    this.props.setRate(this.props.currentPage, n)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rate the question №{this.props.currentPage+1}</h1>
        </header>
        <div className="App-intro">
          <Question 
            currentPage={this.props.currentPage} 
            onChange={this.onRateChange.bind(this)}
            questions={this.props.questions}
            />
        </div>
        <div className="Nav-Buttons">
          <button className="myButton" onClick={this.props.previusPage}> prev </button>        
          <button className="myButton" onClick={this.props.nextPage}> next </button>        
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
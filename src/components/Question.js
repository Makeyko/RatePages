import React, { Component } from 'react';
import ReactStars from 'react-stars';
import '../index.css';


class Question extends Component {
    render() {
        return (
            <div className='Question'>
                <div className='QuestionText'>{this.props.questions.questionsTexts[this.props.currentPage]}</div>  
                <ReactStars 
                    count={5}
                    value={this.props.questions[this.props.currentPage]}
                    onChange={this.props.onChange}
                    size={44}
                    color={'ef027d'}
                    half={false}
                />
            </div>
        );
    }
}

export default Question;
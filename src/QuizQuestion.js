import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  handleClick(buttonText) {
    console.log('got button text', buttonText);
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    } else {
      console.log('wrong')
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((item, index)=> <QuizQuestionButton key={index} button_text={item} clickHandler={this.handleClick.bind(this)} />)}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
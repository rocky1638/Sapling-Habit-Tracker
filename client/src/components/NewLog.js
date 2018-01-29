import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addLog } from '../actions';

class NewLog extends Component {
  renderTextArea(field) {
    return (
      <div className="form-group">
        <label className="sans-serif h5 weight-300">{field.label}</label>
        <textarea
          rows="5"
          placeholder={field.placeholder}
          className={
            field.meta.touched && field.meta.error
              ? 'form-control form-control-error '
              : 'form-control'
          }
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    values.time = this.props.time;

    const { _id } = this.props.log;

    this.props.addLog(values, _id, () => {
      this.props.history.push('/dashboard'); // change to /logs/:id and fix
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h3 className="h2 sans-serif weight-400">
              Another Day, Another Practice
            </h3>
            <h4>To Do Next (From Last Practice): </h4>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                type="text"
                label="Log Your Practice"
                name="description"
                placeholder="Successes, struggles, revelations, or
                anything else that comes to your mind about your practice."
                component={this.renderTextArea}
              />
              <Field
                type="text"
                label="What's Next?"
                name="nextPractice"
                placeholder="What would you like to practice or improve for your next practice session?"
                component={this.renderTextArea}
              />
              <button
                type="submit"
                className="h5 weight-400 sans-serif submit-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    log: state.currentPractice,
    time: state.time
  };
}

function validate(values) {
  const error = {};

  if (!values.description) {
    error.description = true;
  }

  if (!values.nextPractice) {
    error.nextPractice = true;
  }

  return error;
}

export default reduxForm({
  validate,
  form: 'NewLogForm'
})(connect(mapStateToProps, { addLog })(NewLog));

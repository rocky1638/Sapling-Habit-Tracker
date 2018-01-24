import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPractice extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label className="sans-serif h5 weight-300">{field.label}</label>
        <input
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

  renderTextArea(field) {
    return (
      <div className="form-group">
        <label className="sans-serif h5 weight-300">{field.label}</label>
        <textarea
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
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h2 className="sans-serif h2 weight-400">
              Start Practicing Something New
            </h2>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                type="text"
                label="Category"
                name="category"
                component={this.renderField}
              />
              <Field
                type="textarea"
                label="Goals"
                name="goal"
                placeholder="What do you hope to achieve by practicing this?"
                component={this.renderTextArea}
              />
              <button
                className="h6 weight-300 sans-serif submit-button"
                type="submit"
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

function validate(values) {
  const errors = {};

  if (!values.category) {
    errors.category = true;
  }

  if (!values.goal) {
    errors.goal = true;
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPracticeForm'
})(NewPractice);

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  TextField
} from 'redux-form-material-ui';
const required = value => value == null ? 'Required' : undefined;
export class Form extends Component {

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="eth_addr"
            component={TextField}
            hintText="Eth Address"
            floatingLabelText="Enter your eth address"
            validate={required}
            />
            <Field name="pos"
                        component={TextField}
                        hintText="position"
                        floatingLabelText="position"
                        validate={required}
                        />
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'example'
})(Form);
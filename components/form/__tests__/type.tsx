import React from 'react';
import Form, { FormComponentProps } from '../Form';

function noop(...args) { return args; }

// test Form.create on component without own props
class WithoutOwnProps extends React.Component<any, any> {
  state = {
    foo: 'bar',
  };
  render() {
    return <div>foo</div>;
  }
}

const WithoutOwnPropsForm = Form.create()(WithoutOwnProps);

noop(<WithoutOwnPropsForm />);

// test Form.create on component with own props
interface WithOwnPropsProps extends FormComponentProps {
  name: string;
}

class WithOwnProps extends React.Component<WithOwnPropsProps, any> {
  state = {
    foo: 'bar',
  };

  render() {
    return <div>foo</div>;
  }
}

const WithOwnPropsForm = Form.create()(WithOwnProps);

noop(<WithOwnPropsForm name="foo" />);

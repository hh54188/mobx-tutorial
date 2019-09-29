import React from 'react';
import { Provider, observer, inject } from "mobx-react";

import model from './model';

@inject('store')
@observer
class MyForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { store: { } } = this.props;
    return (
      <div>
      </div>
    )
  }
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<Provider store={model}>
      <MyForm></MyForm>
    </Provider>)
  }
}
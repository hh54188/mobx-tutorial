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
    const { store: { options, selectedValue, setSelectedValue } } = this.props;
    return (
      <div>
        <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
          {options.map(opt =>
            <option value={opt} key={opt}>{opt}</option>
          )}
        </select>
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
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
    const { store: { name, age, setNameValue, setAgeValue, disableSubmit } } = this.props
    return <form>
      <div>
        <label>name</label>
        <input type="text" value={name} onChange={event => setNameValue(event.target.value)}></input>
      </div>
      <div>
        <label>age</label>
        <input type="text" value={age} onChange={event => setAgeValue(event.target.value)}></input>
      </div>
      <button disabled={disableSubmit}>Submit</button>
    </form>
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
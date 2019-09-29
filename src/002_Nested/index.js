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
    const { store: { persons, setFirstName, setPhone } } = this.props;
    return (
      <div>
        {persons.map(({ name, phone, email }, index) => {
          return (
            <div key={email}>
              <input value={name.first} onChange={event => setFirstName(email, event.target.value)}></input>
              <input value={phone} onChange={event => setPhone(email, event.target.value)}></input>
            </div>
          )
        })}
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
import React from 'react';
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'

class Person {
  @observable firstName = "firstName";
  @observable lastName = "lastName";
  @computed get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  @action
  randomName = () => {
    this.firstName = Math.random();
    this.lastName = Math.random();
  }
}

const PersonComponent = observer(function ({ person }) {
  return <div>
    <button onClick={person.randomName}>Random Name</button>
    <span>{person.fullName}</span>
  </div>
})

const Demo = function () {
  const person = new Person;
  window.person = person;
  return <div>
    <PersonComponent person={person}></PersonComponent>
  </div>
}

export default Demo;
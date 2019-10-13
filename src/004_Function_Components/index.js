import React from 'react';
import { useLocalStore, observer, useObserver } from "mobx-react";

const Demo = observer(() => {

  const personStore = useLocalStore(() => ({
    firstName: 'First',
    lastName: 'Last',
    randomName() {
      this.firstName = Math.random();
      this.lastName = Math.random();
    },
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  }))

  return (
    <div>
      <button onClick={personStore.randomName}>Random Name</button>
      <span>{personStore.fullName}</span>
    </div>
  )
});

export default Demo;
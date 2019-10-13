import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react' // 6.x

const Demo = () => {

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

  return useObserver(() => {
    return (<div>
      <button onClick={personStore.randomName}>Random Name</button>
      <span>{personStore.fullName}</span>
    </div>)
  })
}

export default Demo;
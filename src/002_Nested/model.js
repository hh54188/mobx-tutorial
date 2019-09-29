import { observable, runInAction, action } from 'mobx'
import axios from 'axios';

class Model {

  @observable persons = [];

  constructor() {
    axios.get('https://randomuser.me/api/?results=5').then(({ data: { results } }) => {
      this.persons = results;
    })
  }

  @action
  setFirstName = (email, firstName) => {
    this.persons.find(p => p.email === email).name.first = firstName
  }

  @action
  setPhone = (email, phone) => {
    this.persons.find(p => p.email === email).phone = phone;
  }
}

export default new Model;
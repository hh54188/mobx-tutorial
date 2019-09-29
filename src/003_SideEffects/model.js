import { observable, action, autorun, reaction, when } from 'mobx'
import axios from 'axios';

class Model {
  @observable options = [1, 2, 3];
  @observable selectedValue = 1;

  @action
  setSelectedValue = (value) => {
    this.selectedValue = value;
  }

  constructor() {
    autorun(() => {
      console.log('LOG:', this.selectedValue);
    })

    reaction(() => this.selectedValue, queryCount => {
      axios.get(`https://randomuser.me/api/?results=${queryCount}`).then(({ data: { results } }) => {
        console.log(results);
      })
    })

    // when(() => {})
  }
}

export default new Model;
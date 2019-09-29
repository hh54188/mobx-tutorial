import { observable, computed, action } from 'mobx'

class Model {
  @observable name = 'L';
  @observable age = 22;

  @computed get disableSubmit() {
    return !this.name || !this.age;
  }

  @action
  setNameValue = (value) => {
    this.name = value;
  }

  @action
  setAgeValue = (value) => {
    this.age = value;
  }
}

export default new Model;
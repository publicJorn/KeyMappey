import { observable, computed } from 'mobx'

export default class {
  @observable firstName = ''
  @observable lastName = ''

  constructor (first = '', last = '') {
    this.firstName = first
    this.lastName = last
  }

  @computed
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

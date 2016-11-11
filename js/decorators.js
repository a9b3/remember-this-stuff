
import { observable } from 'mobx'

function one(target, key, descriptor) {
  const fn = descriptor.value
  return Object.assign({}, descriptor, {
    value: function(...args) {
      return 'one ' + fn.apply(this, ...args)
    }
  })
  // const fn = descriptor.value
  // descriptor.value = function(...args) {
  //   return 'one ' + fn.apply(this, ...args)
  // }
  // return descriptor
}

function two(target, key, descriptor) {
  const fn = descriptor.value
  descriptor.value = function(...args) {
    return 'two ' + fn.apply(this, ...args)
  }
  return descriptor
}

function readonly(t, key, desc) {
  desc.writable = false
  console.log(desc.initializer())
  console.log(t, key, desc)
  return desc
}

function emitOnSet(t, key, desc) {
  const defaultValue = desc.initializer()
  delete desc.initializer
  delete desc.writable

  let _value = defaultValue
  desc.get = function getter() {
    return _value
  }
  desc.set = function setter(value) {
    console.log(`[${t.name}.${key}] setting ${value} was ${_value}`)
    _value = value
  }
  console.log(desc)
  return desc
}

function ob(v, keyOrScope) {
  console.log(v, keyOrScope)
  console.log(v.value)
}

class Cat {
  @observable
  name = 'cat'

  @one
  @two
  hi() {
    return this.name
  }
}

const cat = new Cat()
console.log(cat)

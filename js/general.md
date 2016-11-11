## defineProperty

Property `descriptor` is the third argument to defineProperty.

```js
/* data */
{
	value,
	writable,
	configurable,
	enumerable,
}

/* or */

/* accessors */
{
	configurable,
	enumerable,
	get,
	set,
}
```

Defines a field in an object with properties.

```js
const obj = {}
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  configurable: true,
  enumerable: true,
  writable: true,
})

const obj = {}
Object.defineProperty(obj, 'foo', {
  get() {},
  set(value) {},
  configurable: true,
  enumerable: true,
})
```


## Decorators

A decorator function has the same signature as `Object.defineProperty`. Return a descriptor to apply to the decorated.

```js
function foo(target, name, descriptor) {
	descriptor.value = function() {
		console.log('i am decorated')
	}
	return descriptor
}

class Bar {
	@foo
	bar() {
	  console.log('i am not decorated')
	}
}

const bar = new Bar()
bar.bar()
// => 'i am decorated'
```

`target`: context of decorated

`name`: name of decorated

`descriptor`: object properties

descriptor.value


Must return descriptor

```js
// immutable
function one(target, key, descriptor) {
  const fn = descriptor.value
  return Object.assign({}, descriptor, {
    value: function(...args) {
      return 'one ' + fn.apply(this, ...args)
    }
  })
}

// mutable
function two(target, key, descriptor) {
  const fn = descriptor.value
  descriptor.value = function(...args) {
    return 'two ' + fn.apply(this, ...args)
  }
  return descriptor
}

class Cat {
  name = 'cat'

  @one
  @two
  hi() {
    return this.name
  }
}

const cat = new Cat()
console.log(cat.hi())
// => 'one two cat'
```

**Notes**

- decorator on class properties https://github.com/wycats/javascript-decorators/issues/41

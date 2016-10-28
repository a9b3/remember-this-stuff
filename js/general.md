## Decorators


```js
function foo(target, name, descriptor) {
	return descriptor
}
```

`target`: context of decorated

`name`: name of decorated

`descriptor`: object properties

descriptor.value


Must return descriptor

## defineProperty

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
  writable: true,
})
```
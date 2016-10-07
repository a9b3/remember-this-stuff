## Basics

#### lambda

Anonymous function.

```py
print filter(lambda: c: c, str.split(','))
```

#### logic operators

There is no `!isValid(a)` use the keyword `not` when evaluating a functions return.

```py
if (not isValid(a)):
	print 'not valid'
```

`&&` is `and`.

```py
if (a != 'one' and a != 'two'):
	print 'not one or two'
```

`!map['key']p`

```py
'key' in map
'key' not in map
```

#### Set (unordered list of unique items)

```py
# from a list
set1 = {a for a in [1,2,3]}
set2 = set([1,2,3])
```

Difference in sets

```py
set1 - set2 lkj# => returns set

for diff in set - set2:
  print diff
```

#### Dictionary (Map)

```py
# declare
map = { 'foo': 'foo-value', 'bar': 'bar-value' }

# use
map['foo']

# get keys
map.keys()
```

#### Function parameters

Spread arguments

```py
def foo(*arg):
	for a in args:
		print a
		
foo(1,2)
# => 
# 1
# 2
```

Spread named arguments

```py
def foo(**arg):
	for a in args:
		print args[a]
		
foo(one=1, two=2)
# =>
# 2
# 1
```

Destruct arguments

```py
def foo(x, **rest):
	print x
	print rest
	
foo({ 'x': 'x', 'y': 'y' })
# => 
# 'x'
# { 'y': 'y' }
```

## `__name__`

`__name__` is a env variable that will be set to the name of the file in which it's in.

```py
# foo.py
print __name__
# => 'foo'
```

However when you pass a file to python interpreter, it's `__name__` will always be set to `'__main__'`.

```py
# bar.py
print 'inside', __name__
```

```sh
$ python bar.py
# => 'inside __main__'
```

## Import/Export

Import function `bar` from file `foo.py` same working directory.

```py
from foo import bar
```

Working with directories. Create a file named `__init__.py` and put it at the root of the package directory, this will allow files from that directory to be imported from other files.

```
dir/
  __init__.py
  foo.py
  bar.py
```

Now you can import like this

```py
from dir import foo,bar

foo.someFuncInFoo()
```

## Flask

```py
import flask

app = flask.Flask(__name__)

blueprint = flask.Blueprint('routes', 'foo')

@blueprint.route('/')
def index():
	return 'hello world'
	
app.register_blueprint(blueprint)

if __name__ = '__main__':
	app.run(debug=True)
```
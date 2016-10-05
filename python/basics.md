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
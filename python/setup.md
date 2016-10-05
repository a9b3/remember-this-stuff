# Setup

```sh
brew install python
```

This will give you `pip` as well. pip is the package manager for python.

### virtualenv

```sh
pip install virtualenv
```

virtualenv is used to create a local copy of pip installs in any given directory, which the directory then uses as it's source of truth for python packages (instead of systemwide python packages).

```sh
mkdir foo-project
cd foo-project
virtualenv venv
source venv/bin/activate
```

`virtual venv`: creates `venv/` directory in cwd. <br>
`source venv/bin/activate`: activates the virtual environment you can perform pip installs but they will now be localized to the activated virtual environment.

To deactivate simply run.

```sh
deactivate
```

*venv directory is similar to node_modules directory (do not commit to version control)*

To keep track of packages installed in the project, you want to save the list of packages installed using the following. It is similar to `package.json` when developing in javascript.

```sh
pip freeze > requirements.txt # save to requirements.txt
pip install -r requirements.txt # install from requirements.txt
```

extras:

- [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html): Easy switching between different venvs.
- autoenv: `brew install autoenv` automatically switch when you cd into a directory with `.env` file.

#Links
http://docs.python-guide.org/en/latest/
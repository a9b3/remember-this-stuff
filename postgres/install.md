### 1. Install

On mac os install via [postgres.app](http://postgresapp.com/). After installing add the following to your paths so you have access to the command line tools.

### 2. Export Path

Add to dotfiles.

```sh
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```

### 3. Verify It's Working

Now just run the app, and a local postgres server should be up and running. You can verify by connecting to the database using psql.

*remember to restart shell to source path*

```sh
psql # should connect to local server
```
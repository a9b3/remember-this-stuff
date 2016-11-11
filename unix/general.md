## cURL

Mac default curl client doesn't have openssl support, install with brew.

```sh
brew install curl --with-openssl
brew link curl --force
```

Working with TLS

```
curl --cacert ca.crt --cert admin.crt --key admin.key https://foo.com
```

Working with REST api

```
curl -XPUT -d value='hi' http://foo.com
```

**Debugging with cURL**

The `-v` flag will print out the headers of the request + response.

```
curl -v http://foo.com
```
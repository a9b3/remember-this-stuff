## ssl

Ensure secure transaction between web server and browser, uses third party certificate authority to identify one end or both ends.


## openssl

https://spin.atomicobject.com/2014/05/12/openssl-commands/

- ca (certificate authority)
- private key
- csr (certificate signing request)

Generate private key and csr using a config file.

```sh
openssl req \
	-out csr \
	-new -newkey rsa:2048 \
	-nodes \
	-keyout private.key \
	-subj '/CN=foo' \
	-config openssl.cnf
```

Read csr.

```
openssl req -text -noout -in csr
```

Issue cert using existing CA and csr.

```sh
openssl x509 \
  -req \
  -in <csr file> \
  -CA <ca file> \
  -CAkey <ca key file> \
  -CAcreateserial \
  -days 365 \
  -extensions v3_req \
  -extfile <cnf file> \
  -out crt
```

Reading a crt.

```
openssl x509 -text -noout -in <filename for crt>
```

Verify private key matches certificate.

```sh
openssl x509 -noout -modulus -in server.crt | openssl md5 
openssl rsa -noout -modulus -in myserver.key | openssl md5 
```
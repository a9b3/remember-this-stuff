# etcd

Start etcd

#### Client to server transport security with HTTPS

```sh
etcd \
	--cert-file=crt \
	--key-file=private.key \
	--trusted-ca-file=ca.pem \
	--advertise-client-urls=https://127.0.0.1:2379 \
	--listen-client-urls=https://127.0.0.1:2379
```

Use certs with etcdctl

```
etcdctl --cert crt --key private.key --cacert ca.pem member list
```

Use certs with curl

```sh
# set key 'foo'
curl https://127.0.0.1:2379/v2/keys/foo --cacert /etc/etcd/certs/crt -XPUT -d value=bar -v
# get key 'foo'
curl https://127.0.0.1:2379/v2/keys/foo --cacert /etc/etcd/certs/crt
```

#### Secure client-server and cluster etcd

```sh
etcd \
  --name={{current['name']}} \
  --client-cert-auth \
  --trusted-ca-file=/etc/etcd/certs/ca.pem \
  --cert-file=/etc/etcd/certs/crt \
  --key-file=/etc/etcd/certs/private.key \
  --peer-trusted-ca-file=/etc/etcd/certs/ca.pem \
  --peer-cert-file=/etc/etcd/certs/crt \
  --peer-key-file=/etc/etcd/certs/private.key \
  --advertise-client-urls=https://{{current['ipv4_address_private']}}:2379 \
  --listen-client-urls=https://{{current['ipv4_address_private']}}:2379,http://127.0.0.1:2379 \
  --initial-advertise-peer-urls=https://{{current['ipv4_address_private']}}:2380 \
  --listen-peer-urls=https://{{current['ipv4_address_private']}}:2380 \
  --initial-cluster-token=etcd-cluster-0 \
  --initial-cluster={{ips|join(',')}} \
  --initial-cluster-state=new \
  --data-dir=/var/lib/etcd
```
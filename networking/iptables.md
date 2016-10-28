# IP Tables

### NAT (Network Address Translation)

NAT is the process of taking a source ip and replacing it with another ip. A network of private machines can access the internet through a firewall, which will expose it's own public IP outgoing by replacing the source ip (internal private network machine) with it's own ip.

```
		--------------         -----------                ---------------
IN -->	| PREROUTING | ------> | Forward | ---- yes ----> | POSTROUTING | ---> OUT
		--------------         -----------                ---------------
		                            |                           ^
		                            no                          |
		                            |                      ----------
		                            ---> Local Process --> | OUTPUT |
		                                                   ----------
```

*PREROUTING* - incoming packets that just arrived at the network interface

*OUTPUT* - locally generated packets start here instead of prerouting

*POSTROUTING* - packets arrive here before going out

### Chains

**Input** - incoming connection

**Forward** - forwarding incoming connections

**Output** - outgoing connection

### Policy

You can apply policies to chains.

```sh
iptables --policy INPUT DROP
```

**DROP** - drop all connections, source will not realize your system exists

```sh
# example response might look like htis
ping 192.168.1.2
Request timed out.
```

**ACCEPT** - accept all connnections

```sh
# example response might look like htis
ping 192.168.1.2
Reply from 192.168.1.2: bytes=32 time<1ms TTL=64
```

**REJECT** - reject connect send back an error

```sh
# example response might look like htis
ping 192.168.1.2
Reply from 192.168.1.2: Destination port unreachable.
```

### Rules

iptables read the rules top down and applies the first rule it finds that matches.

```sh
-A			append to this rule
-s			source
-d			destination
-j			jump to
-p			protocol (tcp,udp,etc...)
-m			match
-o			network interface name (eth0, eth1, docker0, etc...)
--dport		port number or protocol (ssh)
```


```sh
-A POSTROUTING -o eth1 -j MASQUERADE
```

Append to POSTROUTING, for packets outgoing on eth1, apply action masquerade(replace senders address with routers address)
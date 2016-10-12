# Subnet

`ip address` - numeric address for any physical device in a tcp/ip-based network

`subnet` - portion of a network, all addresses part of a subnet has the same prefixes to their ip address

`subnet mask` - a 32bit number which is used to bit multiply a network address to reveal an underlying subnetworking

### Binary Numbers

Binary number representation. Going from right to left each digit represents the sum of the previous represented number starting from 1.

```
0 0 0 0
8 4 2 1

1 0 1 0
8 4 2 1

=> (1*8) (0*4) (1*2) (0*1) = 10
so the binary number 1010 represents the alphanumeric number 10
```

Lets do this for an ip address as an example.

```
0   0  0  0  0 0 0 0
128 64 32 16 8 4 2 1
```

```
192.93.2.1

first octet is 192
192
11000000

second octect is 93 which is equal to 64 + 16 + 8 + 4 + 1 
93
01011101

third octet 2
00000010

and fourth octect is 1
00000001

192.93.2.1
11000000.01011101.00000010.00000001
```

### IP Address

IP address is in the `dotted decimal format` which is XXX.XXX.XXX.XXX each number between a decimal is a digit (also called an `octet`) ranging from 0 - 255. The range is 0-255 is because each digit is a 8-bit number which has the maximum number of 256. The whole IP address is a 32 bit number.

```
00000000.00000000.00000000.00000000
   8         8        8        8
```

The first octect also has ranges for predefined classes. Each ip also has information containing the network it belongs to and individual (host). Each class considers different octets as a representation for the network it belongs to.

- `0-126` A, network.host.host.host
- `127` is localhost
- `128-191` B, network.network.host.host
- `192-223` C, network.network.network.host
- `224-239` D (reserved)
- `240-255` E (reserved)

```
10.2.3.244

this ip is class A so the following is true
network is 10
host is 2.3.244
```

#### Subnet Mask

To create a subnet you must use a subnet mask. A subnet mask indicates how many bits to 'mask'. A subnet mask is represented as an ip address, and it can also be represented with the bits it contains which is called a `CIDR` (pronounced cider). CIDR can be represented as such `/23` at the end of an ip address.

**Example**

Let's choose a random subnet mask `255.255.255.128` if you translate this number to bits it will be 21 bits.

```
255.255.255.128

11111111.11111111.11111111.10000000
   255      255      255      128

CIDR = 21
```

Let's apply this mask to an address

```
10.1.2.1/26
26 is the CIDR

11111111.11111111.11111111.1 | 0000000

00001010.00000001.00000010.0 | 0000001
                               0000001 <-- lower bound
                               1111111 <-- upper bound

network address
00001010.00000001.00000010.00000001
10.1.2.1

broadcast address
00001010.00000001.00000010.01111111
10.1.2.127

the range of this subnet is 10.1.2.1 - 10.1.2.127
10.1.2.1/26 = 10.1.2.1 - 10.1.2.127
```

After applying the mask to the given ip, only the bits after the line can be changed. This means the last 7 bits of the fourth octect, any combinations of changes to those bits is the range of this subnet. 10.1.2.1/26
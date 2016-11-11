Start shell session in a container

```
docker exec -i -t <name> /bin/bash
```

Copy file into container

```
docker cp foo <name>:/foo
```

Restart 

```
docker restart <name>
```
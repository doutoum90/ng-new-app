# NgNewApp

## Utilisation de DockerFile et docker simple
### build du docker 

```
docker build -t <container_name> . 
```

comme ça 
```
docker build -t angular-test .
```

### execution du docker

```
docker run -it -p <port>:80 <container_name>:<version>
```
par exemple

```
docker run -it -p 800:80 angular-test:latest
```

### Test

ouvrir le lien suivant 

[Lien](http://localhost:800)


## utilisation de docker-compose

### demarrage du projet avec docker

```docker-compose up --build simple-project```

### Test

disponible sur ce [lien](http://localhost:808) 
# Classroom web
## Arquitecture

The full classroom is made up with three services routed by traefik, two databases and a cache store

This repository contains the web front end made with NextJS

The following image describe the full arquitecture and the tecnologies used
![arquitecture](https://github.com/Binaretech/classroom/blob/main/img/classroom-diagram.png?raw=true)

Full source is available on https://github.com/Binaretech/classroom


## Getting Started

First install de dependencies
```bash
$ npm install
```

Second, run the development server:

```bash
$ npm run dev
```

Or simply with docker-compose 

```bash
$ docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the working web UI.
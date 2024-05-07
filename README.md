# Kursbuch

A visual representation of real-time train schedules and connections as German [Kursbuch](https://kursbuch.bahn.de/hafas-res/img/kbview/ContentPDFs/KB_KB_Tabelle_lesen.pdf) tables

## Setup

### With Docker

1. Build the container

```console
docker build -t kursbuch:latest .
```

2. Run the container

```console
docker run -p 8080:80 kursbuch                                         # production
docker run -p 8080:80 -v ./public:/usr/local/apache2/htdocs kursbuch   # development
```

3. Open a web browser and go to `http://localhost:8080`

### Without Docker

1. Clone this repository to a web server, for example based on nginx or Apache
2. Set the `public` folder as your web root directory

# gab.ly
> Make it short, pls!

[![Build Status](https://travis-ci.org/gabrieledarrigo/gably.svg?branch=master)](https://travis-ci.org/gabrieledarrigo/gably)

## Introduction

gab.ly is s super duper url shortner for the "Web programming" course of "Sicurezza dei Sistemi e delle Reti Informatiche":  
with gab.ly application the user can convert a url into a short url so that it can be be used in emails, documents, websites, or where typing a long url is not convenient.  

The application is developed with the technologies illustrated during the course: [Node.js](https://nodejs.org/it/) for the server application, HTML5, CSS3 and Javascript for the client.  

The application runs here: [https://gably.herokuapp.com/](https://gably.herokuapp.com/)

### Requirements

Even if the application architecture presents some techinal challenges, the requirements are quite simple: 

1. A user can past a valid url into the application input and convert it into a short url in the form of: *http://gab.ly/${unique_identifier}*
2. A user can copy the resulting, converted short url to use it everywhere he / she wants.
3. When a user navigate to the short url, he / she is rediredicted to the original url.
4. If a user navigate to a not existent short url he / she is redirected to the application home page.

### Target

gab.ly is addressed to mid / expert users, capable of browsing Internet and web applications to create some content.  
It targets users that need a url shortner, that are not satisfied by bit.ly, the main competitor, and that have no more options after the
Google goo.gl shutdown.  
Gab.ly will be used preferably from desktop devices, due to the fact that is a tool , but can be used on mobile devices too.

##### Language

gab.ly use a simple yet powerful visual languague to organize the information: similar to the well known Google's homepage the application has a single input that can be used to retrieve the short url.

##### User's motivation

gab.ly users will be mainly driven by business motivations: the need for a tool to create short url that can be used during daily work where a long url is awkward.    
Saying this, it's clear that gab.ly users already knows what they want, and that they are set up to actively search for the contents exposed by the application.  
Here follows the Marcia Bates classification for the information seeking relative to gab.ly:

|            | active    | passive     |
|------------|-----------|-------------|
| **directed**   | *Searching* | Monitoring  |
| **undirected** | *Browsing*  | Being Aware |


### Business value

The application adopt a freemium with subscription business model: users can use gab.ly without any limitation in its functionality and without any monetary cost, but with the possibility to register and pay for a premium version.  
Adopting this model we can identify the business value of gab.ly deriving principally from three main sources.  
The first source are advertising that are opened in a new tab everytime a user create a short url. This source of value depends and is strictly related with the entity of the traffic that gab.ly can generate, so it's hard to estimate its value without a collection of metrics.  
The second source are subscriptions; with a price of $ 1.99 a user can register to gab.ly and use the premium functionality:

- The analytics associated with each created short url that shows how many times that url was used 
- No more advertising on short url creation

Money transaction will be initially handled with paypal, extending later the payments method to other vendor.

### Flow of data

Data are user created: every time a user paste a valid url into the application a new short url is created and is available to be used.  
The data flow is very simple, fully automated and the cost per data depends only on the number of requests done to the application.  
Data transformation happens on every short url creation: the original url is tied together with a unique id and persisted into the storage layer in JSON format.

### Technological choices and architecture

gab.ly application follows some of the twelve factor application principle, and is composed by three main architectural components: 

- MongoDB as the main database to store and query the data.
- A layer of HTTP API that can be used to create and retrieve short urls, using JSON as the main data exchange format.
- A simple client side application that handle the short url creation / usage.

The architeture is tied together and orchestrated with Docker, in order to simplify the development and the production management. 

##### Storage

The data are persisted into JSON format, so that they are: portable between different storage system, small in size, easy to serialize / deserialize independently by the programming language used to extract and expose them.  
Each short url data structure has this format:

```javascript
{
    _id: String,
    originalUrl: String,
    value: String,
    createdAt: Date,
    updatedAt: Date
}
```

and is archived into MongoDB.
MongoDB is a natural fit for an applications of this type, due to it's scalabilty and ease of use.

##### HTTP API

The HTTP API are built with express.js framework, following a classical MVC architecture defined by:

- Controllers: they handle the HTTP interaction with the outside using JSON format.
- Models: A single domain model, it represent the short url object that is saved into MongoDB.
- Router: Where all API routes are defined
- Services: A services that implements the domain logic required to handle short url: creation, persistance, query and so on.

##### Client side application

The client side application is built with the standard web technologies: HTML5 and CSS3 to create the page structure and styles, and Javascript, in ECMAScript6 version, to handle the user interface interaction

##### Development and production

During the development of gab.ly application I followed some software engineering best practices:
the API were developed with TDD, using Jest and sinon as test framework, all the code was versioned in github from the first commit and I used Travis.ci, an open source integration server in order to build and test the application on every push on the remote repository.  
To facilitate the development without environments differences between development and production Docker was a natural fit: gab.ly application is dockerized and orchestrated with docker-compose.  
Here a development flow diagram:




## User interface

 
## Architettura

### Diagramma dell'ordine gerarchico delle risorse


### Descrizione delle risorse
Ogni singola risorsa deve essere descritta per le sue componenti MVC indicando le transazioni, l'ordine delle transazioni e gli eventuali parametri passati nella transazione.

Figura 2: Legenda della notazione utilizzata
Figura 3: Componenti MVC della pagina servizi.html

## Codice
Frammenti del codice più significativo
  
4.1. HTML
4.2. CSS
4.3. API
4.4. Node.js

## Conclusioni
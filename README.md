# Gab.ly
> Make it short, pls!

[![Build Status](https://travis-ci.org/gabrieledarrigo/gably.svg?branch=master)](https://travis-ci.org/gabrieledarrigo/gably) 
[![Heroku](http://heroku-badge.herokuapp.com/?app=gably&style=flat)](https://gably.herokuapp.com/) 


## Introduction

Gab.ly is a simple and fast URL shortener web application, developed for the "Web programming" course of "[Sicurezza dei Sistemi e delle Reti Informatiche](http://www.cosp.unimi.it/offerta_didattica/F68.htm)":  
with the Gab.ly application a user can convert an URL into a short one so that it can be used in emails, documents, websites, or other places where typing a long URL is not convenient.  

The application was developed with the technologies illustrated during the course: [Node.js](https://nodejs.org/it/) for the server application, HTML5, CSS3 and Javascript for the client.  

The application runs in production at [Heroku](https://www.heroku.com/), at the following link:  

 [https://gably.herokuapp.com/](https://gably.herokuapp.com/)

### Requirements

The application architecture presents some technical challenges, but at its core, the requirements are quite simple: 

1. A user can pasts a valid URL into the application form's input, and converts it into a short URL in the form of *http://gab.ly/_id*  
2. A user can copy the resulting, converted short URL everywhere he/she wants (emails, documents, others web pages, etc etc)
3. When a user navigates to a specific short URL, he/she is redirected to the original URL.  
4. If a user navigates to a not existent short URL (not recognized by the application) he/she is redirected to the application home page.  

### Target

Gab.ly targets mid to expert users, capable of browsing the Internet and using complex web applications used to create contents and media of various types.    
It meets the expectations of users that need a simple, fast, URL shortener and that are not satisfied by [bit.ly](https://bitly.com/), which is the main competitor, due to its complexity, and that have no options after the [goo.gl](https://goo.gl) shutdown.  
Gab.ly is a business-oriented tool and will be used preferably from desktop devices, probably during working time, but it can be used on mobile devices too, thanks to the responsiveness of the user interface.

### Language

Gab.ly use a simple yet powerful visual language to organize the information: similar to the well known Google's homepage the application has a single input that can be used to retrieve the short URL.  
The "copy" action is intuitive as well, since a user can simply copy the short URL, just by selecting it, or by pressing the "copy to clipboard" button.   

### User's motivation

Gab.ly users will be mainly driven by business motivations: the need for a tool to create short URLs that can be used during daily work, where a long URL is awkward to use.      
Saying this, it's clear that Gab.ly users already know what they want, and that they are set up to actively search for the contents exposed by the application.  
Here follows the Marcia Bates classification for the [information](https://pages.gseis.ucla.edu/faculty/bates/articles/info_SeekSearch-i-030329.html) seeking relative to the Gab.ly application:

|            | active    | passive     |
|------------|-----------|-------------|
| **directed**   | *Searching* | Monitoring  |
| **undirected** | *Browsing*  | Being Aware |

As we can observe Gab.ly users are a direct searcher, aware of the scope of the application.  

### Business value

The application adopts a _freemium with subscription business model_:  
users can use Gab.ly without any limitation in its functionality and without any monetary cost, but with the possibility to register and pay for a premium version.  
Adopting this model we can identify the business value of Gab.ly deriving principally from three main sources.    

The first source of value is the advertisings that are opened in a new tab everytime a user create a short URL. This source of value depends, and is strictly related, with the entity of the traffic that Gab.ly can generate; at this point of the development is hard to estimate its value without a collection of metrics.  

The second source of value is users subscriptions; with a price of $ 1.99 a user can register and login to Gab.ly and use the premium functionality:

- The analytics associated with each created short URL that shows how many times that URL was used.  
- No more advertising on short URL creation.  

Money transaction will be initially handled with PayPal, extending later the payments methods to other vendors.  

### Flow of data

Data are user created: every time a user pastes a valid URL into the application a new short URL is created and is ready to be copied and used.    
The data flow is very simple, fully automated and the cost _per_ data depends only on the number of requests done to the application: more short URLs are archived into the storage layer more this layer should scale and adapt to receive the incoming data.  
In regards to data transformation, this happens on every short URL creation: the original URL is tied together with a unique id and persisted into the storage layer in JSON format.

### Technological choices and architecture

The Gab.ly application follows some of the [twelve-factor application](https://12factor.net/it/) principles:

- One codebase tracked in a version control system (GitHub), with many frequent deploys
- The application dependencies are explicitly declared and isolated
- The application configuration is stored in the environment
- Development, build, and run stages are strictly separated
- Development and production are similar as possible

 and is composed of three main architectural components: 

- [MongoDb](https://www.mongodb.com/), the database used to store and query the data.  
- A layer of HTTP API that exposes two endpoints to create and retrieve short URLs, using JSON as the main data exchange format.  
- A simple client-side application that handles the short URL creation/copy.  

The application architecture is tied together and orchestrated with [Docker](https://www.docker.com/), in order to simplify the development flow and the production management and to minimize the differences between these two environments.  

#### Storage

Gab.ly's data are archived in JSON format. This means that data are:  
easily portable between different storage systems, small relative to the storage size, easy to serialize/deserialize independently by the programming language used to extract and expose them.  
With these requirements, MongoDB was a natural fit for applications of this type, due to its scalability, ease of use and the high cohesion with Node.js
Each short URL data structure has this format:  

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

#### HTTP API

HTTP API are built with [express.js](http://expressjs.com) framework, a simple, unopinionated and minimalist micro framework for Node.js that works well for handling HTTP protocol's based applications, thanks to the adoption of the middleware pattern.  

The HTTP API follows a classical MVC architecture defined by different layers:  

- Controllers: they handle the HTTP interactions with the outside using JSON format for message exchange.  
- Models: A single domain model, it represents the short URL object that is saved into MongoDB.  
- Router: Where all API routes are defined.  
- Services: A service that implements the domain logic required to handle short URL: creation, persistence into the storage layer, query for short URL, URL validation and other utility.    

#### Client side application

The client-side application is built with standard web technologies:  
HTML5 and CSS3 were used to create the page markup and the styles for Gab.ly, and Javascript, in ECMAScript6 version, to handle the user interface interactions.  
The web page is served with a middleware of express.js whose purpose is to serve static content to the clients.  

#### Development and production

During the development of Gab.ly application I followed some of the software engineering best practices:
From the first iteration the code was versioned in GitHub to take advantage of its branching capabilities; the API were built with TDD (test drive development), writing the tests first (as they are the application's requirements) to have fast feedback during the development phase.  
On every push on the remote GitHub repository [Travis.ci](https://travis-ci.org/), an open source integration server runs automatic jobs that build and tests the application.  
To facilitate the development without environments differences between the development and production environment, Docker was a natural choice.  
chosen application is dockerized and orchestrated with docker-compose; the latter defines two services, one for the Node.js application, the other for MongoDB; every time a developer of Gab.ly's team push a change to the master branch, Travis.ci automatically build the container and push the new code to Heroku.  

The development flow diagram:  

![Development flow diagram](https://raw.githubusercontent.com/gabrieledarrigo/gably/readme/diagrams/gably_development-flow.png "Development flow diagram")

## User interface

The user interface consists in a single web page, and is heavily inspired by Google.com homepage: the application title (Gab.ly) occupy the first portion of the screen, welcoming the users with a funny typeface;  
afterward, a simple, minimalist and immediate form with an input is present in the middle of the page. The input can be used to paste a valid URL to convert it into a short one after the form submission.  
The language used to stylize the interface is material design, chosen for its immediacy, simplicity and powerful principles that are widely recognized in a myriad of applications and website.  

#### Mockup

![User interface mockup](https://raw.githubusercontent.com/gabrieledarrigo/gably/readme/diagrams/mockup-pencil_colors.png "User interface mockup")

#### Definitive design

![User interface design](https://raw.githubusercontent.com/gabrieledarrigo/gably/readme/diagrams/gably_ui.png "User interface design")

## Resources architecture

Gab.ly application exposes a single webpage to the final user: 

- index.html

The API exposes two HTTP endpoints:

- gab.ly/shorten
- gab.ly/:id

### Resources diagrams

![Short url creation](https://raw.githubusercontent.com/gabrieledarrigo/gably/readme/diagrams/short_url.png "Short url creation")

1. A user pastes a valid URL into Gab.ly's input and submits the form. 
An HTTP POST request is done to the server, posting a JSON payload of this form:

```json
{
    "originalUrl": "http://origina.url",
}
```
to _gab.ly/shorten_ endpoint.  

2. An express.js route handler, `IndexController.shorten`, receive the request, parse it, extracts the _url_ param, and invokes the `UrlService.save` method to create and persist a short URL into the underlying persistence layer. 

3. At this point `UrlService.save` method creates a shortUrl data structure, already illustrated in the [storage](section), generating a unique id that is used to identify a specific short URL and persists it into MongoDB.  

![Redirect to original url](https://raw.githubusercontent.com/gabrieledarrigo/gably/readme/diagrams/redirect.png "Redirect to original url")

1. A user paste a short URL of this form into the browser's search bar: _http:Gab.ly/\_id_, performing a GET request.  

2. An express.js route handler, `IndexController.redirect`, takes in charge the request and extracts the _\_id_ parameter. The former is passed as an argument to `UrlService.getShortUrlById`.  

3. `UrlService` use the _\_id_ parameter to find a shortUrl with that specific identifier in MongoDB.  

4. If present, MongoDB returns the shortUrl JSON object.  

5. `UrlService` returns the shortUrl to `IndexController.redirect` handler.  

6. The handler uses the _originaUrl_ property of the shortUrl object to perform the redirect.  

## Code

Please browse the repository to see the most significant pieces of code of the Gab.ly application.  

## Conclusions

Gab.ly application development was both funny and instructive: it was the chance to implement a simple but scalable web application architecture with the latest web technologies, applying an iterative, agile and engineering development flow.  
The funniest part was projecting the architecture and the algorithm around the short URL creation, where basically there are two, well-known approaches:  

The first use and idempotent, bijective function that, given in input an URL compute in output a unique identifier: this means that for the same input (an URL) the function returns every time the same, exact output.    
With this technique the advantage is that there is less need for memory space in the storage layer; the drawback is that for each request the application should first checks if an URL is already existent, linearly increasing the number of queries executed; their number depends on the number of short URLs requested to the server, with an impact on the application's performance.

The second approach uses a function that creates non-sequential, URL- friendly unique ids: so for the same input (a URL), the function returns a different output.
This technique allows a "fire and forgets" approach, faster but less efficient in terms of storage needed to save the data.

Last but not least the development of Gab.ly forced me to approach themes, like models of business or the usability of a user interface, the fields on which I had zero to little knowledge!  
I only scratched the surface of this subjects, but learning is the reason why I decided to enjoy this University course.  
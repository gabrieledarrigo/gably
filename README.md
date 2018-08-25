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
The second source are subscriot

Il valore dell'applicazione.
Quali servizi o contenuti danno valore all'applicazione?  
Quali elementi possono attirare l'interesse degli utenti?
Quali elementi forniscono un valore all'investitore?
È possibile identificare le transazioni che generano questo valore?
È possibile fare una stima del valore prodotto (denaro, attenzione utenti, altro)?

###  Flusso dei dati
Quale qualità, stile e livello di dettagli caratterizzano i contenuti? Ottenere i contenuti.
I contenuti vanno prodotti o possono essere reperiti sul mercato? Quali sono i costi di produzione o riadattamento?
Archiviare e organizzare i contenuti
Quale metodo di archiviazione?
Quali metodi di selezione dei contenuti?
Pubblicare i contenuti
Quali trasformazioni devono essere applicate?
I contenuti devono essere resi in formati che facilitino la condivisione (riuso) o questa deve essere sfavorita?
Con che frequenza devo aggiornare i contenuti?
Come scelgo un contenuto?
Ci sono vincoli alla pubblicazione (diritti, licenze, scadenza)?

### Aspetti tecnologici
Sandard per i contenuti. Come gestisco la portabilità dei contenuti in archiviazione? Che formati usare? Quali sono gli standard? Come gestisco la portabilità dei contenuti in pubblicazione? Come li seleziono? Come li compongo?
Gestione del Codice tramite modello MVC (modelli alternativi da concordare col docente).
Tecnologie utilizzate. Come sono state utilizzate le tecnologie (elencarle distinguendo quelle richieste dal progetto d'esame e quelle eventualmente aggiunte per altri motivi)? Ci sono motivazioni che hanno portato a scegliere una soluzione scartandone altre?

## Interfacce
Descrivere le principali interfacce utente dell'applicazione. È importante evidenziare quale stile sarà applicato alle interfacce e quali risorse saranno coinvolte nella loro esecuzione.
Le interfacce possono essere disegnate o tramite un software o semplicemente a mano.
 
## Architettura

### Diagramma dell'ordine gerarchico delle risorse
Identificazioni delle pagine da rendere accessibili come risorse (URI) e loro organizzazione gerarchica.

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

## Nota bibliografica e sitografica
Dove si elencano le risorse bibliografiche e sitografiche usate come riferimento e documentazione del lavoro.
(1) Autore, Titolo, Editore, Anno
(2) URL, (autore data), Data di consultazione, (URN)
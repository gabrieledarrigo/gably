# gab.ly
> Make it short, pls!

[![Build Status](https://travis-ci.org/gabrieledarrigo/gably.svg?branch=master)](https://travis-ci.org/gabrieledarrigo/gably)

## Introduction

gab.ly is s super duper url shortner for the "Web programming" course of "Sicurezza dei Sistemi e delle Reti Informatiche": 
it lets the user to convert a url into a short url in order so that it can be be used
in emails, documents, other website, or where typing a long url is not convenient.  
The application it developed with the technologies illustrated during the course: [Node.js](https://nodejs.org/it/) for the server application, HTML5, CSS3 and Javascript for the client.  
The application runs here: [https://gably.herokuapp.com/](https://gably.herokuapp.com/)

### Requirements
Even if the application architecture presents some techinal challenges, the requirements are quite simple: 

1. A user can past a valid url into the application input and convert it into a short url in the form of: *http://gab.ly/${unique_identifier}*
2. A user can copy the resulting, converted short url to use it everywhere he / she wants.
3. When a user navigate to the short url, it is rediredicted to the original url.

### Destinatari
Capacità e possibilità tecniche.
Quale livello di esperienza possiedono?
Conoscono già cosa cercano o devono essere guidati?
Quale quantità di banda disponibile?
Che tipo di device useranno per connettersi?

Linguaggio.
Di quali linguaggi hanno esperienza?
Ci sono per loro dei linguaggi empatici?
Ci sono dei linguaggi o degli stili di riferimento per il tipo di applicazione proposta?

Motivazione.
Tipo di motivazione: intrattenimento, business, educational.
Livello di consapevolezza: predisposizione alla ricerca diretta o indiretta delle informazioni
Livello di motivazione: predisposizione alla ricerca attiva o passiva
Utilizzando il modello di Bates definire quindi le strategie adeguate per l'organizzazione dei contenuti.

### Modello di valore
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
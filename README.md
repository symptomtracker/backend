# Project Title

Symptomtracker Backend Server

## Project Description
This project is one of the core components of the whole [Symptomtracker](https://devpost.com/software/symptomtracker-62xhkp) Project. This project arose during the [WirVsVirusHackathon](https://www.bundesregierung.de/breg-de/themen/coronavirus/wir-vs-virus-1731968) Event.

The backend serves as a logic and persistence layer, which provides an API for several clients, which can be found here:
    * [Symptomtracker Project](https://github.com/symptomtracker)

## Getting Started

You need to clone the project and start a NodeJS Server + a MongoDB database to have it running on localhost.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
Yarn or NPM
MongoDB Community Edition
```

### Running the Server

Switch to the directory

```
$ cd /symptomtracker-backend/
```

Start the NodeJS Server

```
yarn start
```

or

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

## Deployment

Due to the Proof of concept state of this project you need to have a MongoDB running on the same machine as the NodeJS Server, since the MongoClient
connects to localhost. We recommend configuring MongoDB in a way, that it only listens to localhost connections.

## Security

In the current state of the project and besides the limitation of time we've decided to skip the whole security part in order to stick to the
**KISS** (**K**eep **i**t **s**hort and **s**imple) paradigm.

Nevertheless it is required to take following points into consideration in terms of scalability and security
* Securing the API
    * With security mechanisms like oauth 2.0 for User Logins
    * API-Keys for technical clients
* Securing the persistence layer
    * Securing the Transport Layer
    * Securing Data at rest, since we're storing sensitive patients' data

## Built With

* [NodeJS](https://nodejs.org/en/) - Used as the JavaScript Environment to setup a server
* [Yarn](https://yarnpkg.com/) - Used as a Package Manager
* [MogoClient](https://github.com/mongodb/node-mongodb-native) - Used to connect to the perstiency layer
* [swagger-codegen](https://github.com/swagger-api/swagger-codegen) - Used to generate classes from openAPI 2.0 spec
* [SwaggerHub](https://swagger.io/tools/swaggerhub/) - Used to design the consumer's interfaces


## Authors

The initial Project was created by participants of the [WirVsVirusHackathon](https://www.bundesregierung.de/breg-de/themen/coronavirus/wir-vs-virus-1731968) Event.

* **Alex** - *Initial work* - [alexanderchmielewski](https://github.com/alexanderchmielewski)
* **Malte** - *Initial work* - [m1a9l9t7e](https://github.com/m1a9l9t7e)
* **Simon** - *Initial work* - [sleiss](https://github.com/sleiss)
* **Sven** - *Initial work* - [svenlr](https://github.com/svenlr)
* **Christian** - *Initial work* - [###](###)
//Who wants to be listed aswell?

See also the list of [contributors](https://github.com/symptomtracker/backend/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## See also on

* [YouTube](https://www.youtube.com/channel/UCQtwhY5A4YLoXUxC61mvbaA)
* [Twitter](https://twitter.com/symptomtracker1)
* [DevPost](https://devpost.com/software/symptomtracker-62xhkp)



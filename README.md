# fulfilment
Fulfilment Web Client

The web client connects to the Fulfilment API and allows you to do the following:

* Create/Edit/Delete Fulfilment workflows
* Create/Edit/Delete Webservice integrations
* Manage orders from the market
* Approve orders from the market (where required)

## Pre-requisites

### Desktop
Before you start anything you should install node.js, the latest and greatest is fine, or at least version 6 +

[Install node from here](https://nodejs.org/en/)

You will also need .net core, which is used to host and build the web application. You can install .net core by going here:

[Install dotnet core](https://www.microsoft.com/net/learn/get-started)

You need to have webpack installed, you can get that by running the following command:

```
	npm install -g webpack
```

Once you have cloned the project you will need to install the node modules. Do this by executing the following in the root of the project:

```
	npm install
```

Or you can use yarn which is much better!

```
	yarn install
```

#### Environment Variables
You will need to set the following Environment Variables:

`API_URL` - This is usually `http://localhost:5000` or the port your API is running on

`ASPNETCORE_URLS` - For development, set this to `http://localhost:8008`

`ASPNETCORE_ENVIRONMENT` - For development, set this to `Development`
***

***
### Server
Your server will need to have Docker installed. For ease we recommend [Digital Ocean](https://www.digitalocean.com) as they have excellent deals on droplet hosting (from as little as $5/month).

[Contact us](www.epic-software.co.uk) if you would like to look at our hosted plans, or for support.

An individual host does not require massives amounts of ram or compute power, however scale the server size for your needs. The application stack can also be load balanced.
***
### Database
You will need a SQL database for the fufilment engine. You can use any of the database providers below. The full list of EntityFramework Core providers can be found [here](https://docs.microsoft.com/en-us/ef/core/providers/), submit a PR to add another provider.

* SQL Server 2008 onwards
* PostgreSQL
* MySQL



# Table of Content

- [Requirements](#requirements)
- [Executing in Docker](#executing-in-docker)
- [Executing Locally](#Executing-locally)
    - [Setup Virtual Env](#setup-virtual-env)
        - [Mac, Linux and Unix](#mac-linux-and-unix)
        - [Windows](#windows)
    - [Dependencies Installation](#dependencies-installation)
    - [Setting up Database](#setting-up-database)
    - [Laod the Initial Test Data](#laod-the-initial-test-data)
    - [Create Admin User](#create-admin-user)
    - [Run Service](#run-service)
- [Runnning The GraphQL Query on UI](#runnning-the-graphQL-query-on-uI)

# Requirements

- Python3
- Docker

# Executing in Docker

Use the command to build a docker image

```bash
docker build -t pydjango-service .
```

And to start the service in docker execute

```bash
docker run -it -p 8000:8000 pydjango-service
```

# Executing Locally

## Setup Virtual Env

To run the service locally in a virtual environment, use the command below to setup 
a virtual environment for the project

### Mac, Linux and Unix

```bash
python3 -m venv env
chmod +x ./env/bin/activate
./env/bin/activate
```

### Windows

```cmd
python3 -m venv env
cd .\env\bin
activate
```

## Dependencies Installation

Install the dependencies with the folowing command

```
pip install -r requirements.txt
```

## Setting up Database

The project uses the in-memory database sqlite for a seamless execution and also to prevent 
so much setup for database.

To Create the tables and setup the database execute

```bash
python3 manage.py makemigrations  
python3 manage.py migrate
```

### Laod the Initial Test Data

```bash
python3 manage.py loaddata products
```

## Create Admin User

```bash
python3 manage.py createsuperuser
```

Enter your details for the prompts.
Visit [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) to manage the product on the platform

## Run Service

```bash
python3 manage.py runserver
```

# Runnning The GraphQL Query on UI

Visit the route on the browser [http://127.0.0.1:8000/graphql](http://127.0.0.1:8000/graphql)

Query for all products

```graphql
{
  allProduct {
    sku
    name
    image
    price
    description
  }
}

```

Sample Query to get by Id

```graphql
{
  productById(id: 1) {
    sku
    name
    image
    price
    description
  }
}

```

## References

- [DJango](#https://www.djangoproject.com/)
- [Graphene-Django](#https://docs.graphene-python.org/projects/django/en/latest/)





# Requirements

- Python3
- Docker (Optional)

# Executing in Docker

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
pip install -e requirements.txt
```

## Setting up Database

The project uses the in-memory database sqlite for a seamless execution and also to prevent 
so much setup for database.

To Create the tables and setup the database execute

```bash
python3 manage.py makemigrations  
python3 manage.py migrate
```

## Create Admin User

```bash
python3 manage.py createsuperuser
```

Enter your details for the prompts

## Run Service

```bash
python3 manage.py runserver
```

## References

- [DJango](#https://www.djangoproject.com/)
- [Graphene-Django](#https://docs.graphene-python.org/projects/django/en/latest/)



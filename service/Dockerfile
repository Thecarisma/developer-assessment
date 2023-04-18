# syntax=docker/dockerfile:1
FROM python:3.10.5-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /service

RUN python3 -m venv env
RUN chmod +x ./env/bin/activate
RUN ./env/bin/activate
COPY . /service/

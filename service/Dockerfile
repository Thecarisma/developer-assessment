# syntax=docker/dockerfile:1
FROM python:3.10.5-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /service

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY . /service/

EXPOSE 8000

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]

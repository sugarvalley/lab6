FROM python:3.8-slim-buster
WORKDIR /app

ENV FLASK_APP=./pliki/main.py
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY ./pliki .

CMD python3 -m flask run --host=0.0.0.0
EXPOSE 5000
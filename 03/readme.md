C:\Windows\System32\Drivers\etc\hosts wpisz: 127.0.0.1 api.com

docker compose up

Wywoływanie zapytań
https://api.com/cars - GET - zwraca wszystkie samochody
https://api.com/cars/int:year - GET - zwraca wszystkie samochody z podanego roku
https://api.com/addCar - POST - dodaje samochód do bazy danych (wymagane pola: model, rok, detale)

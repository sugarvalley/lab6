create table Car
(
    id      serial primary key,
    model   varchar(255),
    year    int,
    details text
);

insert into Car (model, year, details)
values ('BMW', 2010, 'M-pack'),
       ('Mercedes', 2011, 'black'),
       ('Skoda', 1990, 'green');
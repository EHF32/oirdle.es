create table if not exists songs (
    id int unsigned primary key auto_increment not null,
    titulo varchar(100) not null,
    soundcloud_url varchar(300) not null,
    start_sec int,
    orden int not null
);

create table if not exists autocomplete(
    id int primary key not null auto_increment,
    titulo varchar(300) not null
);

create table if not exists results(
    uuid int not null,
    id_song int unsigned not null,
    intento int not null,
    primary key (uuid,id_song),
    foreign key (id_song) references songs(id)
);

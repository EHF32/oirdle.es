
CREATE TABLE IF NOT EXISTS SONGS (
	ID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TITULO VARCHAR(100) NOT NULL,
    SOUNDCLOUD_URL VARCHAR(300) NOT NULL,
    START_SEC INT,
    ORDEN INT NOT NULL
);

CREATE TABLE IF NOT EXISTS FAKECOMPLETE(
	ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TITULO VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS AUTOCOMPLETE(
	ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ID_SONG INT UNSIGNED NOT NULL,
    FOREIGN KEY (ID_SONG) REFERENCES SONGS(ID)
);

CREATE TABLE IF NOT EXISTS RESULTS(
	UUID INT NOT NULL,
    ID_SONG INT UNSIGNED NOT NULL,
    INTENTO INT NOT NULL,
    PRIMARY KEY (UUID,ID_SONG),
    FOREIGN KEY (ID_SONG) REFERENCES SONGS(ID)
);
-- DROP DATABASE IF EXISTS checkpoint4;

-- CREATE DATABASE checkpoint4;

-- USE checkpoint4; 

CREATE TABLE `dream` (
  `idDream` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(500) NULL,
  `espece` VARCHAR(100) NOT NULL,
  `prix` INT NOT NULL,
  `temps` VARCHAR(10) NOT NULL,
  `description` VARCHAR(1000) NULL
);

-- les heures de dodo possibles
-- 2 / 3.30 / 5 / 6.30 / 8 / 9.30 / 11 

-- les especes possibles
-- dragon / licorne / phenix 

INSERT INTO dream (image, espece, prix, temps, description) VALUES ('https://img.freepik.com/vecteurs-libre/dragon-dessine-main_53876-88179.jpg?w=2000', "dragon", "120", "8:00", "un dragon joviale qui ravira vos rêve"), ('https://mycrazystuff.com/7075-width_1000/masque-tete-de-licorne.jpg', "licorne", "90", "6:30", "mais qu'elle est cette sorcèlerie ?!!? Ce n'est pas une licorne !!! C'est bien mieux que cela c'est un compagnon de jeu ! Avec son masque licorne, il sera toujours là pour faire des blagues");

CREATE TABLE `user` (
  `idUser` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL
);

INSERT INTO user (email, nom, prenom, password) VALUES ("admin@admin.fr", "Bernard", "Kevin", "admin"), ('myuser@gmail.com', "Bernard", "Josette", "0000");

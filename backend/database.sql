-- DROP DATABASE IF EXISTS checkpoint4;

-- CREATE DATABASE checkpoint4;

-- USE checkpoint4; 

CREATE TABLE `dream` (
  `idDream` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100),
  `image` VARCHAR(500) NULL,
  `espece` VARCHAR(100) NOT NULL,
  `lieu` VARCHAR(100) NOT NULL,
  `prix` INT NOT NULL,
  `temps` VARCHAR(10) NOT NULL,
  `description` VARCHAR(1000) NULL
);

-- les heures de dodo possibles
-- 2 / 3.30 / 5 / 6.30 / 8 / 9.30 / 11 

-- les especes possibles
-- dragon / licorne / phenix 

-- les lieux possibles
-- chateau / desert / montagne / ocean / prairie / espace

INSERT INTO dream (nom, image, espece, lieu, prix, temps, description) VALUES 

("Marcel", 'https://img.freepik.com/vecteurs-libre/dragon-dessine-main_53876-88179.jpg?w=2000', "dragon", "prairie", "120", "8:00", "un dragon joviale qui ravira vos rêve"), 

("Fabrice", 'https://img-4.linternaute.com/Ij373VmbQDY6op-2CBzzbNsj_Hs=/810x/smart/8be97ddedacb4627a5f4e68671c55534/ccmcms-linternaute/31399900.jpg', "dragon", "chateau", "40", "3:30", "c'est parti pour un découverte du chateau de mario. Mais c'est un vieux chateau en 2D car Fabrice (c'est le nom du dragon) est en 2D aussi. On avait peur de le perde dans un monde en 3D du coup on l'a laissé dans un monde en 2D. Voilà... c'est tout... je vous ai dit que c'est en 2D ?"),  

("Haku", 'https://i.pinimg.com/originals/c4/01/a9/c401a92e602a8637be0295800a4bdf9a.png', "dragon", "ocean", "180", "6:30", "C'est un dragon nouille! En fait c'est pas vraiment des nouilles (de toutes façon faut pas manger les dragons (même si il a des pattes de poulet)) , on dit ça parce-que il est tout en long genre comme des spaguettis. D'ailleurs j'en ai mangé hier mais je n'avais plus de sel pour les faire cuire donc c'était un peu fade."), 

("Terreur terrible", 'https://i.skyrock.net/2760/69502760/pics/2781001796_2.jpg', "dragon", "prairie", "140", "5:00", "c'est trop cool, on peut les mettre sur nos épaules et quand ils tirent des boules de feu ça fait trop stylé ! En plus ils existent en plusieurs couleurs mais là on les a que en vert. Y'avait plus de cartouches de l'imprimante. Attend je viens de révéler un secret de fabrication 😱 !!! Comment je fais pour effecer ? Si vous avez une réponse écrivez moi à keke.beber@msn.com Merci d'avance"),

-- ---

("Constantine", 'https://mycrazystuff.com/7075-width_1000/masque-tete-de-licorne.jpg', "licorne", "l'espace", "90", "6:30", "mais qu'elle est cette sorcèlerie ?!!? Ce n'est pas une licorne !!! C'est bien mieux que cela c'est un compagnon de jeu ! Avec son masque licorne, il sera toujours là pour faire des blagues"),

("Poustantrin", 'https://cdn.edi-static.fr/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_auto/c_limit,w_auto/v1/Img/BREVE/2023/1/378027/classement-licornes-par-valorisation-2023-F.jpg', "licorne", "montagne", "150", "3:30", "Et ça fait bim, bam, boum, ça fait pschit et puis c'est bon là OH !!! ça fait rien du tout, en fin si, ça fait comme si on était en Inde pendant la fête où on lance des pigments tu vois, ouais tu vois."),

("Plouf-Plouf", 'https://media.adeo.com/marketplace/LMFR/82052449/53a312d0-2dea-467e-9fc2-b8b8e40d6bd2.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds', "licorne", "ocean", "90", "9:30", "OH LA VACHE !!! Et non... c'est une licorne je t'ai bien eu. Je suis un potit rigolo moi. Bref tu met la bouée et plouf plouf dans l'eau et tout et tout et c'est magique"),

("Twilight Sparkle", 'https://i.pinimg.com/736x/90/9e/8a/909e8a9e1ec328ec90be91a6b0f176ef--my-little-pony-twilight-pony-.jpg', "licorne", "prairie", "190", "11:00", "Alors... je ne vais pas essayer d'expliquer le lore de My Little Pony. Parce que c'est LONG, mais alors LONG, les 9 saisons c'est LOOOOOOOONG, en plus à chaque fois y'a une chanson et c'est horrible, en fait c'est envoutant mais t'as quand même envie de te crever les timpans. Si non on a pas les droits, dites rien svp"),

-- ---

("Phoenix 1", 'https://nospensees.fr/wp-content/uploads/2017/09/Phoenix.jpg', "phoenix", "espace", "90", "2:00", "ça donne la gerbe 🤮"),

("St!ck3rz", 'https://www.2min.fr/wp-content/uploads/2018/02/Phoenix-660x439.jpg', "phoenix", "montagne", "90", "9:30", "téma la dégaine on dirait qu'il est passé dans Pimp My Ride, mais en version wish"),

("Huuuuuuuuuum?🤨", 'https://cdn.shopify.com/s/files/1/0660/1647/7405/products/image_785c821a-e3b9-4c9e-8267-59b599534d1d.webp?v=1666154939', "phoenix", "ocean", "120", "5:00", "un phoenix qui va dans l'eau est-ce-qu'il s'éteint, genre il meurt ? Un peu comme la queue de Salamèche qui, si elle ne brule plus ... bah il meurt"),

("PasLesDroitsMaisOsef", 'https://as1.ftcdn.net/v2/jpg/00/91/04/24/1000_F_91042445_RB26Nec36X3lB5sXe6yUBrpwXuxIgcJy.jpg', "phoenix", "espace", "140", "2:00", "tellement on a pas les droits que y'a encore le tag en fond. Donnez nous de l'argent svp 😥"),

-- ---

("Phoenix, la ville", 'https://media.gettyimages.com/id/1288752517/fr/photo/horizon-de-phoenix-arizona-au-cr%C3%A9puscule.jpg?s=612x612&w=gi&k=20&c=2uk8XenPX_8jN_7VA_7Ssmny4bikrUs5otwggJdT7vY=', "aucun", "desert", "100", "11:00", "ça aussi c'est phoenix 🤣🤣🤣, t'as compris la blague? En fait c'est drôle parce que on propose des phoenix genre les piafs en feu, mais là c'est juste la ville aux Etats-Unis, en Arizona 🤣🤣🤣. Actuellemnt il y fait 18°C ce qui est tout à fait bien. Le vent est faible est la vue dégagé."),

("chato", 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ch%C3%A2teau_de_Canon_fa%C3%A7ade.jpg/1024px-Ch%C3%A2teau_de_Canon_fa%C3%A7ade.jpg', "aucun", "chateau", "150", "8:00", "les canons ça fait BOUM et les canards COUIN COUIN"),

("Gfroi", 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/1/1/a/11a3b884f1_50170595_alpes-elevation.jpg', "aucun", "montagne", "250", "6:30", "les bouteilles d'oxygène ne sont pas fournies. Tirant en les conclusions qu'il faut... Et on paye AVANT");

-- ---

CREATE TABLE `user` (
  `idUser` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `role` VARCHAR(50) NOT NULL DEFAULT 'user'
);

INSERT INTO user (email, nom, prenom, password, role) VALUES ("kevindu75@gmail.com", "Bernard", "Kevin", "admin", "admin"), ('myuser@gmail.com', "Bernard", "Josette", "0000", "user");

-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: db_game
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namaGame` varchar(45) NOT NULL,
  `deskripsi` mediumtext NOT NULL,
  `genreId` varchar(45) NOT NULL,
  `Foto` varchar(45) DEFAULT NULL,
  `harga` int(50) DEFAULT NULL,
  `tanggalUpload` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (58,'Grand Theft Auto V','Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008\'s Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency and powerful crime figures. The open world design lets players freely roam San Andreas\' open countryside and the fictional city of Los Santos, based on Los Angeles.','4','/game/images/GAME1583144356869.jpg',700000,'2020-03-02T10:19:16.839Z'),(60,'Monster Hunter World','The Monster Hunter (モンスターハンター, Monsutā Hantā) franchise is a series of fantasy-themed action role-playing video games that started with the game Monster Hunter for PlayStation 2, released in 2004. Titles have been released across a variety of platforms, including personal computer, home console, portable consoles, and mobile devices. The series is developed and published by Capcom.','1','/game/images/GAME1583144427535.jpg',500000,'2020-03-04T09:34:01.524Z'),(61,'Age of Empire IV','Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios. The first game of the series was Age of Empires, released in 1997. Seven other games and three spin-offs have been released.','3','/game/images/GAME1583144520945.jpg',600000,'2020-03-04T09:32:38.786Z'),(62,'Far Cry Primal','Far Cry Primal is a first-person shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for PlayStation 4 and Xbox One on February 23, 2016, and for Microsoft Windows on March 1, 2016. The game is a spin-off of the main Far Cry series. It is the first Far Cry game set in pre-modern times. It revolves around the story of Takkar, who starts off as an unarmed hunter and rises to become the leader of a tribe.','1','/game/images/GAME1583144564321.jpg',600000,'2020-03-04T09:32:19.064Z'),(64,'Red Dead Redemption 2','Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption.','2','/game/images/GAME1583320521390.jpg',600000,'2020-03-04T11:15:21.378Z'),(65,'Dragon quest XI','Dragon Quest XI: Echoes of an Elusive Age is a role-playing video game developed and published by Square Enix. An entry in the long-running Dragon Quest video game series, it was released in Japan for the Nintendo 3DS and PlayStation 4 in July 2017, and worldwide for the PlayStation 4 and Microsoft Windows in September 2018. An enhanced version for the Nintendo Switch, Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition, was released in September 2019.','1','/game/images/GAME1583320627138.jpg',600000,'2020-03-04T11:17:07.130Z'),(66,'Dynasty Warrior 9','Dynasty Warriors 9 is a hack and slash game played from a third-person perspective with stealth elements. The game revamps the gameplay of the series with the introduction of the open world environment. A traversable map of China is implemented which the player can freely roam on foot, horseback or boat, the game focuses on livable environments such as cities and towns as well as places where large battles take place. The characters\' move-set combinations is also revised','1','/game/images/GAME1584452987673.jpg',500000,'2020-03-17T13:49:47.658Z'),(67,'FIFA 20','FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series.[2] It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.','5','/game/images/GAME1584453111739.png',700000,'2020-03-17T13:51:51.729Z'),(68,'NBA 2K20','NBA 2K20 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 21st installment in the NBA 2K franchise and the successor to NBA 2K19. Anthony Davis of the Los Angeles Lakers is the cover athlete for the regular edition of the game, while Dwyane Wade is the cover athlete for the \'Legend Edition\'.','5','/game/images/GAME1584453313434.jpg',800000,'2020-03-17T13:55:13.391Z'),(69,'Borderlands 3','Borderlands 3 is an action role-playing first-person shooter video game developed by Gearbox Software and published by 2K Games. It is the sequel to 2012\'s Borderlands 2, and the fourth main entry in the Borderlands series. Borderlands 3 was released on 13 September 2019 for Microsoft Windows, PlayStation 4, Xbox One and on 30 October 2019 for Apple macOS. A Stadia port was released on 17 December 2019.','1','/game/images/GAME1584453464860.jpg',600000,'2020-03-17T13:57:44.848Z'),(70,'The Witcher 3 : Wild Hunt','The Witcher 3: Wild Hunt[a] is a 2015 action role-playing game developed and published by CD Projekt and based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster hunter (known as a witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers. Players battle the game\'s many dangers with weapons and magic, interact with non-player characters, and complete main-story and side quests to acquire experience points and gold, which are used to increase Geralt\'s abilities and purchase equipment. Its central story has several endings, determined by the player\'s choices at certain points in the game.','1','/game/images/GAME1584453621229.jpg',700000,'2020-03-17T14:09:33.685Z'),(71,'Pubg','PlayerUnknown\'s Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. The game is based on previous mods that were created by Brendan \"PlayerUnknown\" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene\'s creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game\'s map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round.','1','/game/images/GAME1584454371847.jpg',650000,'2020-03-17T14:12:51.801Z'),(72,'Tekken 7','Tekken 7 (鉄拳7) is a fighting game developed and published by Bandai Namco Entertainment. It is the seventh installment in the Tekken series (ninth overall), also it is the final chapter of The Mishima Saga Story and was the first to make use of the Unreal Engine. Tekken 7 had a limited arcade release in March 2015. An updated arcade version, Tekken 7: Fated Retribution, was released in July 2016, and features expanded content including new stages, costumes, items and characters.[1] The same version was released for Microsoft Windows, PlayStation 4 and Xbox One in June 2017','22','/game/images/GAME1584454572105.jpg',650000,'2020-03-17T14:16:12.067Z'),(73,'Doom Eternal','Doom Eternal is an upcoming first-person shooter video game developed by id Software and published by Bethesda Softworks. It is the fifth main game in the Doom series and a direct sequel to 2016\'s Doom, and is set for release on March 20, 2020, for Windows, PlayStation 4, Stadia and Xbox One, with a Nintendo Switch version planned for a release at a later date.','1','/game/images/GAME1584454648169.jpg',700000,'2020-03-17T14:17:28.159Z'),(74,'Farming Simulator 19','Farming Simulator is a farming simulation video game series developed by Giants Software. The locations are based on American and European environments. Players are able to farm, breed livestock, grow crops and sell assets created from farming.','7','/game/images/GAME1584454788142.jpg',500000,'2020-03-17T14:19:48.135Z'),(75,'Football Manager 2020','Football Manager 2020 (officially abbreviated as FM20) is a 2019 football-management simulation video game developed by Sports Interactive and published by Sega as a successor to Football Manager 2019. It was released worldwide on 18 November 2019.[1] In June 2019, it was announced that FM20 will be a launch title for the Stadia streaming platform.','7','/game/images/GAME1584454928967.jpg',700000,'2020-03-17T14:22:08.957Z'),(76,'Assassin\'s creed Odyssey ','Assassin\'s Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the 11th major installment, and 21st overall, in the Assassin\'s Creed series and the successor to 2017\'s Assassin\'s Creed Origins. Set in the year 431 BC, the plot tells a fictional history of the Peloponnesian War between Athens and Sparta. Players control a male or female mercenary (Ancient Greek: μίσθιος misthios) who fights for both sides as they attempt to unite their family.','1','/game/images/GAME1584455132161.jpg',700000,'2020-03-17T14:25:32.154Z'),(77,'Sekiro : Shadow Die Twice','Gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. Although most of the game takes place in fictional areas, some areas are inspired by real-world buildings and locations in Japan. The game also makes strong references to Buddhist mythology and philosophy. While creating the game, director Hidetaka Miyazaki wanted to create a new intellectual property (IP) that marked a departure from the Souls series of games also made by FromSoftware, and looked to series such as Tenchu for inspiration.','1','/game/images/GAME1584455541757.jpg',500000,'2020-03-17T14:32:21.720Z'),(78,'WWE 2K20','WWE 2K20 is a professional wrestling video game developed by Visual Concepts and published by 2K Sports. It was released worldwide on October 22, 2019 for Microsoft Windows, PlayStation 4, and Xbox One.[1] It is the twenty-first game in the WWE game series (seventh under the WWE 2K banner) and the successor to WWE 2K19. WWE 2K20 is the first WWE series game to not be developed by Yuke\'s since the inception of the series in 2000. ','22','/game/images/GAME1584455851817.jpeg',600000,'2020-03-17T14:37:31.810Z');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namaGenre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Action'),(2,'RPG'),(3,'RTS'),(4,'Sandbox'),(5,'Sports'),(7,'Simulation'),(8,'Puzzle'),(9,'Card Game'),(10,'Racing'),(11,'Strategy'),(12,'Open World'),(22,'Fighting');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactiondetail`
--

DROP TABLE IF EXISTS `transactiondetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactiondetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `gameid` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `idtransaction` int(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactiondetail`
--

LOCK TABLES `transactiondetail` WRITE;
/*!40000 ALTER TABLE `transactiondetail` DISABLE KEYS */;
INSERT INTO `transactiondetail` VALUES (53,11,62,'on cart',21),(54,11,65,'on cart',21),(57,18,62,'waiting confirmation',62),(58,18,65,'waiting confirmation',62),(62,7,58,'on cart',26),(63,7,61,'on cart',26),(64,7,65,'on cart',26),(67,19,58,'on cart',28),(68,19,60,'on cart',28),(69,19,78,'on cart',29),(71,16,58,'on cart',36),(72,18,67,'waiting confirmation',62);
/*!40000 ALTER TABLE `transactiondetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `totalharga` int(11) DEFAULT NULL,
  `iduser` int(15) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `tanggalupload` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (62,1900000,18,'/game/images/TRANS1584688206347.jpg','2020-03-20T07:10:06.325Z');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','123','admin@gmail.com','image','admin','verified'),(2,'oyakata','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','oyakata@gmail.com',NULL,'admin','unverified'),(6,'ragiel','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','oyakata@gmail.com',NULL,'user','unverified'),(7,'coba','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','oyakata@gmail.com',NULL,'user','unverified'),(8,'bobi','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','oyakata@gmail.com',NULL,'user','unverified'),(9,'paksi','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','paksi@gmail.com',NULL,'user','unverified'),(10,'hapis','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','hapis@gmail.com',NULL,'user','unverified'),(11,'dzaky','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','dzaky@gmail.com',NULL,'user','unverified'),(13,'bapet','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','bapet@gmail.com',NULL,'user','unverified'),(14,'aya','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','aya@gmail.com',NULL,'user','unverified'),(15,'kartika','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','kartika@gmail.com',NULL,'user','unverified'),(16,'Garvin','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','garvin@gmail.com',NULL,'user','unverified'),(18,'fakhran','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','fakhranwahyu@gmail.com',NULL,'user','unverified'),(19,'daffa','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','daffa@gmail.com',NULL,'user','unverified');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-20 14:52:20

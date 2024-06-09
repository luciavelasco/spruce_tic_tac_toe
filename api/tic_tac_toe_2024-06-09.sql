
CREATE DATABASE IF NOT EXISTS tic_tac_toe;
USE tic_tac_toe;

SET NAMES utf8mb4;


DROP TABLE IF EXISTS `player_stats`;

CREATE TABLE `player_stats` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `score` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

LOCK TABLES `player_stats` WRITE;

INSERT INTO `player_stats` (`id`, `name`, `score`)
VALUES
	(1,'X', 0),
	(2,'O', 0);

UNLOCK TABLES;




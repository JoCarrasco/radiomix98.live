SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `radio_values` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
  	`key_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  	`value` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `users` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
  	`name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
    `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  	`password` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `radio_values` (`key_name`, `value`) VALUES
('video', 'https://www.youtube.com/embed/vNeiCMzI42s');

INSERT INTO `users` (`name`, `username`, `password`) VALUES
('Anibal Garcia', 'anibalgarcia98', 'mix98.3adminadmin');

INSERT INTO `users` (`name`, `username`, `password`) VALUES
('Gimber Sanchez', 'gimbersanchez98','mix98.3adminadmin');

INSERT INTO `users` (`name`, `username`, `password`) VALUES
('Herlis Colmenarez', 'herliscolmenarez98', 'mix98.3adminadmin');

CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `description` TEXT NOT NULL,
   `images` VARCHAR(300),
   `discount` INT AUTO_INCREMENT,
   `price` INT NOT NULL AUTO_INCREMENT,
   `category_id` INT NOT NULL,
   `createdAt` DATE NOT NULL,
   `updatedAt` DATE NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(50) NOT NULL,
   `last_name` VARCHAR(50) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `rol` TINYINT(1) NOT NULL,
   `direction` VARCHAR(120),
   `cp` INT(20),
   `province` VARCHAR(50),
   `location` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `productos` ADD CONSTRAINT `FK_aa15c372-ef45-4256-9f5e-a7616e823e26` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

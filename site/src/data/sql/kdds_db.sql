CREATE DATABASE  IF NOT EXISTS `kdds_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kdds_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: kdds_db
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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `banner` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'sol',NULL),(2,'lectura',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `images` varchar(300) NOT NULL,
  `discount` tinyint(4) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`categoryId`),
  CONSTRAINT `products_FK` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Gregory','Hecho a mano a partir de capas de acetato de diseño personalizado en colores exclusivos que dan como resultado el patrón único de cada montura individual. Anteojos de sol - Gregory','[anteojo-sol1.jpg,anteojo-sol1-2.jpg,anteojo-sol1-3.jpg]',15,8200,1,'2021-09-19',NULL),(2,'Finley','Diseño icónico de inspiración vintage con detalles refinados, ideal para el tocador elegante o el profesional. Anteojos de sol - Finley','[anteojo-sol1.jpg,anteojo-sol1-2.jpg,anteojo-sol1-3.jpg]',10,9000,1,'2021-09-19',NULL),(3,'Benedict','Anteojos con estilo aviador clásico y sofisticado diseñado para halagar la mayoría de los rostros Anteojos de sol - Benedict','[\'anteojo-sol4.jpg\',\'anteojo-sol4-2.jpg\',\'anteojo-sol4-3.jpg\']',20,8900,1,'2021-09-22',NULL),(4,'Lachman','Este diseño unisex de uso universal presenta ángulos fuertes a lo largo de la línea superior que le dan al marco un aspecto distintivo. Anteojos de sol - Lachman','[\'anteojo-sol5.jpg\',\'anteojo-sol5-2.jpg\',\'anteojo-sol5-3.jpg\']',15,8700,1,'2021-09-22',NULL),(5,'Fairmont','Hecho a mano con acetato fino en una forma P3 modificada y presenta detalles de inspiración vintage. Anteojos de sol - Fairmont','[\'anteojo-sol6.jpg\',\'anteojo-sol6-2.jpg\',\'anteojo-sol6-3.jpg\']',15,8700,1,'2021-09-22',NULL),(6,'Sheldrake','Inspirado por Andy Warhol, este marco icónico tiene un diseño intelectual y audaz que ofrece un estilo atemporal. Anteojos de lectura - Sheldrake','[\'anteojo-lectura7.jpg\',\'anteojo-lectura7-2.jpg\',\'anteojo-lectura7-3.jpg\']',10,8000,2,'2021-09-22',NULL),(7,'Emerson','Un diseño icónico, el emerson es un KDDS clásico. Con un diseño distintivo inspirado en la forma de un lente clásico. Anteojos de lectura - Emerson','[\'anteojo-lectura8.jpg\',\'anteojo-lectura8-2.jpg\',\'anteojo-lectura8-3.jpg\']',10,8200,2,'2021-09-22',NULL),(8,'OP-506','Un diseño original de KDDS, el OP-506 es una combinación de metal y acetato, que proporciona comodidad y durabilidad para un uso diario. Anteojos de lectura - OP 506','[\'anteojo-lectura9.jpg\',\'anteojo-lectura9-2.jpg\',\'anteojo-lectura9-3.jpg\']',10,8300,2,'2021-09-22',NULL),(9,'OP-505','Un diseño original de KDDS, el OP-505 es una combinación de metal y acetato, que proporciona comodidad y durabilidad para un uso diario. Anteojos de lectura - OP 505','[\'anteojo-lectura10.jpg\',\'anteojo-lectura10-2.jpg\',\'anteojo-lectura10-3.jpg\']',10,8200,2,'2021-09-22',NULL),(10,'Katleen','Si hablamos acerca de las tendencias, este artículo tiene todo lo que espera para esta termporada de invierno. Anteojos de sol - Katleen','[\'lentes-sol-1A.jpg\',\'lentes-sol-1B.jpg\',\'lentes-sol-1C.jpg\']',10,5750,1,'2021-09-22',NULL),(11,'Angers','La elegante curvatura y el estilo de ojos de gato están saturados de andrógino, el grunge de los 90 se une a la clase de los 60. El artículo ANGERS es atemporal y sin género. Anteojos de sol - Angers','[\'lentes-sol-2A.jpg\',\'lentes-sol-2B.jpg\',\'lentes-sol-2C.jpg\']',20,7050,1,'2021-09-22',NULL),(12,'Yester','Una mezcla de pasion y creatividad. Anteojos de sol - Yester','[\'lentes-sol-4A.jpg\',\'lentes-sol-4B.jpg\',\'lentes-sol-4C.jpg\']',20,9200,1,'2021-09-22',NULL),(13,'Ronnie','Una forma clásica que no pasa de moda y es funcional y la tendencia. Anteojos de lectura - Ronnie','[\'lentes-vista-1A.jpg\',\'lentes-vista-1B.jpg\',\'lentes-vista-1C.jpg\']',10,5230,2,'2021-09-22',NULL),(14,'Netaglio','ELEGANTE EN FORMA Y MATERIAL, ÚNICO Y SOFISTICADO. Anteojos de lectura - Netaglio','[\'lentes-vista-2A.jpg\',\'lentes-vista-2B.jpg\',\'lentes-vista-2C.jpg\']',15,6000,2,'2021-09-22',NULL),(15,'Patrick','CLÁSICO, MODERNO, FUNCIONAL Y SIN GÉNERO . Anteojos de lectura - Patrick','[\'lentes-vista-3A.jpg\',\'lentes-vista-3B.jpg\',\'lentes-vista-3C.jpg\']',10,5300,2,'2021-09-22',NULL),(16,'Demand','Una nueva forma de utilizar la mirada, CON estilo y sofisticación. Anteojos de lectura - Demand','[\'lentes-vista-4A.jpg\',\'lentes-vista-4B.jpg\',\'lentes-vista-4C.jpg\']',15,6330,2,'2021-09-22',NULL),(17,'Linda Farrow','Las Linda Farrow son gafas de sol de lujo para mujer y hombre, anteojos de sol de diseño cuadrado de marca, estilo Retro, iron UV400, 2021 Anteojos de sol - Linda Farrow','[\'lentes-sol-5A.png\']',10,9550,1,'2021-09-22',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol` int(2) NOT NULL,
  `direction` varchar(120) DEFAULT NULL,
  `cp` int(20) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kevin','Almada','mail3@mail.com','$2a$10$2TD7MIx.QoTBNPQFFtnV9uKBkOJfCUWK5qzNOl9S/Nf1GNs.6lS92',1,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2021-09-23 23:14:32

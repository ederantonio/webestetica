-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2020 a las 04:13:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_servpaq`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquetes_img`
--

CREATE TABLE `paquetes_img` (
  `id_paquete` int(100) NOT NULL,
  `paq_titulo` varchar(100) NOT NULL,
  `paq_sorce` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paquetes_img`
--

INSERT INTO `paquetes_img` (`id_paquete`, `paq_titulo`, `paq_sorce`) VALUES
(1, 'Tendencia', 'pboda.jpg'),
(2, 'Maquillaje de noche', 'pmaqnoche.jpg'),
(3, 'Color de cabello', 'ptinte.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paquetes_img`
--
ALTER TABLE `paquetes_img`
  ADD PRIMARY KEY (`id_paquete`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

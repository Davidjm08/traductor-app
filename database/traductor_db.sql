-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2025 a las 18:54:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `traductor_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE `palabras` (
  `id` int(11) NOT NULL,
  `espanol` varchar(100) DEFAULT NULL,
  `ingles` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`id`, `espanol`, `ingles`) VALUES
(7, '¿Cómo estás?', 'How are you?'),
(8, 'Buenos días', 'Good morning'),
(9, 'Buenas noches', 'Good night'),
(10, '¿Dónde está el baño?', 'Where is the bathroom?'),
(11, '¿Cuánto cuesta esto?', 'How much does this cost?'),
(12, 'Me gusta aprender inglés', 'I like learning English'),
(13, 'Estoy muy feliz hoy', 'I am very happy today'),
(14, 'No entiendo', 'I do not understand'),
(15, '¿Puedes ayudarme?', 'Can you help me?'),
(16, 'Estoy cansado', 'I am tired'),
(17, 'Tengo hambre', 'I am hungry'),
(18, 'Nos vemos mañana', 'See you tomorrow'),
(19, 'Te extraño mucho', 'I miss you a lot'),
(20, 'Voy al trabajo', 'I am going to work'),
(21, 'Ella está en casa', 'She is at home'),
(22, 'Quiero comer algo', 'I want to eat something'),
(23, 'Hace calor hoy', 'It is hot today'),
(24, 'Tengo frío', 'I am cold'),
(25, 'Me siento bien', 'I feel good'),
(26, '¿Qué hora es?', 'What time is it?'),
(27, 'Necesito dormir', 'I need to sleep'),
(28, 'Estoy estudiando programación', 'I am studying programming'),
(29, 'Me encanta la música', 'I love music'),
(30, '¿Puedes repetir eso, por favor?', 'Can you repeat that, please?'),
(31, 'Estoy aprendiendo español', 'I am learning Spanish'),
(32, 'Te amo', 'I love you'),
(33, 'Voy a la escuela', 'I am going to school'),
(34, 'Hace mucho tiempo que no te veo', 'It has been a long time since I saw you'),
(37, 'hola', 'hi'),
(40, 'hola como estas espero que estes bien', 'Hello, how are you? I hope you are well.'),
(46, 'estoy jugando', 'I\'m playing'),
(49, 'bien', 'good'),
(52, 'holi', 'hi'),
(54, 'bueno', 'good');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `palabras`
--
ALTER TABLE `palabras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

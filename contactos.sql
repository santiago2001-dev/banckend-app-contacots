-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Jul 29, 2022 at 12:12 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contactos`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nameuser` varchar(10) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `area` varchar(100) NOT NULL,
  `number` varchar(10) NOT NULL,
  `proyecto` varchar(30) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactos`
--

INSERT INTO `contactos` (`id`, `name`, `lastname`, `email`, `nameuser`, `cargo`, `area`, `number`, `proyecto`, `img`) VALUES
(1, 'santiago', 'morales', 'santiagomoraless2001@gmail.com', 'vmorales', 'auxiliar de infraestructura', 'TI', '3174310329', 'bogotá', 'http://res.cloudinary.com/decsantg/image/upload/v1656890056/o1boqm1jykpofmnrx69l.jpg'),
(2, 'alejandro', 'orjuela', 'aorjuela1@gmail.com', 'aorjuela', 'auxiliar de infraestructura', 'TI', '3174310329', 'bogotá', 'http://res.cloudinary.com/decsantg/image/upload/v1656890206/qx8o71qylbe5rf7slniu.jpg'),
(3, 'ghhhhh', 'jjiji', 'ksmkssk@gmail.com', 'hbhb', 'Recepción', 'Vertical | Apoyo a la Gestión del Ingreso (SAR)', '4545878788', 'Calí', 'http://res.cloudinary.com/decsantg/image/upload/v1659050727/xwy6c5qfem0wevgegqob.png'),
(4, 'andres', 'estiven', 'estiven@gmail.com', 'sandres', 'Operador de Tecnología en La Información', 'Subdirección Administrativa Operativa (RRHH, Documental, SST, etc)', '3222345690', 'soacha', 'http://res.cloudinary.com/decsantg/image/upload/v1659050886/jfppiaaaomp4ugmnlchx.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` varchar(10) NOT NULL,
  `img` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `role`, `img`) VALUES
(13, 'santiago', 'morales', 'santiagomoraless2001@gmail.com', '$2a$08$E2GDxi8djNB4hPcVJ2Q5QO4YzyxPHb0MaKtSHHFuCDtXkSpmNnikm', 'admin', 'http://res.cloudinary.com/decsantg/image/upload/v1656814503/qmyxcstxnbdwctlj57mn.jpg'),
(14, 'ansres', 'dddsd', 'assd@gmail.com', 'fdssdfsdf', 'admin', NULL),
(15, 'alejandro', 'orjuela', 'aorjuela1@gmail.com', '$2a$08$jq7wKj2uLdwwv6QFIRElIumkxpnBTw/I1Sunz/5xrDqiNIvgGnPxW', 'admin', 'http://res.cloudinary.com/decsantg/image/upload/v1659045759/xyhqqdqxgmtptmrzafij.jpg'),
(16, 'alejandro', 'orjuela', 'aorjuelaaa1@gmail.com', '$2a$08$4bo1EMrppdiiY0V6BiPyU.tiXSgvcxec1k6.sSkKP.Cdqd6qxHBKK', 'admin', 'http://res.cloudinary.com/decsantg/image/upload/v1659045917/tnehzc2x41elfy1olst6.jpg'),
(17, 'undefined', 'orjuela', 'aorjuelaaae1@gmail.com', '$2a$08$fhvzg0pNCrF/cRTxyraRjePYV8e7zzncUYSzO5PTPQ6I6KwYtIO8.', 'admin', 'http://res.cloudinary.com/decsantg/image/upload/v1659046280/ududdhumkmjn6rvnq75q.jpg'),
(18, 'admin', 'admin', 'admin@ita-sa.com', '$2a$08$XJxwH7Ctr4mhgn4.57GOCOuw5Fi09eqfa2dGdsVZG7r3gkYE9lnLy', 'undefined', 'http://res.cloudinary.com/decsantg/image/upload/v1659053084/qcto7dmeeus4x7c48zof.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2026 at 06:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `explore_nepal`
--

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `tagline` varchar(255) DEFAULT NULL,
  `best_time` varchar(255) DEFAULT NULL,
  `climate` varchar(255) DEFAULT NULL,
  `known_for` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `district_name`, `province`, `description`, `image`, `tagline`, `best_time`, `climate`, `known_for`) VALUES
(6, 'Bhojpur', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Dhankuta', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Ilam', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Jhapa', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Khotang', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'Morang', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Okhaldhunga', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'Panchthar', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'Sankhuwasabha', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'Solukhumbu', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'Sunsari', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'Taplejung', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'Terhathum', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(19, 'Udayapur', 'Koshi Province', NULL, NULL, NULL, NULL, NULL, NULL),
(20, 'Parsa', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Bara', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(22, 'Rautahat', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'Sarlahi', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'Dhanusha', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'Mahottari', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'Siraha', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'Saptari', 'Madhesh Province', NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'Bhaktapur', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'Chitwan', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'Dhading', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'Dolakha', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'Kathmandu', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(33, 'Kavrepalanchok', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'Lalitpur', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'Makwanpur', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'Nuwakot', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'Ramechhap', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Rasuwa', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'Sindhuli', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(40, 'Sindhupalchok', 'Bagmati Province', NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'Baglung', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(42, 'Gorkha', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'Kaski', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'Lamjung', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(45, 'Manang', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'Mustang', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'Myagdi', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'Nawalpur', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(49, 'Parbat', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(50, 'Syangja', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(51, 'Tanahun', 'Gandaki Province', NULL, NULL, NULL, NULL, NULL, NULL),
(52, 'Arghakhanchi', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'Banke', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'Bardiya', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(55, 'Dang', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(56, 'Eastern Rukum', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(57, 'Gulmi', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(58, 'Kapilvastu', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(59, 'Palpa', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(60, 'Pyuthan', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(61, 'Rolpa', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'Rupandehi', 'Lumbini Province', NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'Dolpa', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'Humla', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(65, 'Jajarkot', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(66, 'Jumla', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(67, 'Kalikot', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'Mugu', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(69, 'Salyan', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(70, 'Surkhet', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(71, 'Dailekh', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(72, 'Western Rukum', 'Karnali Province', NULL, NULL, NULL, NULL, NULL, NULL),
(73, 'Achham', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(74, 'Baitadi', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(75, 'Bajhang', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(76, 'Bajura', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(77, 'Dadeldhura', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(78, 'Darchula', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(79, 'Doti', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(80, 'Kailali', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL),
(81, 'Kanchanpur', 'Sudurpashchim Province', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tourist_places`
--

CREATE TABLE `tourist_places` (
  `id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `place_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `best_time` varchar(100) DEFAULT NULL,
  `entry_fee` varchar(100) DEFAULT NULL,
  `map_link` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tourist_places`
--
ALTER TABLE `tourist_places`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_id` (`district_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `tourist_places`
--
ALTER TABLE `tourist_places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tourist_places`
--
ALTER TABLE `tourist_places`
  ADD CONSTRAINT `tourist_places_ibfk_1` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

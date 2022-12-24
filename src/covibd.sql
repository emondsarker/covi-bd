-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2021 at 05:12 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covibd`
--

-- --------------------------------------------------------

--
-- Table structure for table `covid_hospital`
--

CREATE TABLE `covid_hospital` (
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `contact` int(12) DEFAULT NULL,
  `GBedOcc` int(12) DEFAULT NULL,
  `GBedVac` int(12) DEFAULT NULL,
  `IcuBedOcc` int(12) DEFAULT NULL,
  `IcuBedVac` int(12) DEFAULT NULL,
  `District` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `covid_hospital`
--

INSERT INTO `covid_hospital` (`name`, `location`, `contact`, `GBedOcc`, `GBedVac`, `IcuBedOcc`, `IcuBedVac`, `District`) VALUES
('Apollo', 'Bashundhara', 1068, 12, 23, 45, 12, 'Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `covid_stat_overview`
--

CREATE TABLE `covid_stat_overview` (
  `total_cases` int(255) DEFAULT NULL,
  `recovered` int(255) DEFAULT NULL,
  `passed_away` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `covid_stat_overview`
--

INSERT INTO `covid_stat_overview` (`total_cases`, `recovered`, `passed_away`) VALUES
(1250000, 1080000, 20685);

-- --------------------------------------------------------

--
-- Table structure for table `covid_vaccine`
--

CREATE TABLE `covid_vaccine` (
  `CenterName` varchar(255) DEFAULT NULL,
  `VaccineType` varchar(255) DEFAULT NULL,
  `SpecialInfo` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `DailyDoseAvailable` int(11) DEFAULT NULL,
  `DailyDoseGiven` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `covid_vaccine`
--

INSERT INTO `covid_vaccine` (`CenterName`, `VaccineType`, `SpecialInfo`, `Status`, `DailyDoseAvailable`, `DailyDoseGiven`) VALUES
('Square Hospital', 'Moderna', 'pfzier for migrant workers', '?', 12, 3),
('United', 'Sinopharm', 'no info', '?', 4, 6),
('Lubana hospital', 'Moderna', 'none', '??', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(9, 'Emon Sarker', 'emon331@gmail.com', '$2y$10$WQgPcTgEPU4y9poEQuDm1.0P6i0MRNAh08XKHSaEmi0JNj1sqOLPa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2021 at 08:30 AM
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
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`) VALUES
(9, 'Emon Sarker', 'emon331@gmail.com', '$2y$10$WQgPcTgEPU4y9poEQuDm1.0P6i0MRNAh08XKHSaEmi0JNj1sqOLPa'),
(14, 'Lab-Aid', 'labaid@gmail.com', '$2y$10$hx7MmW7288bpYyeJQ3upleTCi/rEXXPF9TLDXkx2CPf00c2/A5w9K'),
(16, 'United Hospital', 'united123@gmail.com', '$2y$10$SoYnt13l6/zfjMl/602oZuz03viEIBA4m/yzU92sZCFA85eegjUpa'),
(17, 'Apollo Hospital', 'apollo@gmail.com', '$2y$10$ZTetfm.ncJnV.c/OUYXLdOIcjd7IaZnTIQjZBmWwe/Jk/cEYqVkYi');

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
  `District` varchar(255) DEFAULT NULL,
  `oxygentankavail` varchar(255) DEFAULT NULL,
  `CenterEmail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `covid_hospital`
--

INSERT INTO `covid_hospital` (`name`, `location`, `contact`, `GBedOcc`, `GBedVac`, `IcuBedOcc`, `IcuBedVac`, `District`, `oxygentankavail`, `CenterEmail`) VALUES
('Apollo Hospital', 'Plot # 81, Block # E, Basudhara R/A, Dhaka - 1229, Bangladesh.', 966671067, 40, 32, 6, 4, 'Dhaka', '30', 'apollo@gmail.com'),
('চট্টগ্রাম ২৫০ শয্যা জেনারেল হাসপাতাল', 'Andarkilla Rd, Chattogram 4000', 0, 12, 12, 2, 2, 'Chattogram', '11', 'chottogram@gmail.com'),
('Lab-Aid', 'House- -1 and, 6 Road No 4, Dhaka 1205', 332211, 44, 50, 6, 7, 'Dhaka', '-', 'labaid@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `covid_news`
--

CREATE TABLE `covid_news` (
  `Serial` int(255) NOT NULL,
  `Header` mediumtext NOT NULL,
  `SubHeader` mediumtext NOT NULL,
  `Image` mediumtext NOT NULL,
  `Link` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `covid_news`
--

INSERT INTO `covid_news` (`Serial`, `Header`, `SubHeader`, `Image`, `Link`) VALUES
(2, 'Covid death toll crosses 24,000 in Bangladesh with 187 new fatalities', 'Deaths from the Covid-19 infection in Bangladesh have crossed the grim milestone of 24,000, with 187 new fatalities reported across...', 'https://media-eng.dhakatribune.com/uploads/2020/06/rsz-2020-06-08t000000z-1180570193-rc2y4h9feo6o-rtrmadp-3-health-coronavirus-southasia-1593194019316.jpg', 'https://www.dhakatribune.com/bangladesh/2021/08/15/covid-19-bangladesh-records-187-more-deaths-6-684-new-cases-in-24-hours'),
(3, 'Experts: Covid vaccine co-production can be key to ensure supply', 'It will be more cost-effective if a local company gets the license to produce vaccines in Bangladesh, Dr Nazrul Islam says', 'https://media-eng.dhakatribune.com/uploads/2021/08/ed-3-1628099116007.jpg', 'https://www.dhakatribune.com/bangladesh/2021/08/16/experts-covid-vaccine-co-production-can-be-key-to-ensure-supply'),
(4, 'Swedish researchers planning to hold Covid-19 nasal vaccine trial', 'Swedish researchers are gearing up to seek permission from Bangladeshi authorities to hold clinical trials of a nasal Covid-19 vaccine in the...', 'https://media-eng.dhakatribune.com/uploads/2021/08/nasal-covid-vaccine-1628961070849.jpg', 'https://www.dhakatribune.com/bangladesh/2021/08/14/swedish-researchers-planning-to-hold-covid-19-nasal-vaccine-trial-in-bangladesh'),
(5, 'Return to school could lead to sharp rise in cases', 'Delta Covid cases likely to put strain on health services in areas with low vaccination rates, experts say; Australia suffers its worst daily total', 'https://i.guim.co.uk/img/media/c80e55bdc7965e3cadae7e41816d34703ee86a98/0_15_6016_3609/master/6016.jpg?width=780&quality=45&auto=format&fit=max&dpr=2&s=66e8f5a3aa87224729722046ba51c1c8', ''),
(12, 'Over 180 doctors killed due to coronavirus in Bang...', 'A health worker enters the Intensive Care Unit (ICU) of a hospital in Dhaka, Bangladesh Mahmud Hossain Opu/Dhaka Tribune...', 'https://media-eng.dhakatribune.com/uploads/2020/11/icu-mahmud-hossain-opu-whatsapp-1605542330167.jpg', 'https://www.dhakatribune.com/health/coronavirus/2021/08/28/over-180-doctors-killed-due-to-coronavirus-in-bangladesh');

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
  `DailyDoseGiven` int(11) DEFAULT NULL,
  `CenterEmail` varchar(50) NOT NULL,
  `District` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `covid_vaccine`
--

INSERT INTO `covid_vaccine` (`CenterName`, `VaccineType`, `SpecialInfo`, `Status`, `DailyDoseAvailable`, `DailyDoseGiven`, `CenterEmail`, `District`) VALUES
('Child Health Care', 'Mordena', 'no info', '✅', 40, 11, 'childcare@gmail.com', 'Gazipur'),
('Combined Military Hospital', 'Sinopharm', 'no info', '⏸️', 50, 23, 'CMH@gmail.com', 'Chattogram'),
('Gastroliver', 'Pfzier', 'no info', '✅', 30, 23, 'gastroliver@gmail.com', 'Dhaka'),
('Lab Aid Vaccination', 'Mordena', 'We out sweaty', '✅', 322211, 112, 'labaid@gmail.com', 'Dhaka'),
('Evercare Hospital', 'Mordena', 'no info', '❌', 32, 26, 'united123@gmail.com', 'Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `emergency`
--

CREATE TABLE `emergency` (
  `oxygen` varchar(255) DEFAULT NULL,
  `oxygennumber` int(11) DEFAULT NULL,
  `ambulance` varchar(255) DEFAULT NULL,
  `ambulancenumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(9, 'Emon Sarker', 'emon331@gmail.com', '$2y$10$WQgPcTgEPU4y9poEQuDm1.0P6i0MRNAh08XKHSaEmi0JNj1sqOLPa'),
(14, 'Lab-Aid', 'labaid@gmail.com', '$2y$10$hx7MmW7288bpYyeJQ3upleTCi/rEXXPF9TLDXkx2CPf00c2/A5w9K'),
(15, 'Parinda Rahman', 'pari@gmail.com', '$2y$10$HDkk6ix4e1TfZ5q.IuA2PO6gFzDhRBRmv1xxDHggJFKV0mNvbLoZm'),
(18, 'tester', 'test@test.com', '$2y$10$RomZKVezTpgbkQTqTLkirOvQEwPoWBbB32ENlBDF.1oY8qLpJLYSS'),
(19, 'Labib Rahman', 'labib77@gmail.com', '$2y$10$YRf/E9iquY4jJr94Z2c7/.yp8yQtOFhGEjO5hK.PKOZg22qvfZjRG'),
(20, 'example', 'example@gmail.com', '$2y$10$AbQ.PO39cuuP0Ghgu5.ut.RZNVcgbIgaxsZwW.aW/6J842DtmUUtO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `covid_hospital`
--
ALTER TABLE `covid_hospital`
  ADD PRIMARY KEY (`CenterEmail`);

--
-- Indexes for table `covid_news`
--
ALTER TABLE `covid_news`
  ADD PRIMARY KEY (`Serial`);

--
-- Indexes for table `covid_vaccine`
--
ALTER TABLE `covid_vaccine`
  ADD PRIMARY KEY (`CenterEmail`);

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
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `covid_news`
--
ALTER TABLE `covid_news`
  MODIFY `Serial` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

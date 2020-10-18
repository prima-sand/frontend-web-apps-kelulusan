-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2020 at 02:10 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pengumuman`
--

-- --------------------------------------------------------

--
-- Table structure for table `config`
--

CREATE TABLE `config` (
  `cf_id` int(11) NOT NULL,
  `cf_nama` varchar(255) NOT NULL,
  `cf_alamat` varchar(255) NOT NULL,
  `cf_email` varchar(255) NOT NULL,
  `cf_website` varchar(255) NOT NULL,
  `cf_telephone` varchar(255) NOT NULL,
  `cf_pengumuman` varchar(255) NOT NULL,
  `cf_tahunpelajaran` varchar(9) NOT NULL,
  `cf_waktu` datetime NOT NULL,
  `cf_logo` varchar(255) NOT NULL,
  `cf_created_by` int(11) NOT NULL,
  `cf_updated_by` int(11) NOT NULL,
  `cf_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cf_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `cf_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `config`
--

INSERT INTO `config` (`cf_id`, `cf_nama`, `cf_alamat`, `cf_email`, `cf_website`, `cf_telephone`, `cf_pengumuman`, `cf_tahunpelajaran`, `cf_waktu`, `cf_logo`, `cf_created_by`, `cf_updated_by`, `cf_created_at`, `cf_updated_at`, `cf_status`) VALUES
(1, 'SMK Muhammadiyah 1 Yogyakarta', 'Jln Nitikan 48,Umbulharjo ,Yogyakarta', 'smkmuh1yk@yahoo.co.id', 'http://www.smkmuh1-yog.sch.id', '(0731)323 023', 'Pengumuman Ujian Tengah Semester ', '2020/2021', '2020-05-02 10:00:00', 'logo-app.png', 2147483647, 2147483647, '2020-10-18 09:37:53', '2020-02-11 11:14:19', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`cf_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `config`
--
ALTER TABLE `config`
  MODIFY `cf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

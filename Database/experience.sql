-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 09, 2020 at 08:29 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `PhotoUrl` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `UserEmail` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Title` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`PhotoUrl`, `UserEmail`, `Content`, `Title`) VALUES
('', '', '', ''),
('https://tongjiang.neocities.org/2020fall/1.jpg', '123@123.com', 'This Colorado town woos visitors with its captivating scenery and delightful Mountain Village. ', 'Telluride'),
('https://tongjiang.neocities.org/2020fall/2.jpg', '123@123.com', 'Bar Harbor is small-town Maine at its finest. This relaxing East Coast retreat is filled with bed-and-breakfast accommodations and plenty of opportunities for outdoor fun. Boat tours, history tours and culinary tours are just a few ways travelers can get better acquainted with Bar Harbor.', 'Bar Harbor'),
('https://tongjiang.neocities.org/2020fall/3.jpg', '123@123.com', 'Jackson Hole has made a name for itself thanks to its 400-some inches of annual snowfall and 2,500 acres of skiable terrain. ', 'Jackson Hole'),
('https://tongjiang.neocities.org/2020fall/4.jpg', '123@123.com', 'This lake that straddles the California-Nevada state line lets visitors choose their own adventure. Ski at the intimate, cozy Homewood Mountain Resort in winter or soak up some sun and swim at Kings Beach State Recreation Area in summer.', 'Lake Tahoe'),
('https://tongjiang.neocities.org/2020fall/5.jpg', '123@123.com', 'You\'ll find the perfect mix of adventure and relaxation in this small Arizona town. The 100-plus hiking trails are great for nature lovers, while the vortexes draw holistic enthusiasts and the luxe spas cater to visitors looking to unwind. For a bit of retail therapy, head to Tlaquepaque Arts & Crafts Village. Conclude your day with a visit to one of the local wineries for a tasting and to purchase a bottle or two of wine.', 'Sedona'),
('https://tongjiang.neocities.org/2020fall/6.jpg', 'jiang.to@gmail.com', 'Situated along the banks of the Yampa River, this northern Colorado town offers excellent skiing conditions, a community of friendly locals and geothermal hot springs that are perfect after a long day spent on the slopes. Travel to Steamboat in fall for brilliant foliage found in Medicine Bow-Routt National Forests, or come in spring to get an eyeful of Fish Creek Falls. Meanwhile, the whole family will enjoy rides on the Outlaw Mountain Coaster and a relaxing tubing trip down the Yampa River.', 'Steamboat Springs'),
('https://tongjiang.neocities.org/2020fall/7.jpg', 'jiang.to@gmail.com', 'Full of history and unspoiled beaches, this Florida town beckons to visitors with its links to Spanish colonial landmarks. After strolling along St. George Street and through the Colonial Quarter, check out the St. Augustine Lighthouse and Maritime Museum. Then, head to the shore to relax and wade in the calm ocean waters. Alternatively, you can attempt to reclaim your adolescence at Ponce de Leon\'s Fountain of Youth.', 'St. Augustine'),
('https://tongjiang.neocities.org/2020fall/8.jpg', '1523@163.com', 'You\'ll find stunning Colorado mountain vistas year-round in this former Gold Rush town. Winter is when powder hounds flock to Breckenridge\'s ski resorts to shred powder on their slopes. Once the weather warms up, other outdoor pursuits like hiking and biking the Vail Pass Path and Boreas Pass Road become the main things to do. Regardless of when you visit, you\'ll discover plenty of breweries and a distillery to unwind at after a busy day on the trails or slopes.', 'Breckenridge\r\n');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

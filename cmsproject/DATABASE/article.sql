-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 27, 2019 at 07:38 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `article`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(10) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(100) NOT NULL,
  `post_date` date NOT NULL,
  `post_author` varchar(100) NOT NULL,
  `post_keywords` text,
  `post_content` text NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_title`, `post_date`, `post_author`, `post_keywords`, `post_content`) VALUES
(0, 'Infiniti unveils new brand identity to strengthen its company positioning', '2017-12-19', 'Realeased by The Hindu', 'Infiniti,Infiniti unveils new brand identity to strengthen its company positioning,\r\ncompany positioning,new brand identity', 'Infiniti Software Solutions, the leading global travel technology provider, unveils its new brand identity. Since its foundation in 2005, with innovation at its heart, Infiniti has been continuously upgrading itself to meet the ever-changing demands of the industry. Over the years the customer-centric approach of Infiniti has enabled to build and nurture relationships with corporates, travel agencies and airlines. In addition to repeating business and steep profit growth. The progression of the travel industry has driven Infiniti to transform into a customer-leading organization with a focus on futuristic product development. Hence the change in the identity is brought about to reflect the company''s evolution into an all-encompassing global solution provider for the travel industry.\r\n\r\nThe brand identity reflects Infiniti being an innovative, forward-thinking and people-centric travel technology company. The inspiration for the design of the new Identity is navigation and the alphabet "I". A navigator helps us to find the correct direction. Similarly, Infiniti is dedicated to deliver comprehensive advanced travel technology solutions by partnering with its customers. Alphabet "I" signifies infinite possibilities for innovation and a human in an abstract form. The symbol two colored triangles above the letter "i" is the focal point of identity. It indicates the young, energetic and, dynamic individuals taking travel technology forward. The colors red, blue and yellow reflect Infiniti''s personality which is bright, colorful and confident.\r\n\r\nCommenting on the new brand identity, Mr. Ananth Narasimhan, CEO & MD, Infiniti says, "The transformation is a bold move we have taken keeping in mind the value proposition we offer today to our customers. As we are expanding exponentially at the global market with continuous addition of product portfolios and customer segments, we desired identity to reflect the growing face of ours. This mark a significant milestone on our journey towards achieving our goals".\r\n\r\nThe landscape of travel is changing rapidly through technology disruption and upheaval. Infiniti''s new business model and plans of rapid growth are aimed to bring about an acceleration around the travel experience, and the way travel providers operate.\r\n\r\n'),
(1, 'IATA awards Infiniti Software Solutions NDC Level 3 certification', '2019-02-19', 'Released by indian express', 'IATA awards,NDC Level 3 certification,IATA awards Infiniti Software Solutions NDC Level 3 certification,\r\nInfiniti Software Solutions', 'IATA awards Infiniti Software Solutions NDC Level 3 certification\r\n\r\n\r\n\r\nInfiniti software solutions, one of the worlds leading travel and aviation technology solution company has been certified by the International Air Transport Association (IATA) with NDC Level 3 capability as an I.T provider.\r\n\r\nLaunched by IATA, NDC (New Distribution Capability) is an XML based data transmission standard which overcomes the challenges of the current distribution system for airlines. It will enable the airline to distribute its product offers and promote its ancillary services using rich content.\r\n\r\nAt present, travelers while booking through direct or indirect channels are limited to seat/fare options. With NDC they will be now able to access ancillary services like baggage, seat selection and personalized offers. By addressing end-to-end airline distribution process, NDC is all set to revolutionize airline retailing and distribution.\r\n\r\nLevel 3 is the highest possible certification level under the NDC certification protocol. It has certified Infiniti as an IT service provider having capacity to consume and deploy offer and order management messages whose schemas are in compliance with the standard NDC message schema.\r\n\r\n"We at Infiniti are committed to creating state of the art technology solutions for our customers. NDC Level 3 certification will enable us to provide richer content to our customers", said Mr. Ananth Narasimhan, CEO of Infiniti Software Solutions.\r\n\r\nThe certification process for level 3 is very rigorous and only a handful of companies globally have been awarded NDC Level 3 certification. Moving forward, Infiniti will be deploying this facility for its customers for enhanced customer experience.'),
(2, 'Infiniti software solutions plans global expansion', '2019-03-19', 'Released by indian express', 'Infiniti software solutions plans global expansion,global expansion, travel techonology service ', '\r\n\r\nInfiniti software solutions, a Chennai based travel techonology service provider to corpo-rates, claims to be leading the space in India. The company offers diverse solutions for the travel and aviation industry such as SME tool, expense management, group revenue management, business travel management, airline forecasting tool, and airline CRM solution.\r\n\r\nMr. Ananth Narasimhan, founder and CEO, Infiniti Software Solutions, said, "The role of technology in travel is gaining more importance, now that the world is changing more rapidly than ever. The aggressive adoption of technology has resulted in more operational efficiency and savings in terms of time and money. Business travel technology solutions have seen significant development as customers are demanding faster and more efficient systems to control costs and reduce turn around time. "Atyourprice and group revenue management solution, GroupRM, are seeing significant demand across the world". ');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

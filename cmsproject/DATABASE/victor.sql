-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 27, 2019 at 07:37 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `victor`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_pass` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_id`, `user_name`, `user_pass`) VALUES
(1, 'victor', 'headadmin'),
(2, 'ifeanyi', 'subadmin'),
(3, 'w', 'w'),
(4, '', ''),
(5, '', ''),
(6, '', ''),
(7, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(10) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(100) NOT NULL,
  `post_date` date NOT NULL,
  `post_author` varchar(100) NOT NULL,
  `post_image` text NOT NULL,
  `post_keywords` text NOT NULL,
  `post_content` text NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_title`, `post_date`, `post_author`, `post_image`, `post_keywords`, `post_content`) VALUES
(0, 'AgencyAuto', '2019-02-19', 'Infiniti Employee', 'aa1.png', 'AgencyAuto', 'AgencyAuto is a one stop solution for travel agencies that helps them connect with their customers, fulfill their travel request and manage the agency functions.\r\n\r\nOur travel technology specialist are constantly on the move, to provide the best solution to our client. \r\n\r\nMaximization of revenue\r\n\r\nHelps travel agencies to distinctly charge their customer with different transaction/markup fee for maximizing revenue per transaction. Also, they can cross-sell ancillary services to boost their revenue.\r\n\r\nReduced turn around time\r\n\r\nMost of the travel agencies process travel request manually with the help of travel desk team. It may take long hours to quote a price and this delay in processing time results in customer drop out. Auto-ticketing feature helps travel agencies to respond faster and better.\r\n\r\nTransparent accounting\r\n\r\nWhen accounting is done manually it may prone to error. AgencyAuto automates invoicing of the tickets and ensures proper accounting of every transaction. Credit control and supplier reconciliation process identify and prevents revenue leakage.\r\n\r\nStreamlined agency process\r\n\r\nThe manual process in travel agencies tends to be time-consuming and inefficient. AgencyAuto systematizes the process and helps in bringing control over the agency functions. Booking, approval, cancellation, rescheduling, invoicing and accounting are seamlessly done without any human intervention.\r\n\r\nIncrease in productivity\r\n\r\nAutomates the workflow of the agency, thereby reducing the time spent by travel consultant on non-revenue generating tasks. Also, quality control feature reduces the chances of error to negligible while fulfilling the travel request.\r\n\r\nEnhanced communication\r\n\r\nHelps to discard expensive communication means such as phone calls, e-mails, scanned documents, and faxes by fulfilling the travel requests in few clicks. It also constantly notifies customers about their travel itineraries.\r\n\r\nStrategic business insight\r\n\r\nWith more than 60 reports giving meaningful insights, travel agencies can take quick and accurate strategic decisions. They can quickly identify the major revenue generating sectors, customers and plan their revenue program.\r\n\r\nCustomer satisfaction\r\n\r\nWith the help of AgencyAuto customers can raise travel requests anywhere, anytime through any device. Customers find it user-friendly as all their travel requirements are met through a single system.\r\n\r\nCustomized to the needs\r\n\r\nCustomization helps to add on features according to the requirement of travel agencies. Multi-language, multi-GDS, multi-currency, multi-user and multi-branch features help them to serve their customers in a specialized way.\r\n\r\nMultiple clients/sub agents management\r\n\r\nTravel agencies can manage multiple sub-agencies by assigning specific corporates to them. AgencyAuto provides a single platform for processing and managing multiple customer travel request.'),
(1, 'AtYourPrice', '2018-09-20', 'Infiniti Employee', 'aa2.png', 'atyourprice, bussiness travel management', '\r\nBusiness Travel Management Solution\r\n\r\nAt Your Price\r\n\r\nAtyourprice is a robust web based business travel solution that automates travel planning, requisition, approval, fulfillment, invoicing, reporting and duty of care. Automation brings exponential savings to business travel programs and also makes the travel procurement process more operationally efficient.\r\n\r\nFeatures\r\n\r\nCustomised work flow\r\n\r\nAutomate and alert your travel or trip approver with not just necessity to travel but also cost associated with it. With our multi level work flow engine travelers and approvers will be able to effectively and efficiently plan and approve travel requests or indents.\r\n\r\nPolicy enforcement\r\n\r\nThe challenge for most travel managements is to enforce adherence to travel policy. Our travel policy engine can be configured to ensure 100% policy compliance. The policy level settings can be configured on band, designation, department, location or title.\r\n\r\nCustom report engine\r\n\r\nCustom reports engine enables your organization to derive data to measure the effectiveness of your travel program. Analytical reports will help your organization to quantify losses resulting due to buying habits of employees.'),
(2, 'Group RM', '2018-05-13', 'Infiniti Employee', 'aa3.png', 'Group RM,RM,Group Revenue Management ', '\r\nGroup Revenue Management\r\n\r\nGroupRM is an innovative solution that helps airlines to effectively control group traffic. It aids in increasing sales by enabling the group analysts to better manage and optimize group sales.\r\n\r\nFeatures\r\n\r\nGroup requestor interface\r\n\r\nThis interface provides a customizable ad- hoc or series group request form for the different types of requesters like direct customers, travel agents, corporate travel managers, airline sales force and group desk analyst.\r\n\r\nGroup processing interface\r\n\r\nThis interface provides the analyst in the airline group desk to monitor incoming group request, evaluate them, provide fare quotes and respond back to the customers.\r\n\r\nGroup ticketing\r\n\r\nThis module interfaces with the airline reservation system to create a group PNR and subsequently insert names along with the terms and conditions. The requestor can directly enter the names and details for group booking.\r\n\r\n'),
(3, 'Expense Out', '2014-02-23', 'Infiniti Employee', 'aa4.png', 'Expense Management Solution, Expense Out', 'Expense Management Solution\r\n\r\nAn easy to use business travel & expense management solution that helps automate travel booking, expense claims, approvals, settlement and tracking of all expenses using a single web based interface.\r\n\r\nFeatures\r\n\r\nPolicy compliance\r\n\r\nAdherence to policy is a serious concern for management. ExpenseOut helps organization control costs by ensuring 100% policy compliance.\r\n\r\nQuick Reimbursements\r\n\r\nOrganizations need to understand the importance of quickly identifying and settling expense claims of employees. Quick reimbursements lead to happier employees and better productivity.\r\n\r\nAnalytics\r\n\r\nInstantly analyze and investigate expenses, policy violations and exceptions through a custom report engine. Visibility of spend helps in accurate provisioning and budgeting.'),
(4, 'Airline Forecasting Tool', '2017-02-23', 'Infiniti Employee', 'aa5.png', 'Airline Forecasting Tool,  CrAFT', 'CrAFT is an intuitive and highly effective revenue management solution based on accurate forecasting for airlines, devised by our experts who have decades of experience with designing successful revenue management systems and processes for several international airlines. CrAFT is also having various versions designed to suit airlines with different scales of operations and business models.\r\n\r\nFeatures\r\n\r\nDemand forecasting\r\n\r\nCrAFT demand forecasting module uses proven and advanced statistical techniques to predict demand based on information from all similar flights for which historic data is available. The demand for air travel exhibits patterns either cyclic in nature (such as time-of-day, day-of-week or season-of-year demand), or trends (such as growth in demand due to growth in the economy), which can be projected to estimate future demand in each market segment.\r\n\r\nInventory optimization\r\n\r\nTo generate maximum revenue the optimal number of seats can be allocated to the various price points. The process ensures that fare classes of lower value are closed for sale to save seats for late-arriving customers who are yet to book and will buy seats at a higher value. The system uses the Expected Marginal Seat Revenue algorithm to compute the number of seats to save for late-booking-higher-valued fare products.\r\n\r\nPrice optimization\r\n\r\nThe system is designed to allow the airline''s revenue management analyst to choose the pricing strategy that fits an optimised flight best. There are various types of pricing strategies available to choose from depending on the characteristics of the flight, data availability, and the analyst''s intuition. '),
(5, 'Airline SME Solution', '2018-08-19', 'Infiniti Employee', 'aa6.jpg', 'Airline SME Solution,SME Tool', '\r\nAirline SME Solution\r\n\r\nSME\r\n\r\nSME Tool is an innovative solution that helps airlines effectively manage SME bookings. The Tool integrates with the airline reservation systems and acts as a self booking solution to the SMEs. It aids in increasing sales by enabling SMEs to self register and book tickets online with multiple payment options. SME Tool also helps airline to effectively manage seasonal promotions and rewards programme in a particular region or country.\r\n\r\nFeatures\r\n\r\nTarget, create and attract SMEs\r\nThrough SME Tool, airlines can provide special offers and benefits to SME and can target the untapped SME market. SME Tool can be used as an independent application or in conjunction with the revenue management system of one airline to determine if it is economically favorable to provide some extra benefits and discounts to SMEs automatically by using special algorithms.\r\n\r\nMultiple interfaces for different types of users\r\n\r\nSME Tool has multiple interfaces for the different types of users who will be using the system. Three major interfaces are Airline Interface, Travel Admin Interface and Employee Interface. Multiple interfaces enable different types of users to proceed their part of flight booking effortlessly and in a customized manner by logging into their respective accounts.\r\n\r\nCustomized reports\r\n\r\nUsers of SME Tool can get various customized reports. These reports help Airlines to evaluate and plan for SMEs bookings and to manage various promotional activities and extra benefits for SMEs. On the other hand the travel admin and employees of SMEs use reports for determining their frequent travel sectors, credits owned, etc. and to plan for their future travel accordingly.\r\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

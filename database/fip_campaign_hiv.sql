-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 12, 2020 at 02:33 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fip_campaign_hiv`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_main_sections`
--

CREATE TABLE `tbl_main_sections` (
  `id` int(11) NOT NULL,
  `section_header` varchar(250) NOT NULL,
  `section_text` text NOT NULL,
  `section_hashtag` text NOT NULL,
  `section_color` varchar(20) NOT NULL,
  `img` varchar(100) NOT NULL,
  `popup` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_main_sections`
--

INSERT INTO `tbl_main_sections` (`id`, `section_header`, `section_text`, `section_hashtag`, `section_color`, `img`, `popup`) VALUES
(1, 'Hey, I’m Gary!', 'I can assume that you are here to find more \r\n                            information about HIV/AIDS. If your answer \r\n                            is yes, it means you came to the right page. \r\n                            Keep reading, and you will know the truth about it.', '#HIVFighters', 'grey', 'gary.svg', 'gary.png'),
(2, 'THE MORE YOU KNOW, THE STRONGER YOU BECOME', 'HIV (human immunodeficiency virus) is a virus that attacks a person’s immune system. However, with proper treatment HIV-positive people can live happily ever after and be an equal part of society. On the other hand, without medical treatment, HIV can outgrow to AIDS (acquired immune deficiency syndrome). ', '#Stronger', 'white', 'main.svg', 'main.png'),
(3, 'Nice to meet you, I’m Love', 'Many people think that life with HIV means never be able to be in a relationship, have sex or friends. Here are the facts:\r\n1. Kissing is safe.\r\n2. There are no reports of HIV transmission through every day activates and domestic contact. Remember, sharing pizza are not risky!\r\n3. HIV cannot be transmitted by salivary.\r\n4. Protection means that a couple with different HIV/AIDS status can have sex without transmitting it.\r\n5. Oral sex has a low HIV risk. It can be transmitted if the person has cuts in a mouth.', '#makeLOVEnotAIDS', 'pink', 'love.svg', 'lb_pink.png'),
(4, 'Hello, my name is Treatment', 'And I am a combination of drugs who prevents the spread of HIV in a human body and keep the amount of virus at a low level. I usually call myself Antiretroviral Treatment. I don’t cure the virus but keep him locked in the cell. Sometimes, I can be so powerful, that the virus is not able to affect the person’s health and the risk to transmit HIV becomes a ZERO. Unfortunately, without me, the virus can become strong and it will cause harm to the immune system. Also, for HIV-negative people, I have known as PrEP and PEP. PrEP is a pill that prevents HIV. It can be useful for couples where one partner has a virus. PEP is an emergency treatment for people who think that they got a virus. ', '#makeTreatmentnotAIDS', 'green', 'treatment.svg', 'lb_green.png'),
(5, 'What’s up? I’m Protection', 'And someone who not allow HIV to get through. For your better understanding virus can be transmitted by:\r\n1. Vaginal sex\r\n2. Anal sex\r\n3. Oral sex\r\n4. Injecting drugs\r\n5. Blood transfusions and transplants\r\n6. Mother-to-child \r\nHow can you protect yourself?\r\n1. Use a condom every time you have sex.\r\n2. Take a PrEP course if you have a relationship with a person who has HIV.\r\n3. If you take drugs, do not share needles, syringes and injection equipment.', '#makeProtectionnotAIDS', 'orange', 'protection.svg', 'lb_orange.png'),
(6, 'What’s new? I’m Connection', 'And for me is important do not allow HIV stigma and discrimination spread around the world. The only way to do it is to become curious and open to the world. There are some tips on how to be supportive:\r\n1. Acknowledge. Thank people who shared your status with you. Do not judge them.\r\n2. Ask. Ask them about their feelings and anything that you can help with.\r\n3. Reassure. Tell them that your attitude toward this person will not change because of the status.\r\n4. Learn. Learn more about HIV because with the knowledge you gain strength.', '#makeConnectionnotAIDS', 'blue', 'connection.svg', 'lb_blue.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_fname` varchar(300) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(300) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_ip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_ip`) VALUES
(1, 'Protection', 'protection777', 'password', 'protection@gmail.com', '::1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_main_sections`
--
ALTER TABLE `tbl_main_sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_main_sections`
--
ALTER TABLE `tbl_main_sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

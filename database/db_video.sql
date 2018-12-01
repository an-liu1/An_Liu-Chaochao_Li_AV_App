-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 27, 2018 at 04:37 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_video`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` varchar(15) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'animals'),
(2, 'sports'),
(3, 'family'),
(4, 'music'),
(5, 'movies'),
(6, 'scenery');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video`
--

DROP TABLE IF EXISTS `tbl_video`;
CREATE TABLE IF NOT EXISTS `tbl_video` (
  `video_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT,
  `video_name` varchar(100) NOT NULL,
  `video_author` varchar(50) NOT NULL,
  `video_description` text NOT NULL,
  `video_duration` varchar(10) NOT NULL,
  `video_upload_date` date NOT NULL,
  `video_url` varchar(150) NOT NULL,
  `video_cover_img` varchar(30) NOT NULL,
  `video_rating` varchar(10) NOT NULL,
  `video_visits` int(10) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_video`
--

INSERT INTO `tbl_video` (`video_id`, `video_name`, `video_author`, `video_description`, `video_duration`, `video_upload_date`, `video_url`, `video_cover_img`, `video_rating`, `video_visits`) VALUES
(1, 'How humans and animals can live together', 'Jane Goodall', 'The legendary chimpanzee researcher Jane Goodall talks about TACARE and her other community projects, which help people in booming African towns live side-by-side with threatened animals.', '23:37', '2007-06-09', 'https://www.ted.com/talks/jane_goodall_at_tedglobal_07', 'images/humans&animals.png', '8.1', 750482),
(2, 'We Are the Halluci Nation', 'A Tribe Called Red', 'A Tribe Called Red creates music that acts as a gateway into urban, contemporary indigenous culture, celebrating all of its layers and complexity. In a set that blends traditional powwow drums and vocals with hip-hop and electronic music, the DJ collective tells stories of the First Nations in beats and images -- expanding on the concept of the \"Halluci Nation,\" inspired by the poet, musician and activist John Trudell.', '11:19', '2018-04-01', 'https://www.ted.com/talks/a_tribe_called_red_we_are_the_halluci_nation', 'images/halluci_nation.png', '8.5', 99395),
(3, 'My quest to defy gravity and fly', 'Elizabeth Streb', 'Over the course of her fearless career, extreme action specialist Elizabeth Streb has pushed the limits of the human body. She\'s jumped through broken glass, toppled from great heights and built gizmos to provide a boost along the way. Backed by footage of her work, Streb reflects on her lifelong quest to defy gravity and fly the only way a human can -- by mastering the landing.', '9:14', '2018-04-02', 'https://www.ted.com/talks/elizabeth_streb_my_quest_to_defy_gravity_and_fly', 'images/gravity.png', '8.6', 770348),
(4, 'How I accidentally changed the way movies get made', 'Franklin Leonard', 'How does Hollywood choose what stories get told on-screen? Too often, it\'s groupthink informed by a narrow set of ideas about what sells at the box office. As a producer, Franklin Leonard saw too many great screenplays never get made because they didn\'t fit the mold. So he started the Black List, an anonymous email that shared his favorite screenplays and asked: Why aren\'t we making these movies? Learn the origin story of some of your favorite films with this fascinating insider view of the movie business.', '16:20', '2018-10-08', 'https://www.ted.com/talks/franklin_leonard_how_i_accidentally_changed_the_way_movies_get_made_nov_2018', 'images/movies_get.png', '6.6', 538622),
(5, 'My journey to thank all the people responsible for my morning coffee', 'AJ Jacobs', 'Author AJ Jacobs embarked on a quest with a deceptively simple idea at its heart: to personally thank every person who helped make his morning cup of coffee. More than one thousand \"thank yous\" later, Jacobs reflects on the globe-trotting journey that ensued -- and shares the life-altering wisdom he picked up along the way. \"I discovered that my coffee would not be possible without hundreds of people I take for granted,\" Jacobs says.', '15:29', '2018-06-15', 'https://www.ted.com/talks/aj_jacobs_my_journey_to_thank_all_the_people_responsible_for_my_morning_coffee', 'images/morning_coffee.png', '9.0', 508142),
(6, 'How nationalism and globalism can coexist', 'Wanis Kabbaj', 'Why do we have to choose between nationalism and globalism, between loving our countries and caring for the world? In a talk with lessons for avowed nationalists and globalists alike, Wanis Kabbaj explains how we can challenge this polarizing, binary thinking -- and simultaneously be proud citizens of both our countries and the world.', '12:55', '2018-07-03', 'https://www.ted.com/talks/wanis_kabbaj_how_nationalism_and_globalism_can_coexist', 'images/coexist.png', '7.2', 784607),
(7, 'Special Olympics let me be myself — a champion', 'Matthew Williams', 'How much do you know about intellectual disabilities? Special Olympics champion and ambassador Matthew Williams is proof that athletic competition and the camaraderie it fosters can transform lives, both on and off the field. Together with his fellow athletes, he invites you to join him at the next meet -- and challenges you to walk away with your heart unchanged.', '14:13', '2015-11-02', 'https://www.ted.com/talks/matthew_williams_special_olympics_let_me_be_myself_a_champion', 'images/champion.png', '8.0', 1122592),
(8, 'One day of peace', 'Jeremy Gilley', 'Here\'s a crazy idea: Persuade the world to try living in peace for just one day, every September 21. In this energetic, honest talk, Jeremy Gilley tells the story of how this crazy idea became real -- real enough to help millions of kids in war-torn regions.', '17:34', '2011-07-05', 'https://www.ted.com/talks/jeremy_gilley_one_day_of_peace', 'images/peace.png', '7.2', 873034),
(9, 'Why bother leaving the house?', 'Ben Saunders', 'Explorer Ben Saunders wants you to go outside! Not because it’s always pleasant and happy, but because that’s where the meat of life is, “the juice that we can suck out of our hours and days.” Saunders’ next outdoor excursion? To try to be the first in the world to walk from the coast of Antarctica to the South Pole and back again.', '10:31', '2012-11-22', 'https://www.ted.com/talks/ben_saunders_why_bother_leaving_the_house', 'images/leave_house,png', '9.2', 1836955),
(10, 'How to tame your wandering mind', 'Amishi Jha', 'Amishi Jha studies how we pay attention: the process by which our brain decides what\'s important out of the constant stream of information it receives. Both external distractions (like stress) and internal ones (like mind-wandering) diminish our attention\'s power, Jha says -- but some simple techniques can boost it. \"Pay attention to your attention,\" Jha says.', '18:09', '2017-03-05', 'https://www.ted.com/talks/amishi_jha_how_to_tame_your_wandering_mind', 'images/wandering_mind.png', '9.3', 1947629),
(11, 'The real danger lurking in the water', 'Romulus Whitaker', 'The gharial and king cobra are two of India\'s most iconic reptiles, and they\'re endangered because of polluted waterways. Conservationist Romulus Whitaker shows rare footage of these magnificent animals and urges us to save the rivers that sustain their lives and our own.', '17:12', '2009-11-11', 'https://www.ted.com/talks/romulus_whitaker_the_real_danger_lurking_in_the_water', 'images/lurking.png', '6.0', 522559),
(12, 'Moral behavior in animals', 'Frans de Waal', 'What happens when two monkeys are paid unequally? Fairness, reciprocity, empathy, cooperation -- caring about the well-being of others seems like a very human trait. But Frans de Waal shares some surprising videos of behavioral tests, on primates and other mammals, that show how many of these moral traits all of us share.', '16:45', '2011-11-05', 'https://www.ted.com/talks/frans_de_waal_do_animals_have_morals', 'images/moral_behavior.png', '8.5', 4053839),
(13, 'The story of a girl', 'Rick Smolan', 'Photographer Rick Smolan tells the unforgettable story of a young Amerasian girl, a fateful photograph, and an adoption saga with a twist.', '24:56', '2007-12-03', 'https://www.ted.com/talks/rick_smolan_tells_the_story_of_a_girl', 'images/girl_story.png', '7.5', 1247510),
(14, 'New ways to see music (with color! and fire!)', 'Jared Ficklin', 'Designer Jared Ficklin creates wild visualizations that let us see music, using color and even fire (a first for the TED stage) to analyze how sound makes us feel. He takes a brief digression to analyze the sound of a skatepark -- and how audio can clue us in to developing creativity.', '9:54', '2012-03-05', 'https://www.ted.com/talks/jared_ficklin_new_ways_to_see_music_with_color_and_fire', 'images/music_new_way.png', '6.1', 694425),
(15, 'The roots of plant intelligence', 'Stefano Mancuso', 'Plants behave in some oddly intelligent ways: fighting predators, maximizing food opportunities ... But can we think of them as actually having a form of intelligence of their own? Italian botanist Stefano Mancuso presents intriguing evidence.', '13:44', '2010-07-06', 'https://www.ted.com/talks/stefano_mancuso_the_roots_of_plant_intelligence', 'images/plant_intelligence.png', '8.5', 1199831),
(16, 'What we learn from insects\' sex lives', 'Marlene Zuk', 'In this enlightening, funny talk, Marlene Zuk shares just some of the ways that insects are truly astonishing -- and not least for the creative ways they have sex.', '11:59', '2015-05-05', 'https://www.ted.com/talks/marlene_zuk_what_we_learn_from_insects_kinky_sex_lives', 'images/sex_lives.png', '8.6', 1498047),
(17, 'My love letter to cosplay', 'Adam Savage', 'Adam Savage makes things and builds experiments, and he uses costumes to add humor, color and clarity to the stories he tells. Tracing his lifelong love of costumes -- from a childhood space helmet made of an ice cream tub to a No-Face costume he wore to Comic-Con -- Savage explores the world of cosplay and the meaning it creates for its community. \"We\'re connecting with something important inside of us,\" he says. \"The costumes are how we reveal ourselves to each other.\"', '13:08', '2016-02-05', 'https://www.ted.com/talks/adam_savage_my_love_letter_to_cosplay', 'images/cosplay.png', '8.7', 2219565),
(18, 'Less stuff, more happiness', 'Graham Hill', 'Writer and designer Graham Hill asks: Can having less stuff, in less room, lead to more happiness? He makes the case for taking up less space, and lays out three rules for editing your life.', '5:43', '2011-03-25', 'https://www.ted.com/talks/graham_hill_less_stuff_more_happiness', 'images/happiness.png', '7.9', 4364317),
(19, 'How movies teach manhood', 'Colin Stokes', 'When Colin Stokes\' 3-year-old son caught a glimpse of \"Star Wars,\" he was instantly obsessed. But what messages did he absorb from the sci-fi classic? Stokes asks for more movies that send positive messages to boys: that cooperation is heroic, and respecting women is as manly as defeating the villain.', '12:50', '2012-11-23', 'https://www.ted.com/talks/colin_stokes_how_movies_teach_manhood', 'images/manhood.png', '8.9', 4785020),
(20, 'Why some people find exercise harder than others', 'Emily Balcetis', 'Why do some people struggle more than others to keep off the pounds? Social psychologist Emily Balcetis shows research that addresses one of the many factors: our vision. In an informative talk, she shows how when it comes to fitness, some people quite literally see the world differently -- and offers a surprisingly simple solution to overcome these differences.', '14:04', '2014-11-24', 'https://www.ted.com/talks/emily_balcetis_why_some_people_find_exercise_harder_than_others', 'images/exercise.png', '6.8', 3488652),
(21, 'The magic ingredient that brings Pixar movies to life', 'Danielle Feinberg', 'Danielle Feinberg, Pixar\'s director of photography, creates stories with soul and wonder using math, science and code. Go behind the scenes of Finding Nemo, Toy Story, Brave, WALL-E and more, and discover how Pixar interweaves art and science to create fantastic worlds where the things you imagine can become real. This talk comes from the PBS special \"TED Talks: Science & Wonder.\"', '12:05', '2015-11-06', 'https://www.ted.com/talks/danielle_feinberg_the_magic_ingredient_that_brings_pixar_movies_to_life', 'images/pixar_movies.png', '8.7', 2833534),
(22, 'The life-long learner', 'Bernie Dunlap', 'Wofford College president Bernie Dunlap tells the story of Sandor Teszler, a Hungarian Holocaust survivor who taught him about passionate living and lifelong learning.', '18:58', '2007-03-25', 'https://www.ted.com/talks/ben_dunlap_talks_about_a_passionate_life', 'images/life-long_learner.png', '8.6', 2012698),
(23, 'My desperate journey with a human smuggler', 'Barat Ali Batoor', 'Photojournalist Barat Ali Batoor was living in Afghanistan -- until his risky work forced him to leave the country. But for Batoor, a member of a displaced ethnic group called the Hazara, moving home to Pakistan proved dangerous too. And finding a safer place wasn\'t as simple as buying a plane ticket. Instead, he was forced to pay a human smuggler, and join the deadly tidal wave of migrants seeking asylum by boat. He documents the harrowing ocean trip with powerful photographs.', '10:37', '2014-04-12', 'https://www.ted.com/talks/barat_ali_batoor_my_desperate_journey_with_a_human_smuggler', 'images/huamn_smuggler.png', '8.4', 1025649),
(24, 'The intriguing sound of marine mammals', 'Peter Tyack', 'Peter Tyack of Woods Hole talks about a hidden wonder of the sea: underwater sound. Onstage at Mission Blue, he explains the amazing ways whales use sound and song to communicate across hundreds of miles of ocean.', '18:21', '2010-04-23', 'https://www.ted.com/talks/peter_tyack_the_intriguing_sound_of_marine_mammals', 'images/marine_mammals.png', '6.2', 459910),
(25, 'How a dragonfly\'s brain is designed to kill', 'Greg Gage', 'Dragonflies can catch prey with near perfect accuracy, the best among all predators. But how does something with so few neurons achieve such prowess? Our intrepid neuroscientists explore how a dragonfly unerringly locks onto its preys and captures it within milliseconds using just sensors and a fake fly.', '5:18', '2018-06-23', 'https://www.ted.com/talks/diy_neuroscience_the_terrifying_accuracy_of_dragonfly_strikes', 'images/dragonfly.png', '9.0', 933759),
(26, 'How kids can help design cities', 'Mara Mintzer', 'Adults tend to think of kids as \"future citizens\" -- their ideas and opinions will matter someday, just not today. But kids make up a quarter of the population, so shouldn\'t they have a say in what the world they\'ll inherit will look like? Urban planner Mara Mintzer shares what happened when she and her team asked kids to help design a park in Boulder, Colorado -- and how it revealed an important blind spot in how we construct the built environment. \"If we aren\'t including children in our planning, who else aren\'t we including?\" Mintzer asks.', '14:25', '2017-11-23', 'https://www.ted.com/talks/mara_mintzer_how_kids_can_help_design_cities', 'images/kids_designer.png', '5.4', 638255);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video_cate`
--

DROP TABLE IF EXISTS `tbl_video_cate`;
CREATE TABLE IF NOT EXISTS `tbl_video_cate` (
  `video_cate_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT,
  `video_id` int(30) NOT NULL,
  `category_id` int(30) NOT NULL,
  PRIMARY KEY (`video_cate_id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_video_cate`
--

INSERT INTO `tbl_video_cate` (`video_cate_id`, `video_id`, `category_id`) VALUES
(1, 1, 1),
(2, 2, 4),
(3, 3, 4),
(4, 4, 5),
(5, 5, 3),
(6, 6, 3),
(7, 7, 2),
(8, 8, 2),
(9, 8, 5),
(10, 9, 6),
(11, 9, 3),
(12, 10, 6),
(13, 11, 1),
(14, 12, 1),
(15, 13, 5),
(16, 13, 1),
(17, 14, 4),
(18, 15, 6),
(19, 16, 1),
(20, 17, 5),
(21, 18, 3),
(22, 19, 5),
(23, 20, 2),
(24, 21, 5),
(25, 22, 3),
(26, 23, 6),
(27, 24, 1),
(28, 25, 1),
(29, 25, 6),
(30, 26, 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

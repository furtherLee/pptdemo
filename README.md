User Guide For Using This Demo
==============================

This is a guide for setting up basic PHP website. I will share some common concept about how a dynamic website is working. The topic of this website is sharing jokes.

Controller
----------
There is only one controller called *JokeController*. It will retrieve jokes from database, set page contexts and render it with proper template.

Model
------
There is only one model called *Joke*. A joke consists of different fields, including the title, the body, ups and downs. Model has a concept of ActiveRecord, built on *flourish*, you can find information in the book *Patterns of Enterprise Application Architecture*. It may contains useful method aggregated for retrieving records from database.

View
-----
*View* is a part of page. For example, in our website, there are two views about jokes, one is *index* and the other is *show*. View index is a list of View show, a view show is responsible for rendering a joke. Therefore, a view may take some context and them output html code.

Template
--------
*Template* is useful, since it give you the chance for reusing displays. The common parts of html code are lied in templates, as well as others depended on contexts. A good template engine may provide functionalities such as inherit, blocks and filters. There are many template engine for PHP, I choose *Twig* here.

Route
------
*Routing* is essential for website. It will help make your URL a good pattern and protect your files. This demo use an only one entry way. So I forward every request to the index.php, and do routing with *slim* to different controller method.

Usage
------

1. Default Site Root is /ppt  
2. Generate a settings.php from settings.php.default


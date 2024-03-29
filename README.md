# E-Commerce Back-End

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Description

Online retail sotres need a way to manage and track their inventory. That is where this E-Commerce Back-End application can be utalized. The application simulates the entire back-end of an e-comerce store, allower the user to add, delete, and update inventory, and view inventory and their inter-connections between category, product, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Questions](#questions)

## Installation
*Note 'postgres' and 'password' are the default PostgresSQL username and password, if the user has a different username or password, then the 'postgres' and 'password' in step 2 must be adjusted accordingly. Aditionally the user must change the values in index.js lines 36 and 37, respectively.

1. Dowload, copy, or clone the code to your local machine through github and open in vscode, or another approperate IDE. 

2. Right click on 'index.js' and select 'Open In Integrated Terminal', then run the command ```npm install``` to install all required node files. 

3. The user must then launch Postgres by running the command: ```psql -U postgres```, in the terminal then running the command: ```password```. 

4. Continue in the terminal by running the command: ```\i db/schema.sql```, to initialize their database, then run the command: ```\q```, to exit PostresSQL.

5. Once out of Postgres the user can run the command: ```node sees/index.js```, to seed the application with the prebuilt data.

6. Finally the user can run the command: ```node server.js```, to launch the application.

<p align="center">
    <img alt='Gif of installation process' src="">


## Usage

Video demonstating usage:  

Using an application like Insomnia to perform RESTful api requests, the user can perform the follow requests at ```/api/products```, ```/api/categories```, ```/api/tags```, respectively: a GET request to view everything in the selected field, a POST request to 

<p align="center">
    <img alt='Image of prompt and action' src="">

## Credits

Base code provided by UCI Virtual Bootcamp

## License

This application is covered under Unlicense license.

## Features

This application boasts the integration of PostgressSQL databases into JavaScript, through the use of Sequalize. Aditionally this application features express.js to build a local server to perform a variety of POST, GET, PUT and DELETE requests.

## Questions

Any questions please reachout at: samuelfullerca@gmail.com

To view additional applications developed by myself, checkout my GitHub profile: 
<a href="https://github.com/SamuelFullerCA"> SamuelFullerCA </a>
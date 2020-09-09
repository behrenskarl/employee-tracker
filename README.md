
![License](https://img.shields.io/badge/License-The%20Unlicense-yellow)
# Employee Tracker

## Description:

Employee Tracker is an application designed to use NodeJS and MySQL language to create a database for NBA players, roles, and teams with functions to add teams, roles, and players as well as update player information. User uses NodeJS in their console to create a local database in which they can input salary, player name, teams, and player roles and call upon those data tables with inquirer and console.table npm packages to display the info in the console. 

![Video](./Assets/employee-tracker-functionality.gif)

## Table of Contents:
- [installation](#installation)
- [usage](#usage)
- [contribution](#contribution)
- [licenses](#licenses)
- [test](#test)
- [contact](#contact)

## Installation:
Clone the repository into your local directory. Open the terminal(mac)/gitbash(PC) and install the npm packages for inquirer, mysql, console.table, and asciiart-logo. Make sure to input your MySQL password into the 'connection.js' line for "password: '' " between the quotes. Upload the schema.sql file into MySQL Workbench and run it. Once you have established connection to your server and have the npm packages installed open the directory in your terminal/gitbash and run 'node server.js' and follow the prompts!

## Usage:
Used to create, add, and update NBA databases with player information

## Contribution:
If you would like to contribute or have any suggestions please use the contact information below and get in touch!

## Licenses:

    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non - commercial, and by any
    means.

    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain.We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors.We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to < https://unlicense.org>

## Test:
Once you have installed the npm packages and have connection to the server via the 'schema.sql' file and MySQL Workbench, copy and paste the 'seed.sql' file into Workbench and run it. Refresh your tables in Worlbench. Then in your directory, run 'node server.js' and you'll have test code display in console.tables formatting to test the app with.

## Contact:

GitHub: https://github.com/behrenskarl

Email: behrens.karl@gmail.com
    
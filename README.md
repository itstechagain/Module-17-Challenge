Social Network API

Description

This project is a Social Network API built from scratch, allowing users to share their thoughts, react to friends' thoughts, and create a friend list. Using Express.js for routing and MongoDB with Mongoose for data storage, the application enables the creation, update, and deletion of users, thoughts, friends, and reactions.

Table of Contents
Installation
Usage
License
Contributing
Questions
Demo Video Link
Installation
To get started, clone this repository and install the dependencies:

bash
Copy code
Clone this repository to your local machine:
git clone https://github.com/yourusername/social-network-api.git

Navigate to the project directory:
cd social-network-api

Install the required dependencies using npm:
npm install
Usage
To run the application:

Open a terminal and navigate to the project directory.
Start the server using the command: npm start
The server will be initialized, and you can interact with the API through Insomnia or Postman.
The API supports routes for creating, updating, and deleting users, thoughts, friends, and reactions. You can test these routes using GET, POST, PUT, and DELETE methods.
Key API routes:

/api/users: Allows you to GET, POST, PUT, and DELETE users.
/api/thoughts: Allows you to GET, POST, PUT, and DELETE thoughts.
/api/users/:userId/friends/:friendId: Add or remove friends from a user's friend list.
/api/thoughts/:thoughtId/reactions: Create and delete reactions to thoughts.
License
This project is not licensed.

Contributing
Currently, no contributions are required.

Questions
If you have any questions, feel free to reach out.

Github: yourusername

Demo Video Link
A walkthrough video demonstrating the functionality of this Social Network API can be found here. The video shows all acceptance criteria being met, including:

Server startup
Testing GET routes for users and thoughts
Testing POST, PUT, and DELETE routes for users, thoughts, friends, and reactions






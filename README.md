Simple Login Form Project

This is a basic login form project created using Node.js, Express, MongoDB, EJS, HTML, and Bootstrap. It is designed to demonstrate the fundamentals of form handling, server-side rendering, and database integration using Mongoose, without using advanced authentication libraries like Passport.js.

🔧 Technologies Used

Node.js – Backend runtime environment

Express.js – Web application framework

MongoDB – NoSQL database for storing user credentials

Mongoose – ODM (Object Data Modeling) library for MongoDB

EJS – Templating engine for rendering dynamic content

HTML – Markup language for page structure

Bootstrap – CSS framework for styling and responsive layout

🛆 Features

Collects username and password from user via form

Saves user credentials to a MongoDB database

Uses EJS to render dynamic views

Layout and styling done with Bootstrap (instead of custom CSS)

Minimal and clean user interface

Great for beginners learning full-stack web development

📁 Folder Structure

project/
│
├── public/             # Static files (CSS, JS if needed)
├── views/              # EJS templates
│   ├── layouts/
│   └── main.ejs        # Login form view
├── model/
│   └── schema.js       # Mongoose user schema
├── app.js              # Main server file
└── package.json

🚀 How to Run

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Start MongoDB (if not already running):

mongod

Start the app:

node app.js

Visit http://localhost:3000 in your browser.

📝 Notes

This app does not use any authentication logic like hashing or session management.

Ideal for understanding how data flows from a form into a database using Express and Mongoose.

Feel free to enhance it further by adding validations, password hashing, or integrating Passport.js!

The entire code is inside a zip file.

# Spend-Wise (Expense Tracking) Project

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Backend Setup](#backend-setup)
5. [Frontend Setup](#frontend-setup)
6. [Environment Variables](#environment-variables)
7. [Running the Application](#running-the-application)
8. [Dependencies](#dependencies)
9. [License](#license)

## Introduction

Spend-Wise is an expense tracking application designed to help users manage their finances effectively. The application allows users to log expenses, categorize them, and generate reports to understand their spending habits.

## Features

- User authentication and authorization
- Expense logging and categorization
- Report generation for expense analysis
- Integration with Razorpay for payment processing
- Email notifications using Nodemailer

## Technologies Used

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine
- **Express**: A minimal and flexible Node.js web application framework
- **MySQL**: A relational database management system
- **Sequelize**: A promise-based Node.js ORM for MySQL
- **AWS SDK**: Amazon Web Services SDK for JavaScript
- **jsonwebtoken**: For generating and verifying JSON Web Tokens
- **bcrypt**: For hashing passwords
- **Nodemailer**: For sending emails
- **Morgan**: HTTP request logger middleware

### Frontend
- **React**: A JavaScript library for building user interfaces
- **Redux Toolkit**: A toolset for efficient Redux development
- **React Router**: For routing in React applications
- **Tailwind CSS**: A utility-first CSS framework
- **Parcel**: A web application bundler
- **Axios**: For making HTTP requests

## Backend Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/spend-wise-backend.git
    cd spend-wise-backend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the Application**
    ```bash
    npm run dev
    ```

## Frontend Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/spend-wise-frontend.git
    cd spend-wise-frontend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the Application**
    ```bash
    npm start
    ```

## Environment Variables

The application uses the following environment variables for configuration:

- `PORT`: Port number for the backend server
- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `EMAIL_ID`: Email ID for sending notifications
- `EMAIL_PASS`: Email password
- `jwtSecret`: Secret key for JWT
- `RAZORPAY_KEY_ID`: Razorpay key ID
- `RAZORPAY_KEY_SECRET`: Razorpay key secret
- `BUCKET_NAME`: AWS S3 bucket name
- `IAM_USER_KEY`: AWS IAM user key
- `IAM_USER_SECRET`: AWS IAM user secret

## Running the Application

To run the full application (both backend and frontend), follow these steps:

1. Start the backend server as described in the [Backend Setup](#backend-setup) section.
2. Start the frontend server as described in the [Frontend Setup](#frontend-setup) section.

## Dependencies

### Backend Dependencies
- **aws-sdk**: AWS SDK for JavaScript
- **bcrypt**: Library for hashing passwords
- **cors**: Middleware for enabling Cross-Origin Resource Sharing
- **dotenv**: Module for loading environment variables from a `.env` file
- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **jsonwebtoken**: Library to work with JSON Web Tokens
- **morgan**: HTTP request logger middleware for Node.js
- **mysql2**: MySQL client for Node.js
- **nodemailer**: Easy as cake email sending from Node.js
- **razorpay**: Razorpay payment gateway integration
- **sequelize**: Promise-based ORM for Node.js

### Frontend Dependencies
- **@reduxjs/toolkit**: Efficient toolkit for Redux
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes
- **axios**: Promise based HTTP client for the browser and Node.js
- **parcel**: Blazing fast, zero configuration web application bundler
- **postcss-cli**: CLI for PostCSS
- **razorpay**: Razorpay payment gateway integration
- **react**: A JavaScript library for building user interfaces
- **react-dom**: Serves as the entry point to the DOM and server renderers for React
- **react-icons**: Include popular icons in your React projects easily
- **react-redux**: Official React bindings for Redux
- **react-router-dom**: DOM bindings for React Router
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs


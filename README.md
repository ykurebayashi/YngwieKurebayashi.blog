# Personal Blog
This repository contains the source code for my personal blog, built with Next.js/React with Typescript and using Hygraph as CMS. The blog features GraphQL for querying data and RTL for testing. The goal of the blog is to showcase my discoveries, my daily life and, sometimes, tutorials, so I can share my knowledge with others.

# Installation
To run the project locally, you need to have Node.js and npm installed on your machine.

- Clone the repository.
- Install dependencies: ```npm install```.
- Run the development server: ```npm run dev```.
- Open http://localhost:3000 in your browser to view the blog.

# Configuring
You can set your own blog with my template. All you need to do is navigate to the pages where the fetch is made and change the query and the url for your own, also configuring your data on Hygraph.

# Testing
RTL is used for testing. 
To run tests, run ```npm run test```.

# Contributing
Contributions are welcome!
Currently I've been dealing with few issues and a suggestion would be more than welcomed:
- The fetch of both all posts and a single post is running slowly (820ms);
- The tests do not cover the entire application;

# License
Feel free to clone, display or contribute to this repo.

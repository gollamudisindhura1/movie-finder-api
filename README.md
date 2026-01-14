# Movie Finder API - SBA

## Overview

A RESTful backend API built with Node.js, Express, and Axios to fetch movie information from the OMDb  public API.  
This project serves as the core backend for a future movie review website it does not  store any data locally, but provides clean, structured movie search and details endpoints.

## Learning Objectives

- Build a structured Express server following RESTful principles
- Use environment variables securely with `dotenv`
- Handle query parameters and route parameters
- Make asynchronous HTTP requests to an external API with Axios
- Implement proper validation, error handling, and clean responses

## Features
- GET /api/search?title={query} - Search movies by title which returns list of results
- GET /api/movies/:id - Get detailed information for a movie by IMDb ID
- Proper validation for missing title - 400 error
- Secure API key handling with `.env`
- Try/catch error handling with messages

## Tech Stack
- Node.js
- Express.js
- Axios
- dotenv
- OMDb API

## Test URLs

- http://localhost:3001/api/search?title=batman
- http://localhost:3001/api/search?title=spider-man
- http://localhost:3001/api/movies/tt0372784
- http://localhost:3001/api/movies/tt4154756

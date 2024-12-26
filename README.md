# AI Recipe Generator

A React application that generates recipes based on available ingredients using AI. The app leverages the Hugging Face Inference API with the Mixtral-8x7B-Instruct model for intelligent recipe suggestions.

**Due credit:**
This project was inspired by the FreeCodeCamp.org tutorial: [React.js Course - Beginner's Tutorial for React JavaScript Library 2022](https://www.youtube.com/watch?v=x4rFhThSX04)

## Features

- Add ingredients through an interactive form
- View list of available ingredients
- Generate AI-powered recipe suggestions
- Smooth scroll navigation to recipe section
- Markdown rendering of recipe content

## Tech Stack

- React 19 with Vite
- Hugging Face Inference API (@huggingface/inference)
- React Markdown for recipe formatting
- Environment variables for secure API key management

## Key Components

- Main: Manages application state and component coordination
- IngredientsForm: Handles ingredient input
- Ingredients: Displays ingredient list and triggers recipe generation
- RecipeCode: Renders AI-generated recipe with Markdown formatting

## Setup

1. Clone repository
2. Install dependencies: `npm install`
3. Create .env file with Hugging Face API key: `VITE_HF_API_KEY=your_key_here`
4. Start development server: `npm run dev`

## Dependencies

- @huggingface/inference
- react-markdown
- prop-types
- react
- vite

## Development

Built with modern React practices including:

- Functional components
- React Hooks (useState, useRef, useEffect)
- Props validation
- Environment variable security

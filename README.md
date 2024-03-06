# React Contact Form with Tailwind CSS and Axios

## Introduction
This project is a responsive contact form built with React, styled with Tailwind CSS, and uses Axios for managing API requests. It includes client-side validation and integrates with SheetDB API to store form submissions.

## Features
- Responsive design with Tailwind CSS
- Real-time form validation
- Axios for API requests
- Integration with SheetDB API for storing submissions

## How to Run
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## Dependencies
- React
- Axios
- Tailwind CSS

## Contact Form Validation
Validation ensures all fields are filled in correctly:
- Name: Non-empty
- Email: Valid email format
- Phone: 10 digits number
- Message: Non-empty

## API Integration
Form submissions are sent to SheetDB via an Axios POST request.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

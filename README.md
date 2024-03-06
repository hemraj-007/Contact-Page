# React Contact Form with Tailwind CSS and Axios

## Introduction
This project is a responsive contact form built with React, styled with Tailwind CSS, and uses Axios for managing API requests. It includes client-side validation and integrates with SheetDB API to store form submissions.

## Features
- Responsive design with Tailwind CSS
- Real-time form validation
- Axios for API requests
- Integration with SheetDB API for storing submissions

## Project Setup
1. Clone the repository using `git clone <https://github.com/hemraj-007/Contact-Page>`.
2. Install necessary dependencies by running `npm install` in the project root.
3. 3. Start the development server with `npm run dev`

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

## Google Sheets Integration
The form uses Google Sheets for persistence via the SheetDB API. Ensure your Google Sheet is accessible at:
[Google Sheets](https://docs.google.com/spreadsheets/d/1-m7b_EX2MNDE7iVlndH4uUVgK9LP-lNcVvPKYMNov-4/edit#gid=0).

## API Integration
Form submissions are sent to SheetDB via an Axios POST request.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

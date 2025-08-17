📘 Project Overview

This project contains two reusable React components built with React, TypeScript, TailwindCSS, and Storybook.
The components are:

InputField – a flexible and accessible input component with validation states, variants, sizes, and optional features like clear button & password toggle.

DataTable – a data table with sorting, row selection, loading, and empty states.

🛠️ Tech Stack

React + TypeScript

Storybook (component documentation)

📂 Folder Structure

<img width="751" height="759" alt="image" src="https://github.com/user-attachments/assets/7ff1cca5-b80c-4f36-b57f-349ed418191b" />


🚀 Setup & Run Locally
# Clone repository
git clone https://github.com/your-username/project-name.git
cd project-name

# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm run test

🎯 Features
✅ InputField

Label, placeholder, helper text, error message

States: disabled, invalid, loading

Variants: filled, outlined, ghost

Sizes: sm, md, lg

Optional: clear button, password toggle

Optional: dark/light theme support

Accessible with ARIA labels

✅ DataTable

Display tabular data with configurable columns

Column sorting (sortable flag)

Row selection (single/multiple)

Loading & empty states

Approach 

I first went through the requirements and created TypeScript types to make the components safe and predictable.

I organized the project by keeping each component in its own folder for better structure and scalability.

I built the InputField with flexible props to support different sizes, styles, and states (disabled, error, loading).

I added extra features like a clear button and password toggle to improve user experience.

I made sure the components are accessible by using proper HTML tags .

I developed the DataTable to support configurable columns, sorting, row selection, and loading/empty states.

I styled everything with TailwindCSS for a clean look, responsive design, and light/dark theme support.

I documented all states and variations in Storybook so they’re easy to view and test.

I wrote some basic tests with Jest and React Testing Library to check functionality and interactions.

Finally, I deployed Storybook on Vercel and added setup instructions in the README for easy usage.

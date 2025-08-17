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
(https://github.com/ponnapallimahesh7/Uzence-Design-Studio-Project.git)
cd Uzence-Design-Studio-Project

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

<h1>Approach I have Used:</h1> 

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


<h1>Output Screenshots:</h1>
##InputField:-
-- Default state --
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a9d72f13-548a-4b28-9438-ecd05e8499f7" />

-- Error state and invalid=True --
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/93da0efd-f71d-43a4-ac25-ddf65b95471c" />

-- Disabled state --
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/16cdd821-f545-454b-a4b1-db300cb56d1f" />

-- clear Button --
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c53ca092-60ef-4212-8cde-8f6177ac504c" />

-- input type = password --
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/64928857-6e42-4631-b4c4-42c3a04f43c9" />


##DataField
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a0616193-8bd8-4d06-83e4-a2a875448719" />

You can see more outputs in the project where i have given live link below. please visit

<h1>🔗 Live Links</h1> 

GitHub Repo: https://github.com/ponnapallimahesh7/Uzence-Design-Studio-Project

Storybook Preview: https://uzence-design-studio-project-vpo3.vercel.app/









📘 Project Overview

This project contains two reusable React components built with React, TypeScript, TailwindCSS, and Storybook.
The components are:

InputField – a flexible and accessible input component with validation states, variants, sizes, and optional features like clear button & password toggle.

DataTable – a data table with sorting, row selection, loading, and empty states.

🛠️ Tech Stack

React + TypeScript

TailwindCSS (styling)

Storybook (component documentation)

Jest/React Testing Library (basic tests)

📂 Folder Structure
📦 project-root
├── src
│   ├── components
│   │   ├── InputField
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.stories.tsx
│   │   │   ├── InputField.test.tsx
│   │   │   └── index.ts
│   │   ├── DataTable
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.stories.tsx
│   │   │   ├── DataTable.test.tsx
│   │   │   └── index.ts
│   └── utils (optional helpers)
├── .storybook
├── package.json
├── README.md
└── tsconfig.json

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

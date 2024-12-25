# Challenge 1: The Perfect Setup

This project is a starter file for React-based projects. The goal of this project is to provide a standard structure with all the conventions, documentation, and tools required for a successful React project. Here we made a basic **To do app** as example code.

---

## Up & Running

Follow these steps to set up and run the project locally:

1. **Navigate to the project directory:**

   ```bash
   cd Dev5
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the project:**

   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to the local development server URL displayed in the terminal, typically `http://localhost:5173/`.

---

## Features

- **Modern React Setup**: A clean starter with React and Vite.
- **Reusable Components**: Modular design with reusable components.
- **Global State Management**: Integrated React Context for managing application-wide state.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Task Prioritization**: Easily prioritize tasks as 'High' or 'Low'.
- **Custom Hooks**: Built-in hooks for enhanced reusability.
- **Responsive Design**: Fully responsive with mobile-first principles.
- **Deployment Ready**: Easily deploy to platforms like Netlify or Vercel.

---

## Project Structure

### File and Folder Organization

- **/src**: Contains all the source code of the application.
  - **/assets/**: Static files (images, fonts, etc.).
  - **/components/**: Reusable components.
    - **/layout/**: Layout-related components (e.g., Header, Footer).
    - **/tasks/**: Task-specific components (e.g., TaskItem, TaskList).
  - **/pages/**: Page components (e.g., TodoPage).
  - **/hooks/**: Custom hooks for shared logic (e.g., `useTaskFilter`).
  - **/context/**: React Context for managing global state (e.g., TaskContext).
  - **/styles/**: Tailwind and additional CSS files.
  - **/utils/**: Utility functions for shared logic.

**Example Folder Structure:**

```bash
src/
├── assets/            # Images, fonts, and other static files
├── components/        # Reusable components
│   ├── layout/        # Layout-related components (e.g., Header, Footer)
│   └── tasks/         # Task-specific components (e.g., TaskItem, TaskList)
├── context/           # React Context (e.g., TaskContext)
├── pages/             # Page components (e.g., TodoPage)
├── hooks/             # Custom hooks (e.g., useTaskFilter)
├── utils/             # Utility functions (e.g., calculateTaskStats)
├── styles/            # Tailwind CSS and global styles
│   ├── App.css
│   └── index.css
├── App.jsx            # Main app component
└── main.jsx           # Entry point of the application
```

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd Dev5
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit the local development server in your browser (e.g., `http://localhost:5173/`).

---

## Deployment

To deploy the application, follow these steps:

1. **Build the production files:**

   ```bash
   npm run build
   ```

2. **Deploy to a hosting platform:**
   - Use platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
   - Upload the `/dist` folder generated during the build process.

3. **Provide the deployment link:**
   Update the README with the deployment link for easy access.

---

## Contribution Guidelines

We welcome contributions! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "feat: describe your feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request.

---

## Sources/referrals

## Licensing

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Deployment Link

> Add your deployment link here once the project is live (e.g., `https://your-app-name.netlify.app`).


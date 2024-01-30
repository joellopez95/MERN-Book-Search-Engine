# MERN-Book-Search-Engine

## Description

The MERN Book Search Engine is a full-stack web application that allows users to search for books, save their favorite selections, and manage their personal reading lists. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, this project integrates a GraphQL API for efficient and flexible data retrieval.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact Info](#contact-info)

## Installation


1. **Clone the repository to your local machine:**

    ```bash
    git clone https://github.com/joellopez95/MERN-Book-Search-Engine.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd MERN-Book-Search-Engine
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run dev:start**

    ```bas
    npm run dev:start
    ```

5. **Start the application:**

    ```bash
    npm run start
    ```
## Technologies Used

- React
- React Router
- Bootstrap 
- Mongoose
- Express
- GraphQL
- Apollo Client/Server

## Features

1. **User Authentication:**
   - Users can create accounts, log in, and log out securely.
   - Authentication is implemented using JSON Web Tokens (JWT) for secure and token-based user sessions.

2. **Book Search and Save:**
   - Utilizes the Google Books API to enable users to search for books based on various criteria, including title, author, and keywords.
   - Allows users to save their favorite books to their personal reading list.

3. **GraphQL API:**
   - Implements a GraphQL API that efficiently fetches and delivers data between the client and server.
   - Defines GraphQL types and queries for user authentication, book searches, and user-specific operations.

4. **Apollo Client:**
   - Integrates Apollo Client on the front end to manage state, execute GraphQL queries, and handle caching for optimized performance.

5. **Responsive User Interface:**
   - Provides a clean and user-friendly interface developed using React.js.
   - Responsive design ensures a seamless user experience on various devices.

6. **State Management:**
   - Manages global state using React Context API and local state where appropriate.
   - Implements stateful logic for user authentication, book searches, and user-specific data.

7. **Database Integration:**
   - Stores user data, including saved books, in a MongoDB database using Mongoose for data modeling and interaction.

8. **Book Removal:**
   - Allows users to remove books from their saved list, updating the database accordingly.

9. **Form Validation:**
   - Implements form validation to ensure that users provide required information during account creation and book searches.

10. **Error Handling:**
    - Implements robust error handling on both the client and server sides to provide meaningful feedback to users.

The MERN Book Search Engine is a comprehensive and feature-rich application that showcases the integration of various technologies for a smooth and efficient book search and management experience.

## Usage

To use the MERN Book Search Engine, follow the steps below:

### Prerequisites

1. **Node.js:**
   - Ensure Node.js is installed on your machine. You can download it [here](https://nodejs.org/).

2. **MongoDB Atlas Account:**
   - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and set up a cluster to store your data.

### Running the Application

1. **Start the Server:**
   ```bash
   npm start
   ```

   This will launch the server using `nodemon`, which automatically restarts the server upon file changes.

2. **Open the Application:**
   - Visit `http://localhost:3000` in your web browser to access the MERN Book Search Engine.

### GraphQL Playground

1. **Access GraphQL Playground:**
   - While the server is running, you can access the GraphQL Playground by visiting `http://localhost:3001/graphql`.

2. **Test Queries and Mutations:**
   - Interact with the GraphQL Playground to test queries and mutations. Example queries can be found in the `./server/schemas/resolvers.js` file.

### User Authentication

1. **Sign Up:**
   - Create a new account by filling out the sign-up form.

2. **Log In:**
   - Log in with your credentials to access personalized features.

### Search and Save Books

1. **Search for Books:**
   - Use the search bar to find books using the Google Books API.

2. **Save Books:**
   - Log in and save your favorite books to your profile.

3. **View and Remove Saved Books:**
   - Navigate to the "Saved Books" page to view and remove books you've saved.

---

Adjust the instructions based on your specific project structure, environment variables, and any additional features or configurations.

## Contributing

A special thanks to the following resources that contributed to the development of this project:

- [W3-Schools](https://www.w3schools.com/)
- [Mozilla Developer](https://developer.mozilla.org/)
- [Jeremy Henry (Bootcamp Instructor)](https://exampleinstructor.com/)

Feel free to contribute to this project by forking and submitting a pull request.

## Tests

N/A

## License

This project is licensed under the [MIT License](LICENSE).
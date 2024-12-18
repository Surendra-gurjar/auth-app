# auth-app 
Authentication, Authorization, and RBAC API with Node.js and Express :-


This project implements Authentication, Authorization, and Role-Based Access Control (RBAC) using Node.js, Express, and JWT (JSON Web Tokens). It supports different roles such as Admin and User, with restricted access to routes based on their roles.


Features:-
1. Authentication: Users can log in and receive a token for secure access.
2. Authorization: Access control based on user roles.
3. RBAC (Role-Based Access Control): Permissions are assigned to users based on their roles.
4. Token-Based Security: Uses JWT for stateless authentication.
5. Middleware for Protection: Middleware ensures that only authorized users can access certain routes.



Technologies Used:-
1. Node.js: Backend JavaScript runtime.
2. Express.js: Framework for creating web applications.
3. jsonwebtoken: For creating and verifying JWT tokens.
4. dotenv: For managing environment variables.
5. nodemon: For automatic server restarts during development.



Middleware Usage:-
1. Authentication Middleware: Validates JWT tokens and ensures the user is authenticated.
2. Authorization Middleware: Checks if the user has the appropriate role to access the route.



Testing:-
You can test the API using tools like:

Postman

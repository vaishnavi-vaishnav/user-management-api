# User Management API

The **User Management API** is a RESTful API designed to manage user data efficiently. It provides endpoints for creating, retrieving, updating, and deleting users. Each user has an ID, name, email, and age.

## 🚀 Features

- **User Creation**: Add new users.
- **Retrieve Users**: Get a list of all users or a single user by ID.
- **Update Users**: Modify existing user information.
- **Delete Users**: Remove users from the system.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## 📘 API Documentation
**Localhost**: http://localhost:5000/api/users

#### **1. Create a User**

- **URL:** `/users`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```
- **Responses:**
    - **201 Created:** `{ "message": "User registered successfully" }`

#### **2. Get All Users**

- **URL:** `/api/users`
- **Method:** `GET`
- **Responses:**
    - **200 OK:** `[ { "id": "1", "name": "John Doe", "email": "john@example.com", "age": 30 }, ... ]`


#### **2. Get Users by Id**

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Responses:**
    - **200 OK:** `{ "id": "1", "name": "John Doe", "email": "john@example.com", "age": 30 `
    - **404 Not Found:** `{ "error": "User not found" }` 


#### **3. Update a User**
- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
    {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 25
    }
  ```
- **Responses:**
    - **200 OK:** `{ "id": "1", "name": "Jane Doe", "email": "jane@example.com", "age": 25 } `
    - **404 Not Found:** `{ "error": "User not found" }`        

#### **4. Delete a User**
- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Responses:**
    - **204 No Content**


# 🛡️ Security and Best Practices

- **Validation**: Ensure user data is validated to prevent errors and security issues.
- **Error Handling**: Provide meaningful error responses for different scenarios.

# 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the project**

2. **Create your feature branch:**

   ```bash
   git checkout -b feature/AmazingFeature
    ```
3. **Commit your changes:**
    ```bash
   git commit -m 'Add some AmazingFeature'
    ```
4. **Push to the branch:**
    ```bash
   git push origin feature/AmazingFeature
    ```    
5. **Open a pull request**    

## 🛠️ Future Enhancements

- Add support for user roles and permissions.
- Implement search and filter functionalities for user retrieval.
- Integrate with front-end frameworks for a complete application.

## 💬 Contact

For any inquiries or feedback:

- **Author**: Vaishnavi Vaishnav
- **GitHub**: [vaishnavi-vaishnav](https://github.com/vaishnavi-vaishnav)
- **Email**: vaishnavivaishnav0000@gmail.com

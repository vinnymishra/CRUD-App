# CRUD User Management Application

A responsive CRUD (Create, Read, Update and Delete) User Management Application built using React.js. The application allows users to add, display, edit and delete user information using a REST API provided by MockAPI.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Live Demo

https://crud-365x9fiqr-vinnymishras-projects.vercel.app/read

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 📂 GitHub Repository

https://github.com/vinnymishra/CRUD-App

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 📌 Features

✔ Create a new user

✔ View all users

✔ Update existing user details

✔ Delete user

✔ React Router Navigation

✔ Responsive Bootstrap UI

✔ REST API Integration using Axios

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🛠 Technologies Used

- React.js
- React Router DOM
- Axios
- Bootstrap 5
- MockAPI
- JavaScript
- HTML5
- CSS3

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 📁 Project Structure

```
src
│
├── App.js
├── Create.js
├── Read.js
├── Update.js
├── index.js
├── App.css
└── index.css
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/crud-user-management-app.git
```

Move into project folder

```bash
cd crud-user-management-app
```

Install dependencies

```bash
npm install
```

Start the project

```bash
npm start
```

The application will run at

```
http://localhost:3000
```

---

# 🌐 API Used

MockAPI

```
https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube
```

---

# CRUD Operations

## 1️⃣ Create User

The Create page allows the user to enter

- Name
- Email Address
- Phone Number

After clicking Submit

- Data is sent to MockAPI
- User is redirected to Read Page




## 2️⃣ Read User

Displays all users stored in MockAPI inside a Bootstrap Table.

Columns

- ID
- Name
- Email
- Phone Number

Operations

- Edit
- Delete




## 3️⃣ Update User

Allows editing

- Name
- Email
- Phone Number

After clicking Update

- Data is updated in MockAPI
- User is redirected to Read Page




## 4️⃣ Delete User

Deletes the selected user from MockAPI.

The table refreshes automatically after deletion.




# Code Explanation

## App.js

This file handles routing.

Routes used

```
/
/create
/read
/update/:id
```

React Router DOM is used for page navigation.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## index.js

This is the entry point of the application.

Responsibilities

- Renders App component
- Imports Bootstrap
- Mounts React application

```
ReactDOM.createRoot()
```

---

## Create.js

Purpose

Create a new user.

Important Concepts

### useState()

Stores

- Name
- Email
- Phone Number

```
const [name, setName] = useState("");
```

### handleSubmit()

Runs when user clicks Submit.

Responsibilities

- Prevent page refresh
- Sends POST request
- Redirects to Read page

```
axios.post(...)
```

---

## Read.js

Purpose

Display all users.

### useEffect()

Automatically loads data when page opens.

```
useEffect(() => {
   getData();
}, []);
```

### getData()

Fetches all users.

```
axios.get(...)
```

### handleDelete()

Deletes selected user.

```
axios.delete(...)
```

After successful deletion

```
getData();
```

is called again to refresh the table.

---

## Update.js

Purpose

Update user information.

### useParams()

Gets the selected user's ID from URL.

Example

```
/update/3
```

ID becomes

```
3
```

### useEffect()

Loads selected user's data.

```
axios.get(...)
```

### handleSubmit()

Updates data.

```
axios.put(...)
```

Redirects back to Read page.

---

# React Hooks Used

## useState()

Stores

- Name
- Email
- Phone Number
- API Data

---

## useEffect()

Runs automatically when component loads.

Used for

- Fetching API Data

---

## useNavigate()

Used for navigation.

Example

```
navigate("/read");
```

---

## useParams()

Reads URL parameter.

Example

```
/update/5
```

Returns

```
id = 5
```

---

# Axios Methods Used

GET

```
axios.get()
```

Fetch data.

POST

```
axios.post()
```

Create new user.

PUT

```
axios.put()
```

Update user.

DELETE

```
axios.delete()
```

Delete user.

---

# Bootstrap Components Used

- Container
- Form
- Buttons
- Table
- Flex Utilities
- Margin Utilities

---

# Future Improvements

- Search Users
- Pagination
- Form Validation
- Toast Notifications
- Dark Mode
- User Authentication
- Loading Spinner

---

# Learning Outcomes

Through this project I learned

- React Fundamentals
- React Hooks
- React Router
- CRUD Operations
- Axios
- REST APIs
- Component Based Architecture
- Bootstrap
- State Management

---

# Author

Vinayak Mishra

B.Tech (Artificial Intelligence & Data Science)

2025 Graduate

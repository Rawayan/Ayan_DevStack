# Dev Stack

Dev Stack is a responsive React web application where users can explore different development technologies and build their own personalized technology stack.

The project displays technology information from a local JSON file and allows users to add and remove technologies from their stack.



## Live Site
https://rawayan-devstack.netlify.app/




## Features

- Browse development technologies with category, difficulty, rating, description, and icons.
- Loading state while technology data is fetched from the local JSON file.
- Toast notifications for adding, removing, duplicate actions, and removing all technologies.

## Technologies Used

- React
- JavaScript ES6+
- Vite
- CSS
- React-Toastify
- JSON

## Project Structure

src/
├── assets/
├── components/
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Technologies.jsx
│   ├── Technologies.css
│   ├── TechnologyCard.jsx
│   ├── TechnologyCard.css
│   ├── YourStack.jsx
│   └── YourStack.css
├── index.css
├── App.jsx
└── main.jsx

public/
└── data/
    └── technologies.json


## Question Answare-

1.What is JSX, and why is it used in React?
- JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript.

2.What is the difference between props and state?
- Props are data passed from a parent component to a child component and State is data managed inside a component that can change over time.

3.What is the useState hook and where do you use it?
- useState is a React Hook used to store and update data inside a functional component.

4.What is the useEffect hook and why do we use it for JSON data?
- useEffect is a React Hook used for performing side effects in a component.

5.Why do we need a unique key when using map()?
- The key helps React identify which items have changed, been added, or removed.

6.What is conditional rendering? Give an example from this project.
- Conditional rendering means displaying different UI depending on a condition.
example: 
the loading message is displayed only while the JSON data is being loaded:
{loading && (
  <div>
    <p>Loading technologies...</p>
  </div>
)}

7.How can you pass data from a parent component to a child component? How can a child send data back to its parent?
- A parent component can pass data to a child component using props and A child can send information back to the parent by calling a callback function.


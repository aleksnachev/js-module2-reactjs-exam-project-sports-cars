# Sports Cars Showroom – React.js SPA
This is a JS React project, created by Alexandar Nachev.  
It is a Single Page Application for managing and showcasing sports cars. Users can browse all cars, view details, and—if authenticated—create, edit, and delete their own listings.  
The project demonstrates core React concepts such as client-side routing, authentication, CRUD operations, and component-based architecture.

---

## Features

### Public Area
- Home Page
- Catalog of all sports cars
- Car Details (read-only for guests)
- Login Page
- Register Page

### Private Area (Authenticated Users)
- Add new car listing
- Edit owned car listings
- Delete owned car listings
- Comments system (bonus)

---

## Pages & Routes
- `/` – Home
- `/catalog` – Catalog of all cars
- `/details/:id` – Car details page
- `/add` – Add new car
- `/edit/:id` – Edit car page
- `/login` – Login
- `/register` – Register

Includes full route guarding:
- Guests cannot access private pages.
- Logged-in users cannot access login/register pages.

---

## Technologies Used
- React.js
- React Router
- Context API (authentication state)
- REST API communication (Firebase, Kinvey, or custom backend)
- External CSS styling

---

## React Concepts Demonstrated
- React Hooks (useState, useEffect, useContext)
- Stateless and stateful components
- Controlled forms and synthetic events
- Component lifecycle behavior through effects
- Reusable components
- Error handling and form validation
- Client-side routing with parameters

---

## Bonus Features
- Comments on car pages
- Deployment (Firebase / Netlify)
- External API integrations (optional)

---

## Author
**Alexandar Nachev**  
React.js Final Exam Project – SoftUni

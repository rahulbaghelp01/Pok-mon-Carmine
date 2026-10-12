# Pokémon Carmine

A full-stack Pokémon-inspired web game where players can create an account, pick a starter, catch new Pokémon, build a collection, and manage their profile.

[Live Demo](https://pok-mon-carmine.vercel.app/) · [Report a Bug](https://github.com/rahulbaghelp01/Pok-mon-Carmine/issues)

---

## About the Project

Pokémon Carmine is a full-stack web app inspired by the Pokémon universe. Players create an account, choose a starter Pokémon, and catch new ones through an interactive card-based system as they build out their collection.

I built this mainly to push past the usual CRUD-app territory and get some real practice with interactive, game-like experiences on the web — things like 3D models, animation, authentication, and relational database design, all working together in one project.

---

## Features

- User authentication with JWT
- Password hashing with bcrypt
- Starter Pokémon selection
- Interactive Pokémon-catching gameplay
- Animated Pokémon cards
- Personal Pokémon collection
- User profile management
- Pokémon deck management
- Global state management with Redux
- Responsive UI built with Tailwind CSS
- Animations powered by GSAP
- Interactive 3D Pokéball using React Three Fiber and Three.js
- PostgreSQL database with Prisma ORM

---

## Gameplay Flow

```text
Create Account
      ↓
Choose Your Starter Pokémon
      ↓
Enter the Game
      ↓
Catch Pokémon
      ↓
Build Your Collection
      ↓
Manage Your Pokémon Deck
```

---

## Tech Stack

**Frontend**
- React
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS
- GSAP

**3D & Animation**
- Three.js
- React Three Fiber
- React Three Drei

**Backend**
- Node.js
- Express.js
- JWT Authentication
- bcrypt

**Database**
- PostgreSQL
- Prisma ORM

**Tooling**
- Docker / Docker Compose
- ESLint
- Git & GitHub
- Vercel

---

## Project Structure

```text
Pok-mon-Carmine
│
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── prisma
│   │   └── schema.prisma
│   │
│   ├── src
│   ├── docker-compose.yml
│   ├── package.json
│   └── prisma.config.ts
│
└── .gitignore
```

---

## Authentication

Auth is handled with JWTs. The flow looks like this:

1. User registers
2. Password is hashed with bcrypt
3. A JWT is issued on successful login
4. Protected routes validate the token
5. Sessions persist on the client

---

## Database Design

The app uses PostgreSQL with Prisma ORM. There are relationships between Users, Pokémon, and the Pokémon a user owns — a user can own many Pokémon, and ownership is tracked through a join table.

```text
User
 │
 │
 └──── UserPokemon ──── Pokemon
```

---

## Interactive Experience

Rather than build a static interface, I wanted this to feel more like a game to actually play. That meant working in:

- Interactive card animations
- Pokémon card selection
- GSAP-driven transitions
- A 3D Pokéball, rendered with React Three Fiber
- Camera movement and dynamic lighting
- Distinct interactive game states

React Three Fiber made it possible to drop real Three.js scenes straight into the React component tree, which made this part of the project a lot more approachable than I expected going in.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL
- Docker (optional)

### Clone the repo

```bash
git clone https://github.com/rahulbaghelp01/Pok-mon-Carmine.git
cd Pok-mon-Carmine
```

---

### Run the Frontend

```bash
cd client
npm install
npm run dev
```

---

### Run the Backend

```bash
cd server
npm install
```

Set up your environment variables:

```env
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_secret_key"
PORT=5000
```

Run the migrations and start the server:

```bash
npx prisma migrate dev
npm run dev
```

---

## Database with Docker

If you'd rather not install PostgreSQL locally, there's a Docker setup included:

```bash
docker compose up -d
```

Once the container is running, point your connection string at it and run the Prisma migrations as usual.

---

## What I Learned

This project touched a lot more of the stack than anything I'd built before, and most of the learning came from getting these pieces to actually work together rather than any one of them in isolation:

- Structuring a full-stack app from scratch
- JWT-based authentication
- Modeling relationships with Prisma
- Working with PostgreSQL day-to-day
- Global state management with Redux
- Getting comfortable with React Three Fiber and Three.js
- Bringing 3D models into a React app
- Building animation timelines with GSAP
- Managing state across an interactive game loop
- Debugging issues that span the API, database, and frontend all at once
- Deploying a production frontend

---

## Future Improvements

Things I'd like to add down the line:

- Pokémon battles
- An experience and leveling system
- Better deck-building mechanics
- Trading between players
- Multiplayer
- Achievements and rewards
- Leaderboards
- Sound effects and music
- More Pokémon regions

---

## Screenshots
 



https://github.com/user-attachments/assets/4f4e3d12-42a8-4232-86e5-370a72b6ffc4



---

## Live Demo


---

## Author

**Rahul Baghel**
GitHub: [@rahulbaghelp01](https://github.com/rahulbaghelp01)

---

If you find this project interesting, a star on the repo is always appreciated.

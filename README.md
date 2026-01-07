# 🛒 Cartzen

A modern full-stack e-commerce platform built with React, Express.js, and PostgreSQL. Cartzen allows users to create, browse, and interact with products through a beautiful and intuitive interface.

## ✨ Features

- 🔐 **Authentication** - Secure user authentication powered by Clerk
- 📦 **Product Management** - Create, view, edit, and manage products
- 💬 **Comments System** - Interactive commenting system for products
- 👤 **User Profiles** - Personalized user profiles with product listings
- 🎨 **Modern UI** - Beautiful, responsive design with TailwindCSS and DaisyUI
- 🌓 **Theme Support** - Dark/light theme switching
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast development and production builds
- 🔄 **Real-time Updates** - React Query for efficient data fetching and caching

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for TailwindCSS
- **React Router** - Client-side routing
- **TanStack Query** - Powerful data synchronization for React
- **Axios** - HTTP client
- **Clerk React** - Authentication SDK
- **Lucide React** - Beautiful icon library

### Backend
- **Express.js 5** - Fast, unopinionated web framework
- **TypeScript** - Type-safe server-side code
- **PostgreSQL** - Robust relational database
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **Clerk Express** - Authentication middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
cartzen/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and API clients
│   │   └── types.ts        # TypeScript type definitions
│   ├── public/             # Static assets
│   └── dist/               # Production build output
│
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── db/             # Database schema and queries
│   │   ├── routes/         # API route definitions
│   │   └── index.ts        # Application entry point
│   └── types/              # TypeScript type definitions
│
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** (v12 or higher)
- **npm** or **yarn** or **bun**
- **Clerk Account** - For authentication (sign up at [clerk.com](https://clerk.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cartzen
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=3000
   DATABASE_URL=postgresql://username:password@localhost:5432/cartzen
   NODE_ENV=development
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

   Create a `.env` file in the `client` directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_API_URL=http://localhost:3000
   ```

5. **Set up the database**
   ```bash
   cd server
   npm run db:push
   ```

## 🏃 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

### Production Mode

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Build the backend**
   ```bash
   cd server
   npm run build
   ```

3. **Start the production server**
   ```bash
   cd server
   npm start
   ```
   The application will be served from the Express server.

## 📡 API Endpoints

### Health Check
- `GET /api/health` - API health check and endpoint information

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product (authenticated)
- `PUT /api/products/:id` - Update product (authenticated)
- `DELETE /api/products/:id` - Delete product (authenticated)

### Comments
- `GET /api/comments` - Get all comments
- `GET /api/comments/product/:productId` - Get comments for a product
- `POST /api/comments` - Create a new comment (authenticated)
- `PUT /api/comments/:id` - Update comment (authenticated)
- `DELETE /api/comments/:id` - Delete comment (authenticated)

## 🔧 Available Scripts

### Server Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes

### Client Scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🗄️ Database Schema

### Users
- `id` (text, primary key) - User ID from Clerk
- `email` (text, unique) - User email
- `name` (text) - User name
- `image_url` (text) - Profile image URL
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Products
- `id` (uuid, primary key) - Product ID
- `title` (text) - Product title
- `description` (text) - Product description
- `image_url` (text) - Product image URL
- `user_id` (text, foreign key) - Owner user ID
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Comments
- `id` (uuid, primary key) - Comment ID
- `content` (text) - Comment content
- `user_id` (text, foreign key) - Commenter user ID
- `product_id` (uuid, foreign key) - Product ID
- `created_at` (timestamp)

## 🔒 Authentication

Cartzen uses [Clerk](https://clerk.com) for authentication. To set up:

1. Create a Clerk account
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your environment variables
5. Configure allowed redirect URLs in Clerk dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by the Cartzen team

---

**Note**: Make sure to set up your PostgreSQL database and Clerk authentication before running the application. For production deployments, ensure all environment variables are properly configured and secure.

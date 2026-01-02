# Cartzen

A full-stack product sharing platform where users can create, discover, and interact with products. Built with modern web technologies and featuring authentication, real-time comments, and a beautiful UI.

## 🚀 Features

- **User Authentication** - Secure authentication powered by Clerk
- **Product Management** - Create, edit, and delete your products
- **Product Discovery** - Browse all products from the community
- **Comments System** - Engage with products through comments
- **User Profiles** - View and manage your own products
- **Responsive Design** - Beautiful UI built with TailwindCSS and DaisyUI
- **Real-time Updates** - Powered by React Query for seamless data synchronization

## 🛠️ Tech Stack

### Backend
- **Runtime**: Bun
- **Framework**: Express.js 5
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Clerk Express
- **Language**: TypeScript

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS 4 + DaisyUI
- **State Management**: TanStack React Query
- **Routing**: React Router 7
- **Authentication**: Clerk React
- **HTTP Client**: Axios
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh) (latest version)
- [Node.js](https://nodejs.org/) (v20.0.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (running instance)
- [Clerk Account](https://clerk.com) (for authentication)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amankumar89/Cartzen.git
   cd cartzen
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   bun install
   
   # Install server dependencies
   bun install --prefix server
   
   # Install client dependencies
   bun install --prefix client
   ```

## ⚙️ Environment Variables

### Server Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/cartzen

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Client Environment Variables

Create a `.env` file in the `client/` directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API Base URL
VITE_API_BASE_URL=http://localhost:3000/api
```

## 🗄️ Database Setup

1. **Create a PostgreSQL database**
   ```sql
   CREATE DATABASE cartzen;
   ```

2. **Push the database schema**
   ```bash
   cd server
   bun run db:push
   ```

This will create the following tables:
- `users` - User information synced from Clerk
- `products` - Product listings
- `comments` - Comments on products

## 🚀 Running the Project

### Development Mode

**Terminal 1 - Start the server:**
```bash
cd server
bun run dev
```

The server will start on `http://localhost:3000`

**Terminal 2 - Start the client:**
```bash
cd client
bun run dev
```

The client will start on `http://localhost:5173`

### Production Build

**Build both server and client:**
```bash
bun run build
```

**Start the production server:**
```bash
bun run start
```

## 📁 Project Structure

```
cartzen/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # API and utilities
│   │   ├── pages/         # Page components
│   │   └── types.ts       # TypeScript types
│   ├── public/            # Static assets
│   └── package.json
│
├── server/                 # Express backend application
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Route controllers
│   │   ├── db/            # Database schema and queries
│   │   ├── routes/        # API routes
│   │   └── index.ts       # Server entry point
│   ├── drizzle.config.ts # Drizzle ORM configuration
│   └── package.json
│
└── package.json           # Root package.json
```

## 🔌 API Endpoints

### Users
- `POST /api/users/sync` - Sync Clerk user to database (Protected)

### Products
- `GET /api/products` - Get all products (Public)
- `GET /api/products/my` - Get current user's products (Protected)
- `GET /api/products/:id` - Get product by ID (Public)
- `POST /api/products` - Create a new product (Protected)
- `PUT /api/products/:id` - Update a product (Protected)
- `DELETE /api/products/:id` - Delete a product (Protected)

### Comments
- `POST /api/comments/:productId` - Create a comment (Protected)
- `DELETE /api/comments/:commentId` - Delete a comment (Protected)

## 🎨 Features in Detail

### Authentication
- Users authenticate through Clerk
- User data is automatically synced to the database
- Protected routes require authentication
- JWT tokens are automatically attached to API requests

### Product Management
- Create products with title, description, and image URL
- Edit your own products
- Delete your own products
- View all products in a grid layout
- View individual product details with comments

### Comments
- Add comments to any product
- Delete your own comments
- View all comments with user information
- Real-time comment updates

## 🧪 Development

### Server Scripts
```bash
cd server
bun run dev      # Start development server with hot reload
bun run db:push  # Push database schema changes
```

### Client Scripts
```bash
cd client
bun run dev      # Start development server
bun run build    # Build for production
bun run lint     # Run ESLint
bun run preview  # Preview production build
```

## 📝 Database Schema

### Users
- `id` (text, primary key) - Clerk user ID
- `email` (text, unique, not null)
- `name` (text)
- `imageUrl` (text)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### Products
- `id` (uuid, primary key)
- `title` (text, not null)
- `description` (text, not null)
- `imageUrl` (text, not null)
- `userId` (text, foreign key to users)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### Comments
- `id` (uuid, primary key)
- `content` (text, not null)
- `userId` (text, foreign key to users)
- `productId` (uuid, foreign key to products)
- `createdAt` (timestamp)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🐛 Issues

If you encounter any issues, please [open an issue](https://github.com/amankumar89/Cartzen/issues) on GitHub.

## 👤 Author

**Aman Kumar**

- GitHub: [@amankumar89](https://github.com/amankumar89)
- Repository: [Cartzen](https://github.com/amankumar89/Cartzen)

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for authentication
- [Drizzle ORM](https://orm.drizzle.team) for database management
- [DaisyUI](https://daisyui.com) for beautiful UI components
- [TanStack Query](https://tanstack.com/query) for data fetching

---

Made with ❤️ using Bun, React, and Express


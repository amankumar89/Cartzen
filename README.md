<div align="center">

# 🛒 CartZen

**A modern, full-stack product showcase platform built with cutting-edge technologies**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

---

## 📖 About

**CartZen** is a modern, full-stack e-commerce platform that enables creators and businesses to showcase their products in a beautiful, interactive environment. Built with the latest web technologies, CartZen provides a seamless experience for product discovery, social interaction, and content management.

### Why CartZen?

- 🚀 **Lightning Fast** - Built with Vite and optimized React 19 for instant page loads
- 🔒 **Secure by Default** - Enterprise-grade authentication with Clerk
- 🎨 **Beautiful UI** - Modern design system with TailwindCSS and DaisyUI
- 📱 **Fully Responsive** - Perfect experience on all devices
- ⚡ **Real-time Updates** - TanStack Query for efficient data synchronization
- 🛡️ **Type Safe** - End-to-end TypeScript for fewer bugs

---

## ✨ Features

### 🔐 Authentication & Security
- **Clerk Integration** - Seamless authentication with social logins
- **Automatic User Sync** - Users are automatically synced to the database
- **Protected Routes** - Secure API endpoints with ownership verification
- **Session Management** - Secure session handling out of the box

### 📦 Product Management
- **CRUD Operations** - Create, read, update, and delete products
- **Ownership Control** - Users can only modify their own products
- **Rich Product Details** - Title, description, and image support
- **Product Discovery** - Browse all products with beautiful card layouts
- **User Profiles** - View products by specific creators

### 💬 Social Features
- **Interactive Comments** - Engage with products through comments
- **Comment Management** - Add and delete your own comments
- **User Attribution** - See who created each product and comment
- **Real-time Updates** - Comments appear instantly with React Query

### 🎨 User Experience
- **Dark/Light Theme** - Toggle between themes seamlessly
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Loading States** - Beautiful loading spinners and skeletons
- **Error Handling** - User-friendly error messages
- **Optimistic Updates** - Instant UI feedback

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.2.0 |
| **TypeScript** | Type Safety | 5.9.3 |
| **Vite** | Build Tool | 7.2.4 |
| **TailwindCSS** | Styling | 4.1.18 |
| **DaisyUI** | Component Library | 5.5.14 |
| **React Router** | Routing | 7.11.0 |
| **TanStack Query** | Data Fetching | 5.90.16 |
| **Axios** | HTTP Client | 1.13.2 |
| **Clerk React** | Authentication | 5.59.2 |
| **Lucide React** | Icons | 0.562.0 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Express.js** | Web Framework | 5.2.1 |
| **TypeScript** | Type Safety | 5.9.3 |
| **PostgreSQL** | Database | 12+ |
| **Drizzle ORM** | Database ORM | 0.44.7 |
| **Clerk Express** | Auth Middleware | 1.7.60 |
| **CORS** | Cross-Origin | 2.8.5 |

---

## 📁 Project Structure

```
CartZen/
├── 📂 client/                    # Frontend React Application
│   ├── 📂 src/
│   │   ├── 📂 components/         # Reusable UI Components
│   │   │   ├── CommentsSection.tsx
│   │   │   ├── EditProductForm.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── ThemeSelector.tsx
│   │   ├── 📂 hooks/             # Custom React Hooks
│   │   │   ├── useAuthReq.ts
│   │   │   ├── useComments.ts
│   │   │   ├── useProducts.ts
│   │   │   └── useUserSync.ts
│   │   ├── 📂 lib/               # Utilities & API Client
│   │   │   ├── api.ts            # API function definitions
│   │   │   └── axios.ts          # Axios instance configuration
│   │   ├── 📂 pages/             # Page Components
│   │   │   ├── CreateProductPage.tsx
│   │   │   ├── EditProductPage.tsx
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProductPage.tsx
│   │   │   └── ProfilePage.tsx
│   │   ├── App.tsx               # Main App Component
│   │   ├── main.tsx              # Application Entry Point
│   │   ├── types.ts              # TypeScript Type Definitions
│   │   └── index.css             # Global Styles
│   ├── 📂 public/                # Static Assets
│   ├── 📂 dist/                  # Production Build
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── 📂 server/                     # Backend Express Application
│   ├── 📂 src/
│   │   ├── 📂 config/            # Configuration
│   │   │   └── env.ts            # Environment Variables
│   │   ├── 📂 controllers/       # Request Handlers
│   │   │   ├── commentsController.ts
│   │   │   ├── productsController.ts
│   │   │   └── usersController.ts
│   │   ├── 📂 db/                # Database Layer
│   │   │   ├── index.ts          # Database Connection
│   │   │   ├── queries.ts        # Database Queries
│   │   │   └── schema.ts         # Database Schema
│   │   ├── 📂 routes/            # API Routes
│   │   │   ├── commentsRoute.ts
│   │   │   ├── productsRoute.ts
│   │   │   └── usersRoute.ts
│   │   └── index.ts              # Server Entry Point
│   ├── 📂 types/                 # TypeScript Definitions
│   ├── package.json
│   ├── drizzle.config.ts
│   └── tsconfig.json
│
└── README.md                      # This File
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **npm**, **yarn**, or **bun** - Package manager
- **Clerk Account** - [Sign up for free](https://clerk.com)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CartZen.git
cd CartZen
```

#### 2. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

#### 3. Environment Setup

**Backend Environment** (`.env` in `server/` directory):

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/cartzen

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

**Frontend Environment** (`.env` in `client/` directory):

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# API Base URL
VITE_API_URL=http://localhost:3000
```

#### 4. Database Setup

```bash
cd server
npm run db:push
```

This will create all necessary tables in your PostgreSQL database.

#### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server will run on `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Client will run on `http://localhost:5173`

Visit `http://localhost:5173` in your browser! 🎉

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication
Most endpoints require authentication. Include the Clerk session token in your requests (handled automatically by the frontend).

### Endpoints

#### Health Check
```http
GET /api/health
```
Returns API status and available endpoints.

**Response:**
```json
{
  "message": "Welcome to Cartzen API - Powered by PostgreSQL, Drizzle ORM & Clerk Authentication",
  "endpoints": {
    "users": "/api/users",
    "products": "/api/products",
    "comments": "/api/comments"
  }
}
```

#### Products

##### Get All Products
```http
GET /api/products
```
**Public** - Returns all products with user information.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Product Name",
    "description": "Product description",
    "imageUrl": "https://...",
    "userId": "user_...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "user": {
      "name": "John Doe",
      "imageUrl": "https://..."
    }
  }
]
```

##### Get Product by ID
```http
GET /api/products/:id
```
**Public** - Returns a single product with comments and user information.

##### Get My Products
```http
GET /api/products/my
```
**Protected** - Returns products created by the authenticated user.

##### Create Product
```http
POST /api/products
```
**Protected** - Creates a new product.

**Request Body:**
```json
{
  "title": "Product Title",
  "description": "Product description",
  "imageUrl": "https://example.com/image.jpg"
}
```

##### Update Product
```http
PUT /api/products/:id
```
**Protected** - Updates a product (only by owner).

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "imageUrl": "https://example.com/new-image.jpg"
}
```

##### Delete Product
```http
DELETE /api/products/:id
```
**Protected** - Deletes a product (only by owner).

#### Comments

##### Create Comment
```http
POST /api/comments/:productId
```
**Protected** - Creates a comment on a product.

**Request Body:**
```json
{
  "content": "This is a great product!"
}
```

##### Delete Comment
```http
DELETE /api/comments/:commentId
```
**Protected** - Deletes a comment (only by owner).

#### Users

##### Sync User
```http
POST /api/users/sync
```
**Protected** - Syncs user data from Clerk to the database.

**Request Body:**
```json
{
  "id": "user_...",
  "email": "user@example.com",
  "name": "John Doe",
  "imageUrl": "https://..."
}
```

---

## 🗄️ Database Schema

### Entity Relationship Diagram

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│    Users    │         │   Products   │         │  Comments   │
├─────────────┤         ├──────────────┤         ├─────────────┤
│ id (PK)     │◄──┐     │ id (PK)      │◄──┐     │ id (PK)     │
│ email       │   │     │ title        │   │     │ content     │
│ name        │   │     │ description  │   │     │ userId (FK) │
│ imageUrl    │   │     │ imageUrl     │   │     │ productId   │
│ createdAt   │   │     │ userId (FK)  ├───┘     │ (FK)        │
│ updatedAt   │   │     │ createdAt    │         │ createdAt   │
└─────────────┘   │     │ updatedAt    │         └─────────────┘
                  │     └──────────────┘
                  │
                  └───────────────────┘
```

### Tables

#### `users`
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `text` | PRIMARY KEY | User ID from Clerk |
| `email` | `text` | UNIQUE, NOT NULL | User email address |
| `name` | `text` | | User display name |
| `image_url` | `text` | | Profile image URL |
| `created_at` | `timestamp` | NOT NULL, DEFAULT NOW | Creation timestamp |
| `updated_at` | `timestamp` | NOT NULL, DEFAULT NOW | Last update timestamp |

#### `products`
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `uuid` | PRIMARY KEY, DEFAULT RANDOM | Product identifier |
| `title` | `text` | NOT NULL | Product title |
| `description` | `text` | NOT NULL | Product description |
| `image_url` | `text` | NOT NULL | Product image URL |
| `user_id` | `text` | NOT NULL, FOREIGN KEY → users.id | Owner user ID |
| `created_at` | `timestamp` | NOT NULL, DEFAULT NOW | Creation timestamp |
| `updated_at` | `timestamp` | NOT NULL, DEFAULT NOW | Last update timestamp |

#### `comments`
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `uuid` | PRIMARY KEY, DEFAULT RANDOM | Comment identifier |
| `content` | `text` | NOT NULL | Comment text |
| `user_id` | `text` | NOT NULL, FOREIGN KEY → users.id | Commenter user ID |
| `product_id` | `uuid` | NOT NULL, FOREIGN KEY → products.id | Product ID |
| `created_at` | `timestamp` | NOT NULL, DEFAULT NOW | Creation timestamp |

---

## 🔧 Available Scripts

### Server Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload (tsx watch) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run db:push` | Push database schema changes to PostgreSQL |

### Client Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🏗️ Architecture

### Frontend Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    React Application                     │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Pages      │  │  Components  │  │    Hooks     │ │
│  │              │  │              │  │              │ │
│  │ - HomePage   │  │ - ProductCard│  │ - useProducts│ │
│  │ - ProductPage│  │ - Navbar     │  │ - useComments│ │
│  │ - ProfilePage│  │ - Comments   │  │ - useUserSync│ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │         │
│         └──────────────────┼──────────────────┘         │
│                            │                            │
│                    ┌───────▼────────┐                  │
│                    │  TanStack Query │                  │
│                    │   (Data Layer)  │                  │
│                    └───────┬─────────┘                  │
│                            │                            │
│                    ┌───────▼────────┐                  │
│                    │   API Client    │                  │
│                    │   (api.ts)      │                  │
│                    └───────┬─────────┘                  │
└────────────────────────────┼────────────────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   Express API    │
                    │   (Backend)      │
                    └──────────────────┘
```

### Backend Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Express Server                         │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Routes     │  │ Controllers  │  │   Queries    │ │
│  │              │  │              │  │              │ │
│  │ - /products  │  │ - products   │  │ - getAll     │ │
│  │ - /comments  │  │ - comments   │  │ - create     │ │
│  │ - /users     │  │ - users      │  │ - update     │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │         │
│         └──────────────────┼──────────────────┘         │
│                            │                            │
│                    ┌───────▼────────┐                  │
│                    │  Drizzle ORM   │                  │
│                    └───────┬────────┘                  │
└────────────────────────────┼────────────────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   PostgreSQL      │
                    │   Database        │
                    └───────────────────┘
```

---

## 🔒 Security Features

- ✅ **Authentication Required** - Protected endpoints require valid Clerk session
- ✅ **Ownership Verification** - Users can only modify their own resources
- ✅ **Input Validation** - All user inputs are validated before processing
- ✅ **CORS Protection** - Configured to allow only frontend origin
- ✅ **SQL Injection Prevention** - Using parameterized queries via Drizzle ORM
- ✅ **Type Safety** - TypeScript prevents many runtime errors

---

## 🎨 UI/UX Features

- **Theme Switching** - Seamless dark/light mode toggle
- **Responsive Grid** - Adaptive product card layouts
- **Loading States** - Beautiful spinners during data fetching
- **Error Handling** - User-friendly error messages
- **Optimistic Updates** - Instant UI feedback
- **Smooth Animations** - Transitions and hover effects
- **Accessibility** - Semantic HTML and ARIA labels

---

## 🚀 Deployment

### Production Build

1. **Build Frontend:**
   ```bash
   cd client
   npm run build
   ```

2. **Build Backend:**
   ```bash
   cd server
   npm run build
   ```

3. **Set Production Environment Variables:**
   - Update `NODE_ENV=production`
   - Use production database URL
   - Configure production Clerk keys
   - Set correct `FRONTEND_URL`

4. **Start Server:**
   ```bash
   cd server
   npm start
   ```

The Express server will serve both the API and the static frontend files.

### Recommended Hosting

- **Frontend:** Vercel, Netlify, or Cloudflare Pages
- **Backend:** Railway, Render, or Fly.io
- **Database:** Supabase, Neon, or Railway PostgreSQL

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git fork https://github.com/yourusername/CartZen.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

5. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing project structure
- Write meaningful commit messages
- Update documentation for new features
- Ensure all tests pass

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) - Authentication infrastructure
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database queries
- [DaisyUI](https://daisyui.com/) - Beautiful component library
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [Vite](https://vitejs.dev/) - Next-generation build tool

---

## 📧 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/CartZen/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/CartZen/discussions)

---

<div align="center">

**Built with ❤️ by the CartZen Team**

[⭐ Star this repo](https://github.com/yourusername/CartZen) if you find it helpful!

</div>

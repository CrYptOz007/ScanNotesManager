# ScanNotesManager

A full-stack web application for managing scan documents and their associated notes, built with .NET 9 and React.

## Technology Stack

### Backend
- **.NET 9.0** - ASP.NET Core Web API
- **Entity Framework Core 9.0** - ORM with In-Memory Database

### Frontend
- **React 19**
- **TypeScript**
- **Vite** - Build tool and dev server
- **TailwindCSS** - Lightweight CSS framework
- **TanStack React Query** - Data fetching, caching and state management
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Yup** - Form Schema validation
- **PNPM** - Package manager

### Infrastructure
- **Docker & Docker Compose** - Containerisation
- **Nginx** - Reverse proxy and load balancer

## 📋 Prerequisites
- **Docker** and **Docker Compose**
- **pnpm** (for local frontend development)
- **.NET 9 SDK** (for local backend development)

## 🚀 Setup & Installation

### 1. Build

1. **Clone the repository**
   ```bash
   git clone https://github.com/CrYptOz007/ScanNotesManager
   cd ScanNotesManager
   ```

2. **Build the application**
   ```bash
   docker compose up --build
   ```

### 2. Setup Local Development

#### Backend Setup
```bash
cd backend
dotnet restore
```

#### Frontend Setup
```bash
cd frontend
pnpm install
```

### 3. Running the Application
```bash
docker compose up
```

## 🏗️ Project Structure

```
ScanNotesManager/
├── backend/                 # .NET 9 Web API
│   ├── Controllers/         # API controllers
│   ├── Models/             # Data models
│   ├── DTOs/               # Data transfer objects
│   ├── Database/           # Entity Framework context
│   ├── Routes/             # Route configurations
│   └── docker/             # Backend Dockerfile
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── network/        # API integration
│   │   └── context/        # React context providers
│   └── docker/             # Frontend Dockerfile
├── nginx/                  # Nginx configuration
└── docker-compose.yml      # Multi-container setup
```

## Estimated Time Breakdown
- Backend: 1.5 Hours
- Frontend: 3 Hours
- Containerisation: 30mins


# Notes
First time ever developing an ASP.NET API backend. So I needed to figure out a few quirks reading through the official documentation on [creating a minimal API backend](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api). Tried to implement a fairly simple MVC architecture while still retaining the minimal design architecture. 

Frontend took a bit longer as I wanted to build a nicely structured frontend, with component based features and proper api network layers and hooks. This is similar to what i've designed and worked with in the past, especially the packages being used, such as React Query, Hook form and Yup for validation. And the other half was also creating as much reuseable generic components as I can. Though most of the time the projects i've worked on would just use component libraries such as MUI and the ease of theming them as they are already prestyled.

I could've done a super simple rudementary frontend reducing the time taken, such as basic state management and using in-built fetch + useEffects with not much styling frontend. But I like to create something that I would be proud of and to my standard.

Docker containerisation setup was very simple. I'm already proficient in it. Its setup to only expose the nginx reverse proxy container and not any of the frontend/backend ports. Supports HMR for frontend and backend. 

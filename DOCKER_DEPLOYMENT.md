# Nyansa AI - African Language Agri-Tech AI Data Platform

## Build and Push to Docker Hub

### Prerequisites
- Docker installed
- Docker Hub account (https://hub.docker.com/repositories/muse13)
- Logged in: `docker login`

### Build Images

**Backend:**
```bash
docker build -f Dockerfile.backend -t muse13/nyansa-backend:latest .
```

**Frontend:**
```bash
docker build -f Dockerfile.frontend -t muse13/nyansa-frontend:latest .
```

### Push to Docker Hub

**Backend:**
```bash
docker push muse13/nyansa-backend:latest
```

**Frontend:**
```bash
docker push muse13/nyansa-frontend:latest
```

### Run with Docker Compose

```bash
docker compose up -d
```

### Access

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Database: localhost:5432

### Stop

```bash
docker compose down
```

### Logs

```bash
docker compose logs -f
```

### Pull and Run from Docker Hub

```bash
docker pull muse13/nyansa-backend:latest
docker pull muse13/nyansa-frontend:latest
docker compose up -d
```

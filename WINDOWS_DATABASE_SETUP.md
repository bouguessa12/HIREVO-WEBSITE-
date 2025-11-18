# HIREVO Database Setup - Windows Guide

## Prerequisites

1. **Install Docker Desktop** (includes docker-compose)
   - Download: https://www.docker.com/products/docker-desktop
   - Install and restart your PC
   - Open PowerShell and verify: `docker --version` and `docker-compose --version`

## Start the Databases

### Option 1: Docker Compose (Recommended)

**Start all three databases:**
```powershell
docker-compose up -d
```

**Verify they're running:**
```powershell
docker-compose ps
  REMOVED: Windows database setup doc removed per user request.
```powershell
# Find docker-compose installation
where docker-compose

# Or use it directly from Program Files if needed
& 'C:\Program Files\Docker\Docker\resources\bin\docker-compose.exe' up -d
```

### Issue: "Port 5432 is already in use"

```powershell
# Find what's using the port
netstat -ano | findstr :5432

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or use different ports in docker-compose.yml
# Change "5432:5432" to "5433:5432" for PostgreSQL
```

### Issue: "Docker daemon not running"

```powershell
# Start Docker Desktop or use WSL2
wsl -l -v

# If WSL2 is installed, start it
wsl
```

## Verify Databases Are Running

### PostgreSQL
```powershell
# Connect using docker exec
docker exec -it hirevo-postgres psql -U hirevo_user -d hirevo

# Or test connection
docker exec hirevo-postgres pg_isready -U hirevo_user -d hirevo
```

### Redis
```powershell
docker exec -it hirevo-redis redis-cli ping
# Should output: PONG
```

### Qdrant
```powershell
# Check web UI
Start-Process "http://localhost:6333/dashboard"

# Or check health
curl http://localhost:6333/health
```

## Test Your Setup

After starting the services, test them:

```powershell
npx tsx test-databases.ts
```

Should show:
```
✓ PostgreSQL: OK
✓ Redis: OK
✓ Qdrant: OK
🎉 All databases connected successfully!
```

## Environment Variables (if needed)

Create or verify `.env` file:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hirevo
DB_USER=hirevo_user
DB_PASSWORD=hirevo_password

REDIS_HOST=localhost
REDIS_PORT=6379

QDRANT_URL=http://localhost:6333
```

## Quick Reference

| Command | What it does |
|---------|------------|
| `docker-compose up -d` | Start all services in background |
| `docker-compose down` | Stop all services |
| `docker-compose ps` | Show running services |
| `docker-compose logs -f` | Stream logs |
| `docker exec -it <container> bash` | Connect to container shell |

## Next Steps

1. ✓ Start Docker Desktop
2. ✓ Run `docker-compose up -d`
3. ✓ Run `npx tsx test-databases.ts`
4. ✓ When all show ✓, you're ready to develop!

**Need help?**
- Check Docker Desktop is running (look for whale icon in system tray)
- Ensure Docker resources are allocated (Docker Desktop > Settings > Resources)
- Try `docker version` to verify installation

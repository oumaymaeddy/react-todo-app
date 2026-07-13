#  Task Tracker — Todo App

Application fullstack de gestion de tâches
déployée avec Docker et Kubernetes.

## 🛠️ Tech Stack

- **Frontend** : React + Vite
- **Backend** : Node.js + Express
- **Base de données** : SQLite
- **Containerisation** : Docker + Docker Compose
- **Orchestration** : Kubernetes (K8s)
- **CI/CD** : GitHub Actions → Docker Hub

## ✨ Fonctionnalités

- ✅ Ajouter des tâches
- 🗑️ Supprimer des tâches
- 💾 Persistance des données (SQLite)
- 🐳 Déployable en 1 commande

## 🚀 Lancer l'app avec Docker

```bash
docker compose up --build
```
Accès : http://localhost:5173
<img width="810" height="533" alt="image" src="https://github.com/user-attachments/assets/c420be46-6104-43ba-9318-62d65d829e88" />


## ⎈ Déployer sur Kubernetes

```bash
kubectl apply -f k8s-todo/
kubectl port-forward service/frontend-service 5173:5173
```

## 🔄 CI/CD Pipeline

Chaque `git push` sur `main` :
1. Build les images Docker
2. Push automatiquement sur Docker Hub

## 🐳 Docker Hub

- Frontend : `oumaymaeddy/todo-frontend`
- Backend  : `oumaymaeddy/todo-backend`

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


screenshots:

<img width="966" height="1016" alt="kubernetes7" src="https://github.com/user-attachments/assets/5c273b5e-8e3b-41c6-8283-17ac2ea2e163" />

<img width="946" height="930" alt="kubernetes 1 - Copy" src="https://github.com/user-attachments/assets/1a70f962-51d6-4d49-a9c7-7525aecf82b5" />

<img width="942" height="935" alt="kubernetes 2 - Copy" src="https://github.com/user-attachments/assets/82e1c994-69ac-4ca9-be53-9e1dbdc224c8" />

<img width="947" height="875" alt="kubernetes3" src="https://github.com/user-attachments/assets/0b1ccbeb-bbd6-4c1d-b588-3dea819b25aa" />

<img width="1897" height="1018" alt="kubernetes4" src="https://github.com/user-attachments/assets/43029d78-3c41-4e32-9040-c1aa0fe52abc" />

<img width="1913" height="687" alt="kubernetes5" src="https://github.com/user-attachments/assets/41c27626-37ec-440e-a67e-14608d016420" />

<img width="1911" height="832" alt="kubernetes6" src="https://github.com/user-attachments/assets/d9499b75-ff1d-4cf6-8327-614e5f10be5b" />






# 1. Image de base Node.js
FROM node:18-alpine

# 2. Dossier de travail dans le container
WORKDIR /app

# 3. Copie les fichiers de dépendances
COPY package*.json .

# 4. Installe les dépendances
RUN npm install

# 5. Copie tout le code
COPY . .

# 6. Expose le port de Vite
EXPOSE 5173

# 7. Lance l'app
CMD ["npm", "run", "dev", "--", "--host"]
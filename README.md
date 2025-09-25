# Solomon Christ AI Hub 🚀

## Vision
The **AI Hub** is a central place to explore all AI apps and projects from **Solomon Christ**.  
It automatically lists every public repository from the [GitHub profile](https://github.com/SolomonChrist) and provides quick access to each repo and its live demo.  
Always up-to-date, always ready.  

---

## ✨ Features
- **Automatic Repo Fetching**: Uses the GitHub API to list the latest repositories from Solomon Christ.  
- **Responsive Grid**: Clean, modern, and mobile-friendly card layout.  
- **Quick Links**: Direct links to GitHub repos and live GitHub Pages demos (if enabled).  
- **Live Search**: Instantly filter projects by name.  
- **Fast & Lightweight**: Built with [Vite](https://vitejs.dev/) for blazing-fast development and deployment.  

---

## 🚀 Quick Start

### 1. Run Locally with Vite (Recommended)
Works on both **Windows (PC)** and **Mac/Linux**.

1. Clone the repository:
   ```bash
   git clone https://github.com/SolomonChrist/AI-App-Hub.git
   ```
2. Navigate into the project folder:
   ```bash
   cd AI-App-Hub
   ```
3. Install dependencies (requires [Node.js](https://nodejs.org/) v16+):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)).

Your AI Hub will now be live locally and update automatically whenever you refresh. 🎉  

---

### 2. Build for Production
When you’re ready to deploy:

```bash
npm run build
```

This will generate a `dist/` folder with static files.  
You can serve these files using any static web server (e.g. `npx serve dist`) or upload them to hosting services like **GitHub Pages, Netlify, or Vercel**.  

---

### 3. Deploy on GitHub Pages
1. Build the project:
   ```bash
   npm run build
   ```
2. Push the contents of the `dist/` folder to a branch (e.g. `gh-pages`).  
3. Enable GitHub Pages in your repo settings (set the source to the `gh-pages` branch).  
4. Your hub will be live at:  
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

## 👨‍💻 Created By
**[Solomon Christ](https://www.solomonchrist.com)**  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).  

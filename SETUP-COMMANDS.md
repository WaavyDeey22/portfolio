# VS Code Terminal Commands - Portfolio React Setup

## Quick Setup (All-in-One Script)

Copy and paste this entire block into your VS Code terminal:

```bash
# Create React + Vite project
npm create vite@latest portfolio-react -- --template react

# Navigate into project
cd portfolio-react

# Install dependencies
npm install

# Create necessary directories
mkdir -p src/components src/hooks

# Open in VS Code
code .
```

Then manually create the files as shown below, OR use the automated script.

---

## Automated Script (Recommended)

Save this as `setup-portfolio.sh` and run it:

```bash
#!/bin/bash

# Create Vite React project
npm create vite@latest portfolio-react -- --template react

cd portfolio-react

# Install dependencies
npm install

# Create directory structure
mkdir -p src/components src/hooks

# Create component files
touch src/components/Navbar.jsx
touch src/components/Hero.jsx
touch src/components/About.jsx
touch src/components/Skills.jsx
touch src/components/Projects.jsx
touch src/components/Experience.jsx
touch src/components/Certificates.jsx
touch src/components/Contact.jsx
touch src/components/Footer.jsx
touch src/components/Particles.jsx
touch src/components/Loader.jsx

# Create hooks file
touch src/hooks/useEffects.js

echo "✅ Project structure created successfully!"
echo "📝 Now copy the component code into each file"
echo "🚀 Run 'npm run dev' to start development server"
```

**To use this script:**
```bash
chmod +x setup-portfolio.sh
./setup-portfolio.sh
```

---

## Manual Step-by-Step Commands

### Step 1: Create Vite Project
```bash
npm create vite@latest portfolio-react -- --template react
```

### Step 2: Navigate to Project
```bash
cd portfolio-react
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Create Folders
```bash
mkdir src/components
mkdir src/hooks
```

### Step 5: Create Component Files
```bash
# Navigation & Layout
touch src/components/Navbar.jsx
touch src/components/Footer.jsx
touch src/components/Loader.jsx

# Content Sections
touch src/components/Hero.jsx
touch src/components/About.jsx
touch src/components/Skills.jsx
touch src/components/Projects.jsx
touch src/components/Experience.jsx
touch src/components/Certificates.jsx
touch src/components/Contact.jsx

# Effects
touch src/components/Particles.jsx
```

### Step 6: Create Hooks File
```bash
touch src/hooks/useEffects.js
```

### Step 7: Open in VS Code
```bash
code .
```

---

## PowerShell Commands (Windows)

If you're using PowerShell in VS Code:

```powershell
# Create Vite project
npm create vite@latest portfolio-react -- --template react

# Navigate
cd portfolio-react

# Install dependencies
npm install

# Create directories
New-Item -ItemType Directory -Path src/components
New-Item -ItemType Directory -Path src/hooks

# Create component files
New-Item -ItemType File -Path src/components/Navbar.jsx
New-Item -ItemType File -Path src/components/Hero.jsx
New-Item -ItemType File -Path src/components/About.jsx
New-Item -ItemType File -Path src/components/Skills.jsx
New-Item -ItemType File -Path src/components/Projects.jsx
New-Item -ItemType File -Path src/components/Experience.jsx
New-Item -ItemType File -Path src/components/Certificates.jsx
New-Item -ItemType File -Path src/components/Contact.jsx
New-Item -ItemType File -Path src/components/Footer.jsx
New-Item -ItemType File -Path src/components/Particles.jsx
New-Item -ItemType File -Path src/components/Loader.jsx

# Create hooks file
New-Item -ItemType File -Path src/hooks/useEffects.js

# Open in VS Code
code .
```

---

## After Creating Files

### 1. Copy the code into each file from the downloaded project

### 2. Or start the dev server and code manually:
```bash
npm run dev
```

### 3. Build for production:
```bash
npm run build
```

### 4. Preview production build:
```bash
npm run preview
```

---

## File Checklist

After running commands, you should have:

```
portfolio-react/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx ✓
│   │   ├── Hero.jsx ✓
│   │   ├── About.jsx ✓
│   │   ├── Skills.jsx ✓
│   │   ├── Projects.jsx ✓
│   │   ├── Experience.jsx ✓
│   │   ├── Certificates.jsx ✓
│   │   ├── Contact.jsx ✓
│   │   ├── Footer.jsx ✓
│   │   ├── Particles.jsx ✓
│   │   └── Loader.jsx ✓
│   ├── hooks/
│   │   └── useEffects.js ✓
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Quick Development Workflow

```bash
# 1. Create project
npm create vite@latest portfolio-react -- --template react && cd portfolio-react

# 2. Install dependencies
npm install

# 3. Create structure
mkdir -p src/components src/hooks

# 4. Open VS Code
code .

# 5. (After adding code) Start dev server
npm run dev
```

---

## Troubleshooting

**If Vite installation fails:**
```bash
npm cache clean --force
npm create vite@latest portfolio-react -- --template react
```

**If you get permission errors (Mac/Linux):**
```bash
sudo npm create vite@latest portfolio-react -- --template react
```

**Check Node version (should be 14+):**
```bash
node --version
```

**Update npm:**
```bash
npm install -g npm@latest
```

---

## VS Code Extensions (Recommended)

Install these extensions for better development:

```bash
# Open VS Code Extensions
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

Or search in VS Code Extensions panel:
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- Auto Rename Tag
- Path Intellisense

---

## Git Setup (Optional)

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Portfolio React project"

# Connect to GitHub (replace with your repo)
git remote add origin https://github.com/yourusername/portfolio-react.git
git branch -M main
git push -u origin main
```

---

## Ready to Code! 🚀

After setup, your terminal should show:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

Happy coding! 💻

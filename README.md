# Personal Webpage of Raphael Lam

A personal website built with React and TypeScript. The application presents a biography, résumé data, and a project gallery showcasing selected works.  

Access URL: https://whyanbu.github.io/CS601_Project/  

## Table of Contents

Features  
Special Configuration  
Installation  
Usage  
Project Structure  

### Features

This application is developed using React with TypeScript, scaffolded via Vite:

```
npm create vite@latest CS601_Project -- --template react-ts
```

Key technologies and features include:  

- Client-side Routing:  
Implemented using React Router to provide multi-page navigation within a single-page application environment.  

- UI and Styling:  
Built with Tailwind CSS for rapid UI development and responsive layouts. Component-specific CSS files are omitted in favor of utility-first styling.  

- React Hooks and Context:  
Demonstrates the use of props, useState, and useEffect hooks throughout components.  
The Gallery page utilizes the createContext and useContext APIs to store and share image data globally, avoiding reloading of images when navigating between pages.  

- Remote Data Integration:  
Résumé data is hosted on Firebase, accessed via a RESTful API developed using Express.js and deployed on Vercel.  
The API source repository is available at:  
https://github.com/whyanbu/CS601_Project_api  

### Special Configuration

Since GitHub Pages does not support client-side routing, a fallback mechanism is added to handle 404 redirects properly.  Before deploying, replicate index.html as 404.html inside the output directory:  

```
cp dist/index.html dist/404.html
```
This configuration ensures proper navigation for direct links to nested routes.  

### Installation

Clone the repository and install dependencies:  

```
git clone https://github.com/whyanbu/CS601_Project.git
cd CS601_Project
npm instal
```

To start the application locally:  
```
npm run dev
```

### Usage

- Local Development

Start the development server:
```
npm run dev
```

- Production Build

Build the project for deployment:
```
npm run build
```

- GitHub Pages Deployment

Deploy the built files to GitHub Pages:
```
npm run deploy
```

### Project Structure

```
CS601_Project
my-personal-site
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── constructionOrder.json
│   ├── images
│   │   ├── 3d-high-rise-building-complex-render.jpg
│   │   ├── 83220.png
│   │   ├── Hounenike-dam.jpg
│   │   ├── JD4PXKJ6UJGFZPZ44YN7GCDUQQ.avif
│   │   ├── Kurobe-dam.jpg
│   │   ├── LinkedIn.avif
│   │   ├── LongBeachCropped.jpg
│   │   ├── Marunuma-dam.jpg
│   │   ├── Miyagase-dam.jpg
│   │   ├── facebook.avif
│   │   ├── instagram.avif
│   │   ├── metrovaartha-en_2023-10_2c5723ab-6d6d-4b79-abcf-2262c4b3a8ad_ReasiBridge_jpeg.avif
│   │   ├── profile_picture.jpg
│   │   ├── rausing-science-centre-walters-cohen-architecture-education-uk_dezeen_2364_hero.jpg
│   │   ├── sekyra-flowers-daniel-libeskind-housing-prague_dezeen_2364_col_5-1704x1144.jpg
│   │   ├── siteicon.svg
│   │   ├── studio-libeskind-boerentoren-office-conversion_dezeen_2364_col_3-1704x1065.jpg
│   │   └── twitter.avif
│   └── images.json
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── ContactForm.tsx
│   │   ├── EducationCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PageTitle.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SequenceGame.tsx
│   │   └── SkillCard.tsx
│   ├── context
│   │   ├── ImageContext.tsx
│   │   └── ImageProvider.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Game.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Photo.tsx
│   │   └── Resume.tsx
│   ├── types.ts
│   └── utils
│       └── shuffle.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

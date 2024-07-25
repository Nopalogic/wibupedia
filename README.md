<div align="center">
  <h1 align="center">Wibupedia</h1>
  <div>
    <img src="https://img.shields.io/badge/-javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=f7df1e" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)

## <a name="introduction">🤖 Introduction</a>

An entertainment platform that provides comprehensive information on anime , featuring a responsive interface and interactive elements like clickable anime cards, comment sections, and a video player, using modern technology and intuitive design to support fans in exploring and discussing their favorite titles.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Tailwind CSS
- Prisma
- Next Auth

## <a name="features">🔋 Features</a>

👉 **Simple Authentication**: Secure and reliable user login with github.

👉 **Fully Functional Search**: Allows users to find anime easily using anime titles.

👉 **Anime Detail Page**: Displays detailed information about each anime, including synopsis, rating, and anime trailer.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Nopalogic/wibupedia.git
cd wibupedia
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=
GITHUB_CLIENT=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>next.config.mjs</code></summary>

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
```

</details>

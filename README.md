
## Overview

This project is a web application with a focus on login and authentication features and a unique tracking screen with interactive components. The tracking screen includes an analog clock, a speed control slider, and a share button. Optional features include displaying random quotes.

## Deployed Link 
https://get-me-therapy-one.vercel.app/



# Vite React Project Setup

## Overview

This project template provides a minimal setup for a React application using Vite. It includes Hot Module Replacement (HMR) and ESLint rules to help maintain code quality and consistency. You can choose between two official Vite plugins for React: one using Babel and the other using SWC for Fast Refresh.

## Features

- **Fast Refresh** for React components
- **Hot Module Replacement (HMR)** for a faster development experience
- **ESLint** for maintaining code quality

## Installation

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (or equivalent)

If you'd like to use the included Dockerfile then [Docker](https://www.docker.com) is required as well:

## Getting Started

Getting started is a simple as cloning the repository

```
git clone git@github.com:kushaljgec2025/GetMeTherapy.git
```

Changing into the new directory

```
cd GetMeTherapy
```

Removing the .git folder (and any additional files, folders or dependencies you may not need)

```
rm -rf .git
```

Installing dependencies

```
npm install
```
Start Localhost 

```
npm run dev
```
Start Localhost (For Mobile View )

```
npm run dev -- --host 
```
Sample Output

```
  VITE v5.3.4  ready in 643 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.xxx.xxx.1:5173/
  ➜  Network: http://192.xxx.xxx.103:5173/
  ➜  press h + enter to show help
```

Paste the Network link in your mobile
# Note :
Mobile and Local machine should be connected to same network.


```
git clone git@github.com:kushaljgec2025/GetMeTherapy.git &&\
cd GetMeTherapy &&\
rm -rf .git &&\
pnpm install &&\
pnpm run setup
```

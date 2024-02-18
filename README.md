# Wayne's Portfolio Documentation

![Homepage - Light](https://github.com/WayneMyo/wayne-portfolio-next/assets/57591039/4057d8a3-19b7-4a22-81cc-af0797db458f)
*Caption: This is the homepage (Light mode) of my portfolio.*

![Homepage - Dark](https://github.com/WayneMyo/wayne-portfolio-next/assets/57591039/d5f5601a-c114-4c1a-86b6-4baf58fe3d8f)
*Caption: This is the homepage (Dark mode) of my portfolio.*

## Visit My Portfolio
Check out my portfolio site [here](https://wayne-myo.net/).

## Hosting Information
### Custom Domain
- Domain: [wayne-myo.net](https://wayne-myo.net/)
- SSL: Enabled (HTTPS)

### Hosting Provider
- AWS Amplify
- Deployment: Automatic deployments triggered on push to the main branch.

## Project Structure Overview
```
/wayne-portfolio
├── /.next # Next.js build output (ignored in .gitignore)
├── /node_modules # Node.js modules (ignored in .gitignore)
├── /out # Static Build output (ignored in .gitignore)
├── /pages
│   ├── _app.tsx # Custom App component
│   ├── _document.tsx # Custom Document component with stylesheets imported
│   └── index.tsx # Home page with pages and components imported
├── /public
│   ├── /static
│   │   ├── /css
│   │   │   ├── /color # Color variables (theme colors) for the entire application
│   │   │   └── styles.css # Stylesheet for the entire application
│   │   ├── /images
│   │   ├── /plugin
│   │   └── /Wai-Yan-Khine-Myo-Resume.pdf # Resume file for download
│   ├── favicon.ico # Website favicon
├── /src # Source code directory
│   ├── /app # React components and pages
│   │   ├── /components # Reusable UI components
│   │   ├── /contexts # Contexts for state management
│   │   ├── /data # Data used in the application
│   │   ├── /redux # Redux store and slices
│   │   ├── About.tsx # About page
│   │   ├── Contact.tsx # Contact page
│   │   ├── Home.tsx # Home page
│   │   ├── Recommendations.tsx # Recommendations page
│   │   ├── Utils.tsx # Utility functions
│   │   └── WorkExperience.tsx # Work Experience page
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignore file
├── next-env.d.ts # Next.js types
├── next.config.mjs # Next.js configuration
├── package-lock.json # Node.js package manager lock file
├── package.json # Node.js package manager file - Scripts such as dev, build, start, lint, and deploy (aws s3 sync) are defined here
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration
```

## Packages Used
- @emotion/react # React simple styling library
- @emotion/styled # Styled components library for React
- @mui/material # Material-UI components library
- @reduxjs/toolkit # official, opinionated, batteries-included toolset for efficient Redux development
- imagesloaded # Image loading library
- isotopes-layout # Responsive item sizing library
- react-redux # React Redux library for state management
- react-slick # React carousel library
- slick-carousel # Slick carousel library

## Development Environment
- Node.js v20.11.0
- npm v8.19.2

## Getting Started
1. Clone the repository:
```gh repo clone WayneMyo/wayne-portfolio-next```

2. Install the dependencies:
```npm install```

3. Run the development server:
```npm run dev```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the Deployment Version
To build the deployment version, run:
```npm run build```

You will see the build output in the .next directory (for Server-Side Rendering) and the out directory (for Static Site Generation).

## Deploy on AWS S3
1. First install the AWS CLI and configure the AWS S3 bucket:
```aws configure```

2. Then, deploy the build output to the AWS S3 bucket:
```npm run deploy```

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

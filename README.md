# BestBooks - New York Times Bestseller Lists React App

BesbBooks is a React app that provides users with access to the New York Times Bestseller Lists. It allows users to explore the top 5 books from each bestseller list, categorized by their respective genres. The app also enables users to view lists by date, either weekly or monthly, and filter the lists based on different categories. Additionally, users can access detailed information about a specific book and interact with the app by registering and logging in to save their favorite books to a personal list.

The project is deployed live using Firebase.

- [BestBooks Live Preview](https://bestbooks-13272.web.app/)

## Built with

<div>

<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"  height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="64" width="64"/>
<img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="64" width="64"/>

## Installation and Setup

To run BesbBooks on your local machine, follow these steps:

Ensure you have Node.js and npm (Node Package Manager) installed on your system. It's recommended to use Node v18.0 or higher.

### Clone the repository:

```bash
git clone https://github.com/your-username/bestbookss.git

cd bestbookss
```

### Install the required dependencies:

```bash
npm install
```

### Create a copy from `.env.production` and rename it to `.env.local`

```bash
cp .env.production .env.local
```

**Note:** The `.env` file is explicitly added to this repo. This is not a common practice or ideal. However, since this represents a private repo from a ballpark project and it's only intended for the reviewers, the file is added to make the review process more accessible.

### Start the development server:

```bash
npm start
```

Open your web browser and visit http://localhost:3000 to access BestBooks.

## Deployment

This project has a GitHub Action setup for handling production deployments. All commits to `main` branch will be automatically deployed to production.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## License

BesbBooks is released under the MIT License. You are free to use, modify, and distribute this project as per the terms of the license.

Happy reading with BesbBooks! If you have any questions or need assistance, please don't hesitate to reach out to us. Enjoy exploring the bestseller lists from the New York Times!

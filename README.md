# Amazon Clone

A full-featured Amazon clone built with React, Firebase, and Material-UI. This project replicates the core functionality of Amazon's e-commerce platform.

## Features

- 🛍️ Product browsing and searching
- 🔐 User authentication
- 🛒 Shopping cart functionality
- 💳 Checkout process
- ⭐ Product ratings and reviews
- 🎨 Responsive design
- 🔄 Real-time updates with Firebase

## Live Demo

Visit the live site: [Amazon Clone](https://ecommerce-580db.web.app)

## Tech Stack

- React.js
- Firebase (Authentication, Hosting)
- Material-UI
- React Router
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kamesh-Kadimisetty/AmazonClone.git
```

2. Navigate to the project directory
```bash
cd AmazonClone
```

3. Install dependencies
```bash
npm install
```

4. Create a Firebase project and add your configuration
   - Create a new project in [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication and Hosting
   - Add your Firebase configuration to the project

5. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Deployment

This project is automatically deployed to Firebase Hosting when changes are pushed to the main branch using GitHub Actions.

### Manual Deployment

To deploy manually:

```bash
npm run build
firebase deploy
```

## Project Structure

```
AmazonClone/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .github/
│   └── workflows/
│       └── firebase-deploy.yml
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Amazon for inspiration
- Firebase for backend services
- Material-UI for components
- React team for the amazing framework

## Contact

Kamesh Kadimisetty - [GitHub](https://github.com/Kamesh-Kadimisetty)

Project Link: [https://github.com/Kamesh-Kadimisetty/AmazonClone](https://github.com/Kamesh-Kadimisetty/AmazonClone)

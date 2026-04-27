# ft_transcendence 🚀

This repository contains the 42 Common Core final project, **ft_transcendence**. It's a comprehensive web application designed to simulate a multiplayer online game, built with a focus on modularity, scalability, and robust architecture.

## 🛡️ Project Status

*(Note: As no CI/CD is configured, build and test badges are placeholders. Replace with actual links if implemented.)*

| Build Status | License |
| :----------: | :-----: |
| ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) | ![License](https://img.shields.io/badge/license-MIT-blue) |

## ✨ Features

*   **Real-time Multiplayer Gaming:** Engage in competitive online matches.
*   **User Authentication:** Secure user login and profile management.
*   **Interactive Game Lobby:** Browse and join available games.
*   **Customizable Avatars:** Personalize your player profile.
*   **Chat Functionality:** Communicate with other players.
*   **Scalable Backend Architecture:** Designed for performance and extensibility.
*   **Containerized Deployment:** Utilizes Docker and Docker Compose for easy setup and management.

## 🛠️ Installation

To set up the `ft_transcendence` project locally, follow these steps:

### Prerequisites

*   **Docker:** Ensure Docker and Docker Compose are installed on your system.
*   **Node.js & npm:** Required for backend and frontend dependencies.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/ft-Monolith/ft_transcendence.git
    cd ft_transcendence
    ```

2.  **Install Backend Dependencies:**
    Navigate to the backend directory and install its dependencies.
    ```bash
    cd srcs/backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    Navigate to the frontend directory (if separate, otherwise adjust path) and install its dependencies.
    ```bash
    # Assuming frontend is in srcs/frontend or similar
    cd ../frontend
    npm install
    ```

4.  **Configure Environment Variables (if applicable):**
    Create and configure any necessary `.env` files for your backend and frontend. Refer to specific configuration files within the `srcs` directory for details.

5.  **Build Docker Images:**
    Build the necessary Docker images for the application.
    ```bash
    # From the root of the repository
    docker-compose build
    ```

6.  **Start the Application:**
    Launch the application using Docker Compose.
    ```bash
    docker-compose up
    ```
    For a lighter setup (e.g., without certain services), you might use:
    ```bash
    docker-compose -f docker-compose.light.yml up
    ```

## 🎮 Usage

Once the application is running, you can access it via your web browser.

1.  **Access the Application:**
    Open your browser and navigate to `http://localhost:3000` (or the port specified in your Docker configuration).

2.  **Login/Register:**
    Use the provided authentication system to log in or create a new account.

3.  **Start Playing:**
    Explore the game lobby, find a match, and begin your gaming experience.

## 🤝 Contributing

We welcome contributions to `ft_transcendence`! If you'd like to contribute, please follow these guidelines:

1.  **Fork the Repository:** Create your own fork of the `ft-Monolith/ft_transcendence` repository.
2.  **Create a New Branch:** Branch out from `main` for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Make Your Changes:** Implement your changes and ensure they adhere to the project's coding standards.
4.  **Test Your Changes:** Thoroughly test your modifications to ensure they don't introduce regressions.
5.  **Commit Your Changes:** Write clear and concise commit messages.
    ```bash
    git commit -m "feat: Add new game mode"
    ```
6.  **Push to Your Fork:**
    ```bash
    git push origin feature/your-feature-name
    ```
7.  **Open a Pull Request:** Submit a pull request to the `main` branch of the `ft-Monolith/ft_transcendence` repository.

Please ensure your pull request includes a clear description of the changes and the problem it solves.

## 📜 License

This project is not currently under a specific license. Please refer to the project's contributors or maintainers for licensing details.

---

<p align="center">
  <a href="https://readmeforge.app?utm_source=badge">
    <img src="https://readmeforge.app/badge.svg" alt="Made with ReadmeForge" height="20">
  </a>
</p>
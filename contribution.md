# Contribution Guidelines for Mosa3ada

Thank you for your interest in contributing to Mosa3ada! Every contribution, big or small, is valuable for our mission to assist those affected by the recent earthquake in Morocco. Please read through these guidelines to ensure a smooth and effective collaboration process.

## Getting Started

### Familiarize Yourself with the Codebase & Design

Before making any contributions:

- Explore the codebase to understand its architecture and components.

- Familiarize yourself with our [V2 Design](https://www.figma.com/file/ryAPPQ4sA1s1dxoptitkTk/Mosa3ada-Project---V2?mode=dev) to align your contributions with our design principles and layouts.

### Development Environment

Mosa3ada is built with React and Next.js 13. Ensure you have a basic understanding of these technologies before diving in.

## Contribution Process

1.  **Fork & Clone:** Begin by forking the repository and then cloning your fork to your local machine.

    - **Clone the repository:**

    ```
    git clone <<link-to-your-forked-repository>>
    ```

2.  **Branching:** We follow the Git Flow branching strategy. Create a new branch based on the type of contribution you're making (e.g., `feature/new-login`, `fix/header-display`).

    - **Create your brach**

    ```
    git checkout -b <<branch name>>
    ```

    - **Pull latest changes from staging brach :**

    ```
    git pull origin staging
    ```

## Local Environment

3.  **Setting Up Your Local Environment:** Before you begin contributing to this project, make sure you set up your local environment. To do this, follow these steps:

- **Navigate to your local repository**

  ```bash
  cd mosa3ada.biztech.ma
  ```

- **Install dependencies**

  ```bash
  npm install
  ```

- **Create a `.env` file in the root directory**

  ```bash
  touch .env
  ```

- **Add the following line to your `.env` file to specify the environment**

  ```bash
  NEXT_PUBLIC_CURRENT_ENV=LOCAL
  ```

- **Run the project locally**

  ```bash
  npm run dev
  ```

4.  **Coding Standards:** Our codebase uses Prettier for consistent formatting. Familiarize yourself with some of our existing code and maintain similar coding styles for consistency. If unsure, refer to a few existing files or ask on Discord.

5.  **Commit Messages:** Be clear and descriptive in your commit messages. Recommended formats include:

- Feature: Added new user login

- Fix: Corrected header display issue on mobile

6.  **Testing:** We currently don't use any dedicated testing frameworks. However, contributors are expected to manually test their code to ensure functionality and absence of bugs.

7.  **Documentation:** If introducing a new feature or a complex piece of logic, ensure your code is well-commented and understandable.

## Please make all Pull Requests to the staging branch

8.  **Pull Requests:** Once your changes are ready, create a pull request from your fork to the main repository. Ensure that your PR is detailed, explaining the purpose, changes made, and any other pertinent information.

## Communication

If you have any questions, need clarification, or want to discuss certain aspects of the project, please join our [Discord server](https://discord.com/invite/nwWz6UvT). We're a collaborative community, and open discussion is encouraged.

## Closing Notes

Your contribution is a testament to the strength and unity of the community. By helping us enhance Mosa3ada, you're directly assisting countless individuals affected by the earthquake. Thank you for your dedication and support.

## Community Contributors

<a href="https://github.com/BizTech-Morocco/mosa3ada.biztech.ma/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BizTech-Morocco/mosa3ada.biztech.ma" />
</a>

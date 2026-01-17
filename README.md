# Simple Password Generator

This project is a comprehensive tool for generating secure, random passwords. It is implemented as a dual-interface application: a responsive web-based Front-end and a Telegram Bot running on Node.js.

## Project Overview

The solution consists of two main components:

1.  **Web Interface:** A Single Page Application (SPA) built with Vanilla JavaScript. It allows users to generate passwords with customizable settings directly in the browser.
2.  **Telegram Bot:** A server-side application built with Node.js and Telegraf. It provides a convenient mobile interface for quick password generation.

## Key Features

### Web Interface
*   **Customizable Logic:** Algorithms for generating random characters (uppercase, lowercase, numbers, symbols) based on ASCII codes.
*   **DOM Manipulation:** Dynamic updates of the UI without page reloads.
*   **Zero Dependencies:** Built entirely with native HTML5, CSS3, and JavaScript (ES6+).
*   **Responsive Design:** Optimized layout for both desktop and mobile devices using CSS Flexbox.

### Telegram Bot
*   **Node.js Backend:** Server-side logic handling user requests.
*   **Input Validation:** Strict validation of user input to prevent errors and edge cases (e.g., NaN handling).
*   **UX Enhancements:** Passwords are returned in Monospace format (Markdown) for one-tap copying.
*   **Security:** Environment variables (.env) are used to protect sensitive API keys.

## Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+).
*   **Backend:** Node.js.
*   **Libraries:** Telegraf (Telegram Bot API wrapper), Dotenv (Environment configuration).
*   **Version Control:** Git.

## Project Structure

The repository follows a monorepo structure:

*   `/` (Root): Contains the static web files (index.html, style.css, script.js).
*   `/telegram-bot`: Contains the backend logic and Node.js configuration.

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/password-generator.git
cd password-generator
```

2. Run the Web Version

Simply open the index.html file in any modern web browser.

3. Run the Telegram Bot

Navigate to the bot directory:
```Bash

cd telegram-bot
```

Install the required dependencies:
```Bash

npm install
```

4. Configure Environment Variables

Create a .env file in the telegram-bot directory based on the example:
```Bash

cp .env.example .env
```

Open the .env file and add your Telegram Bot Token obtained from BotFather:
```
API_KEY=your_actual_telegram_token_here
```

5. Launch the Bot

Start the application:
``` Bash

node bot.js
```

## Future Improvements

1.  **Bot:** Implement inline keyboards for detailed configuration (length, character types) within the chat.

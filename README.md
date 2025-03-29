<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="My-Spotify.png" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# MY-SPOTIFY

<em>Streamline your music journey, discover effortlessly.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/Mavrokai/My-Spotify?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/Mavrokai/My-Spotify?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Mavrokai/My-Spotify?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Mavrokai/My-Spotify?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

My-Spotify is a powerful developer tool designed to streamline the creation of music applications, offering a comprehensive setup for both backend and frontend development.

**Why My-Spotify?**

This project simplifies the development process for music applications by providing essential tools and features. The core features include:

- 🎵 **Database Initialization:** Quickly set up your music database with a ready-to-use schema and data.
- 🔧 **Dependency Management:** Ensure consistent library versions across environments to minimize bugs.
- 📦 **Multi-Container Setup:** Easily orchestrate services with Docker for a seamless development experience.
- 📊 **Performance Monitoring:** Capture key metrics to optimize user experience effectively.
- 🎨 **Responsive UI Components:** Build engaging interfaces with modern React components and styles.
- 🧭 **Seamless Navigation:** Enhance usability with intuitive navigation through the Navbar and Sidebar components.

---

## Project Structure

```sh
└── My-Spotify/
    ├── data
    │   ├── #ib_16384_0.dblwr
    │   ├── #ib_16384_1.dblwr
    │   ├── #innodb_redo
    │   ├── #innodb_temp
    │   ├── auto.cnf
    │   ├── binlog.000001
    │   ├── binlog.000002
    │   ├── binlog.index
    │   ├── ca-key.pem
    │   ├── ca.pem
    │   ├── client-cert.pem
    │   ├── client-key.pem
    │   ├── ib_buffer_pool
    │   ├── ibdata1
    │   ├── ibtmp1
    │   ├── mysql
    │   ├── mysql.ibd
    │   ├── mysql.sock
    │   ├── mysql_upgrade_history
    │   ├── performance_schema
    │   ├── private_key.pem
    │   ├── public_key.pem
    │   ├── server-cert.pem
    │   ├── server-key.pem
    │   ├── spotify
    │   ├── sys
    │   ├── undo_001
    │   └── undo_002
    ├── docker-compose.yml
    ├── my_spotify_db.sql
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.js
        ├── App.test.js
        ├── components
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        ├── setupTests.js
        └── styles
```

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** CSS
- **Package Manager:** Npm
- **Container Runtime:** Docker

### Installation

Build My-Spotify from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Mavrokai/My-Spotify
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd My-Spotify
    ```

3. **Install the dependencies:**

**Using [docker](https://www.docker.com/):**

```sh
❯ docker build -t Mavrokai/My-Spotify .
```
**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [docker](https://www.docker.com/):**

```sh
docker run -it {image_name}
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

My-spotify uses the {__test_framework__} test framework. Run the test suite with:

**Using [docker](https://www.docker.com/):**

```sh
echo 'INSERT-TEST-COMMAND-HERE'
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

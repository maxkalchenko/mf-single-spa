# Micro Frontends with Single SPA

This project demonstrates how to implement micro frontends using the Single SPA

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```
/mf-single-spa
 ├── mf-ex-client-angular/          # Remote client angular application
 ├── mf-ex-client-react/            # Remote client react application
 ├── mf-ex-client-vue/              # Remote client vue application
 ├── mf-ex-root/                    # Host application
 │  ├── back-end/                   # Server application for identification
 │  ├── front-end-navigation/       # Client application for the sidebar
 │  ├── front-end-root/             # Root single-spa application
 │  ├── front-end-topbar/           # Client application for the topbar
 │  ├── front-end-utils/            # Client application for various shared utils
 │  ├── nginx/                      # Proxy configuration
 │  ├── docker-compose.yml          # Docker setup
 │  └── README.md                   # Readme file
 │
 ├── mf-ex-server-angular/          # Remote server angular application
 ├── mf-ex-server-react/            # Remote server react application
 ├── mf-ex-server-vue/              # Remote server vue application
 └── README.md                      # This file
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

To set up both applications, follow these steps:

1. Clone this repository

2. Run each app separately

## Contributing

Feel free to contribute by submitting a pull request. Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License.

---

### Additional Notes

- Make sure ports are free on your machine.
- This project can be extended by adding more micro frontends or increasing the complexity of shared modules.

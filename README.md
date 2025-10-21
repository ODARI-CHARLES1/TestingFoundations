# 7. Fundamentals of Unit Testing

A TypeScript project demonstrating fundamental concepts of unit testing using Jest. This project serves as a practical guide to understanding and implementing unit tests for basic functions, including authentication logic and mathematical operations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Features

- **Basic Mathematical Operations**: Implementation and testing of simple arithmetic functions like product calculation.
- **User Authentication**: Simulated authentication logic with comprehensive test coverage.
- **Jest Matchers**: Examples of various Jest matchers including equality, numeric, truthiness, array, and object matchers.
- **Test Organization**: Demonstrates test suites, individual test cases, and the Arrange-Act-Assert (AAA) pattern.
- **Jest Hooks**: Usage of `beforeAll`, `beforeEach`, and other Jest lifecycle hooks.
- **TypeScript Integration**: Full TypeScript support with type definitions and interfaces.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 7.fundamentals-unit-testing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

## Usage

### Development
Run the development server with hot reloading:
```bash
npm run dev
```

### Building
Compile TypeScript to JavaScript:
```bash
npm run build
```

### Running
Build and run the compiled JavaScript:
```bash
npm run start
```

## Project Structure

```
├── src/
│   ├── index.ts          # Main entry point
│   ├── basic.ts          # Core functions (product, authenticateUser)
│   └── authData.ts       # TypeScript interfaces for authentication data
├── __tests__/
│   └── basic.test.ts     # Comprehensive test suite
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.ts        # Jest testing configuration
└── README.md             # Project documentation
```

## Testing

This project includes extensive unit tests demonstrating various Jest features and best practices.

### Running Tests
Execute the test suite with coverage:
```bash
npm run test
```

### Test Coverage
The tests cover:
- Basic function testing (product calculation)
- Authentication logic validation
- Jest matcher demonstrations:
  - Equality matchers (`toBe`, `toEqual`)
  - Numeric matchers (`toBeLessThan`, `toBeGreaterThan`, etc.)
  - Truthiness matchers (`toBeTruthy`, `toBeFalsy`, etc.)
  - Array and object matchers (`toContain`, `toHaveProperty`, etc.)
- Test organization patterns (Arrange-Act-Assert)
- Jest hooks (`beforeAll`, `beforeEach`)

### Key Testing Concepts Demonstrated

1. **Unit Testing Basics**: Testing individual functions in isolation
2. **Test Structure**: Using describe blocks and it/test functions
3. **Matchers**: Comprehensive examples of Jest's assertion library
4. **Hooks**: Setup and teardown with Jest lifecycle methods
5. **Mocking**: (Future extension - not currently implemented)
6. **Coverage**: Generating test coverage reports

## Scripts

- `npm run dev` - Start development server with tsx watch
- `npm run build` - Compile TypeScript
- `npm run start` - Build and run the application
- `npm run test` - Run Jest tests with coverage

## Contributing

This is an educational project demonstrating unit testing fundamentals. For learning purposes:

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

This project is for educational purposes. Feel free to use and modify as needed for learning unit testing concepts.

## Follow me

[![GitHub followers](https://img.shields.io/github/followers/CharlesOdari?label=Follow&style=social)](https://github.com/ODARI-CHARLES1)  
[![Portfolio](https://img.shields.io/badge/Portfolio-View-blue?logo=google-chrome)](https://charles.k.odari.portfolio.thegtm.or.ke/)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://ke.linkedin.com/in/odari-kibisi-charles-329b19331)  
[![Email](https://img.shields.io/badge/Email-Contact-red?logo=gmail)](mailto:daymondodari68@gmail.com)  

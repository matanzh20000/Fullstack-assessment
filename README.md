# Fullstack-assessment
Earnix's Student Full-stack Developer home assessment. Designing test cases with Cypress implemented with Page Object Model design pattern.

## Why Cypress
After evaluating various testing and automation tools for React-based applications, I chose Cypress as the most suitable solution for this assessment. Cypress provides:
- Visual and interactive debugging tools, which greatly simplify the development and troubleshooting of test cases.
- Unlike Selenium, Cypress runs directly in the browser, giving it native access to the DOM and React-rendered components. This results in more reliable, faster, and easier-to-maintain tests, without the need for manual waits or complex configurations.
- While Playwright offers powerful features and multi-browser support, its learning curve and setup overhead made it less suitable for this task, which required rapid iteration and a streamlined workflow.

Overall, Cypress enabled an efficient and enjoyable experience in designing and debugging tests for the React application, while aligning well with the Page Object Model pattern and the goals of the project.


## Overview
This repository contains a set of E2E tests for the official [React.dev](https://react.dev) webpage, designed on WSL enviroment. These tests cover:
- HTML tags visibility
- Dark/light theme toggle and persistence through `localStorage`
- Keyboard Navigation and shortcuts 
- Search functionality (typing, show results, save to favorites)
- Layout responsiveness across different devices
- Custom Cypress commands and cross-platform support

## Setup Instructions (tested on Ubuntu 20.04)
1. Clone this repository onto your local machine.
   ```bash
   git clone https://github.com/<yourusername>/Fullstack-assessment.git
2. Navigate to /src folder and install dependencies stored in package.json
   ```bash
   npm install
3. Open Cypress debugging GUI, and choose "E2E Testing" in your desired browser
   ```bash
   npx cypress open
4. Run tests in desired test suites through the Cypress GUI 

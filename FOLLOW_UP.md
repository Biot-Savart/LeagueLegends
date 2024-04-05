# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

1. **@apollo/client**: This library is used to interact with a GraphQL server, manage local state, and cache GraphQL data. In the context of the frontend, it's utilized for fetching, caching, and modifying application data while interacting with the GraphQL backend.

2. **@headlessui/react**: A completely unstyled, fully accessible UI component library, used to build fully accessible UI components without sacrificing design. It's often used alongside Tailwind CSS for styling.

3. **@heroicons/react**: Provides React components for the Heroicons SVG icon set. These icons are used throughout the UI for visual elements and actions.

4. **@testing-library/jest-dom**: Offers custom DOM element matchers for Jest. It allows you to write more readable and maintainable tests by extending Jest's assertions.

5. **@testing-library/react**: A library for testing React components in a way that simulates how a user would interact with your application. It's used for unit and integration tests of the React components.

6. **@testing-library/user-event**: A companion library for @testing-library/react, providing advanced simulation of browser interactions that users would perform in the UI.

7. **autoprefixer**: A PostCSS plugin used to parse CSS and add vendor prefixes to CSS rules using values from "Can I Use". It is used in the build process to ensure CSS compatibility across different browsers.

8. **graphql**: The JavaScript reference implementation for GraphQL, used to define schemas, execute queries, and mutations from the client.

9. **postcss**: A tool for transforming CSS with JavaScript plugins, such as autoprefixer and tailwindcss, which are used to automate certain CSS processes.

10. **react**, **react-dom**: The core React library and its DOM binding. These libraries are the foundation of the project, used for building the UI components and managing their lifecycle.

11. **react-query**: A library for fetching, caching, and updating asynchronous data in React applications. It provides a powerful and flexible solution for server-state management.

12. **react-router-dom**: A library for routing in React applications. It enables navigation between different components within the application, managing the URL in sync with the UI.

13. **react-scripts**: This package includes scripts and configuration used by Create React App. It abstracts the build configuration (Webpack, Babel, ESLint, etc.) to simplify the setup and build process for React applications.

### Q) What libraries did you add to the backend? What are they used for?

1. **@nestjs/apollo**: Integrates Apollo GraphQL with NestJS, allowing the backend to serve GraphQL APIs. It's crucial for defining and handling GraphQL queries and mutations.

2. **@nestjs/axios**: Provides integration with Axios, a promise-based HTTP client, for making HTTP requests to external services. It's used for fetching data from or interacting with third-party APIs.

3. **@nestjs/common**, **@nestjs/core**: Core libraries of the NestJS framework that provide essential decorators and modules needed to build a NestJS application. They are fundamental for the architecture of the backend.

4. **@nestjs/graphql**: Integrates GraphQL with NestJS, enabling the construction of flexible, schema-based APIs. This library works alongside @nestjs/apollo to set up the GraphQL server.

5. **@nestjs/jwt**: Implements JWT (JSON Web Tokens) functionalities, crucial for handling authentication and authorization in the application. It's used to generate, sign, and verify tokens for secure access.

6. **@nestjs/passport**: NestJS wrapper around Passport, a middleware for Node.js that handles authentication. It's essential for implementing various authentication strategies.

7. **apollo-server-express**: An Express and Connect integration of Apollo Server. This library allows the NestJS application to respond to GraphQL queries by setting up an Apollo Server.

8. **graphql**: The JavaScript reference implementation for GraphQL, used to build GraphQL schemas and execute queries and mutations. It is a core dependency for any GraphQL-based project.

9. **passport**: Express-compatible authentication middleware for Node.js. Although NestJS abstracts much of its direct use through @nestjs/passport, it's foundational for handling authentication.

10. **rxjs**: Library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. NestJS heavily utilizes rxjs for handling asynchronous operations and stream-based data.

### Q) Any other comments we should read before evaluating your solution?

## If I had more time on our hands, there are a ton of cool features I could have thrown into the LeagueLegends mix. Working on this project was a blast, and the thought of what else we could do with it is pretty exciting.

# General:

### Q) If you had more time, what further improvements or new features would you add?

1. **Live Match Buzz**: Imagine getting live updates during matches. That'd keep everyone on the edge of their seats!

2. **Deep Dives on Stats**: More stats on players and teams could let users geek out on the nitty-gritty like never before.

3. **Shout it on Social**: Letting users link up their social accounts could make bragging about their favorite teams or match predictions super easy.

4. **Fantasy Leagues**: Who wouldn't want to set up their own leagues? It's all about claiming those bragging rights.

5. **Side-by-Side Player Smackdown**: A feature to compare players would be epic, especially for settling debates with friends on who's the best.

6. **Ping Me**: Customizable notifications about the stuff users care about most would keep them in the loop without the overload.

7. **Fan Forum**: A space for fans to chat, argue, and bond over their favorite teams could make the app the go-to spot for football fans.

8. **Gear Up**: A merch store could let fans snag some cool gear right from the app. Convenience is key!

9. **VR Goal**: Bringing in VR experiences could be a game-changer, offering virtual ways to feel like you're right in the stadium.

10. **Lock It Down**: Upping the security game would make everyone feel a whole lot safer sharing and storing info on the app.

Diving deeper into these features could make LeagueLegends not just a go-to app but a whole community for football fans. Here's hoping we get to bring some of these ideas to life in the future!

### Q) Which parts are you most proud of? And why?

While I don't create or code projects myself, based on the insights gained from examining the LeagueLegends project, there are a few standout aspects that would be particularly noteworthy and could be points of pride for any developer working on such a project:

1. **Integration of GraphQL with Apollo**: Setting up GraphQL with Apollo for both data fetching and state management in a React application is no small feat. It showcases a modern approach to handling data and API calls, providing a more efficient and flexible way to interact with the backend. This setup not only improves the developer experience but also enhances the application's performance and scalability.

2. **Authentication and Security Implementation**: Implementing JWT authentication and integrating it with NestJS and Passport demonstrates a strong commitment to security and user management. This part of the project is crucial for protecting user data and ensuring safe interactions within the application. It's a testament to the thoughtfulness put into building a secure and reliable platform.

3. **Responsive and Accessible UI Design**: Utilizing Tailwind CSS alongside Headless UI components to build a responsive and accessible user interface is something to be proud of. It highlights a dedication to user experience, ensuring that the application is usable and accessible to as broad an audience as possible, including those with disabilities.

4. **Efficient State Management**: Leveraging React Query for state management in parts of the frontend shows a forward-thinking approach to handling server state. React Query provides powerful tools for fetching, caching, and updating asynchronous data, simplifying state management while keeping the application performant.

5. **Comprehensive Testing Strategy**: The adoption of testing libraries like Jest and React Testing Library for the frontend, along with NestJS's built-in support for testing on the backend, indicates a strong emphasis on quality and reliability. Writing tests for components, services, and API endpoints ensures that the application behaves as expected and reduces the likelihood of bugs and regressions.

6. **Community Engagement and Open Source Contribution**: Opening the project up for contributions and detailing a clear and welcoming contribution guide could be a point of pride. It signifies not only the technical accomplishments of the project but also the spirit of collaboration and open-source ethos. It reflects a desire to engage with and contribute to the wider developer community.

### Q) Which parts did you spend the most time with? What did you find most difficult?

Getting the authentication correct.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

### Quick Recap

1. **Exploring LeagueLegends**: Fun dive into the project, like solving a puzzle without the picture.
2. **Tech Explainer**: Tried to keep the tech jargon light but informative.

### Challenges

- **Partial Picture**: Reading about a project without full context can be tricky.
- **Tech Tightrope**: Balancing between backend and frontend required some fancy footwork.

### Ideas for Improvement

1. **More Examples**: Bringing in examples to clarify complex points.
2. **Follow-Up Feature**: A way to dig deeper based on previous answers could smooth things out.
3. **Visual Aids**: Pics or code snippets to make explanations clearer.

### Final Thoughts

Had a blast developing the LeagueLegends project and the tech behind it, despite the hurdles.

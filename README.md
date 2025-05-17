# React + Vite + Typescript + Material UI + Redux Toolkit Starter Application

## Introduction

This is a modern, production-ready starter template that combines the power of React with a carefully selected stack of technologies and best practices. It's designed to help you kickstart your next React project with a solid foundation and modern development practices.

### Tech Stack

- **React 18+** - Latest version of React with concurrent features
- **TypeScript** - For type-safe development
- **Material UI** - For beautiful, consistent UI components
- **Redux Toolkit** - For efficient state management
- **Redux Persist** - For persisting Redux state across page reloads
- **RTK Query** - For efficient data fetching and caching
- **Vite** - For lightning-fast development and building

### Key Features

- 🚀 **Modern Development Setup**
  - Hot Module Replacement (HMR)
  - TypeScript configuration optimized for React
  - Path aliases for cleaner imports
  - ESLint + Prettier for code quality

- 🎨 **UI/UX**
  - Material UI components and theming
  - Responsive design patterns
  - Loading states and error handling
  - Consistent styling approach

- 📦 **State Management**
  - Redux Toolkit for predictable state updates
  - RTK Query for efficient data fetching
  - Redux Persist for state persistence
  - Type-safe actions and reducers

- 🧪 **Testing**
  - Vitest for unit testing
  - React Testing Library for component testing
  - Test coverage reporting
  - Mock service worker for API mocking

- 🔧 **Developer Experience**
  - Pre-configured ESLint and Prettier
  - Git hooks with Husky
  - VS Code recommended extensions
  - Comprehensive documentation

This app uses:

- **React**
- **Typescript**
- **Material UI**
- **Redux Toolkit**
- **Redux Persist**


## Notes

- All components and UI elements are from the Material UI library.

## Setup

```bash
npm install
npm run dev
```
> TypeScript Types Update
> Pagination Event Handler Fix

## Project Structure and Best Practices

Previously, most of the application logic was contained in a single file. To follow best practices, the codebase has been refactored to be modular, scalable, and easier to maintain.

> Updated File Structure

```txt
src/
├── components/
│ ├── CharacterCard/
| |      ├── CharacterCard.styles.ts
| |      ├── CharacterCard.tsx
| |      └── CharacterCard.test.tsx
│ └── App/
├── features/
│ └── characters/
│       ├── charactersAPI.ts # RTK Query service for fetching characters
│       └── charactersSlice.ts # Character-related state management (optional)
├── hooks/
│ └── usePagination.ts
└── styles.css
```

**_Key Improvements_**

- **Modular & Scalable:**

  Components are organized into their own folders under /components. Features like characters have their dedicated API and slice files.

- **Separation of Concerns:**

  UI components, data fetching, and state management are clearly separated.

- **Ease of Testing:**

  APIs and slices are isolated, making them easier to unit test.

- **Reusability:**

  RTK Query endpoints are reusable across multiple components, reducing redundancy.

- **Pagination Handling:**

  Pagination logic is separated into a custom hook (usePagination).

- **Loading State and Fault Tolerance:**

  Graceful error handling has been added for API failures. I've implemented comprehensive error handling for the API. Added Error Display component.

  - **ErrorDisplay Component:**

    A reusable component that shows user-friendly error messages
    Handles different types of errors (network, parsing, server)
    Includes a retry button for failed requests
    Uses Material-UI's Alert component for consistent styling.

    ```html
    <ErrorDisplay error="{error}" onRetry="{refetch}" />
    ```

    - Reusable error display
    - Retry button on failure

  - **API Error Handling Updates:**
    - Added retry logic with maxRetries: 3
    - Proper error transformation for different error types
    - Added proper headers for API requests
    - Error messages are user-friendly and descriptive
      - Network errors (no internet connection)
      - Server errors (different HTTP status codes)
      - Parsing errors (invalid JSON responses)
      - Unexpected errors

- **App Component Updates:**

      - Integrated the ErrorDisplay component
      - Added proper loading state
      - Improved layout and styling
      - Replaced the current data-fetching method with RTK Query
      - Added retry functionality
      - Pagination using custom Hook

- **Consistent Styling and best practices:**

  Styling is either handled using MUI's sx prop or organized using styled components.

**Styling Best Practices**

- **Separated Styles:**

Use a dedicated .styles.ts file for styled components.

- **Removed Inline Styles:**

Inline sx props are replaced with reusable styled components.

- **Better Type Safety:**

Components like StatusDot are properly typed with TypeScript.

- **Simplified Components:**

  - Main component files focus solely on rendering and structure.

- **Reusable Styled Components:**

  - Styled components are modular and can be reused elsewhere.

- **VS Code Configuration:**

  - This project includes a recommended Visual Studio Code setup for enhanced productivity:

- **Added VS code config for recommended extensions:**

  See .vscode/extensions.json — e.g., Prettier for automatic code formatting.

- **Added Prettier:**

  - Setup Prettier for Automatic formatting on save, fixing common formatting issues like inconsistent indentation.

- **Testing Setup:**

  Testing has been configured using Vitest and Testing Library.

  - Added Test Dependencies

    ```txt
    @testing-library/react (v14.2.1) // React component testing
    @testing-library/jest-dom (v6.4.2) // Extended DOM matchers
    @testing-library/user-event (v14.5.2) // Simulated user interactions
    @vitest/coverage-v8 (v1.3.1) // Coverage reporting
    @vitest/ui (v1.3.1) // Visual test runner
    vitest (v1.3.1) // Main test framework
    jsdom (v24.0.0) // Browser environment simulation
    ```

  - Added Test Scripts

    ```txt
        "scripts": {
            ...
            "test": "vitest",
            "test:ui": "vitest --ui",
            "test:coverage": "vitest run --coverage",
            "test:watch": "vitest watch"
        }
    ```

  - Global Setup Test Files

    - src/test/setup.ts — Sets up global testing environment with Jest DOM and cleanup.

  - Test Utilities

    - src/test/test-utils.tsx — Provides a custom render function with Redux store integration.

  - Added Components and test for charactersAPI:

    - src/components/App/App.test.tsx — Tests App component (loading, pagination).

    - src/components/CharacterCard/CharacterCard.test.tsx — Tests CharacterCard rendering and props.

    - src/features/characters/charactersAPI.test.ts - Test charactersAPI, Mock responses: Simulates different API responses, Redux store integration, Error handling ...

  - Added Test Coverage

    - Coverage reports generated in text, JSON, and HTML.

- **Path Aliases**

  - Configured Path Aliases for Simplified Imports (configured via tsconfig.json and vite.config.ts - vite-tsconfig-paths)

- **TypeScript and ESLint Configuration**

  - **TypeScript Configuration**

    - Strict type checking enabled
    - Enhanced type safety with additional checks:

      ```json
      {
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "noUncheckedIndexedAccess": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true
      }
      ```

    - Path aliases for cleaner imports
    - Module resolution configured for modern JavaScript

  - **ESLint Configuration**

    - Modern flat config system
    - TypeScript-aware linting
    - React and React Hooks rules
    - Accessibility rules (jsx-a11y)
    - Integration with Prettier
    - Common rules for React and TypeScript development
    - Browser and Web API globals properly configured

  - **Available Scripts**

    ```bash
    # Run ESLint
    npm run lint

    # Fix ESLint errors automatically
    npm run lint:fix

    # Check TypeScript types
    npm run type-check
    ```

**Benefits of This Setup**

- Modular and scalable project structure
- Type-safe with strict TypeScript rules
- Consistent code style enforced with Prettier
- Robust testing setup with unit, integration, and interaction testing
- Theme-aware styling using MUI's best practices (styled component)

## Data-fetching method with RTK Query

After refactoring:

- Move the API-related logic into src/features/characters/charactersAPI.ts
- Create RTK Query service for charactersAPI
- Remove unecessary useEffect and replace with RTK Query and its cache mechanisms using hook for better handle server state

Previous approach (replaced):

```ts
useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .then(data => setResults(data.results));
  // Fix pass page to depandancy here to intercept page change
}, [page]);
```

## What next?

- Handle Character details on click page (modal)
- Add global error boundaries
- Implement skeleton loaders
- Optimize pagination for infinite scrolling
- Improve API retry strategies
- Add E2E tests using Cypress or Playwright
- Add Husky for pre-commit hooks
- Deploy

# Bit Components

React Bit components source repository.

The components are uploaded to [Lupine Moon](https://bitsrc.io/lupine-moon) bitsrc account.

## Getting Started

This project uses yarn:

```
yarn install
```

Once the dependencies have been installed you can issue the `npm start` command.

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in development mode.
It will automatically run the app using Electron and supports HMR (Hot Module Reloading).

`npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Bit

Install Bit:

```
npm install bit-bin -g
```

Login to Bit:

```
bit login
```

Add components:

```
bit add src/components/* -t 'src/components/{PARENT}/*.spec.tsx'
```

Check the status of the components:

```
bit status
```

Add the build environment:

```
bit import bit.envs/compilers/typescript --compiler
```

Add the test environment:

```
bit import bit.envs/testers/jest --tester
```

Run the tests:

```
npm run test
```

Tag the components:

```
bit tag --all 1.0.0
```

Export the components to Bit:

```
bit export lupine-moon.interaction
```

## Contribution guidelines

Code reviews are done via pull requests.

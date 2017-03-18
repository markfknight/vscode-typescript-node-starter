# VSCode TypeScript node starter
Starter for developing Node apps in TypeScript with setup for VS Code debugging and optional nodemon.

## Getting started

Fork the repo and clone to your local machine, open a terminal / command line and get base packages

via **npm**
```
    npm install
```

via **[yarn](https://yarnpkg.com)**
```
    yarn
```

## Adding Packages

Open a terminal / command line, add a package

via **npm**
```
    npm install packageName
```

via **yarn**
```
    yarn add packageName
```


If typings are missing/not included with the base packge, the majority of popular npm packages have typing defined on npm under the @types scoping.

Install as dev dependancies:

via **npm**
```
    npm install @types/packageName --save-dev
```

via **yarn**
```
    yarn add @types/packageName -D
```


## Building

Running the Build task in VSCode will compile TypeScript (/src) to es2015 JavaSript (/dist).

Shortcut on Windows/Linux: Ctrl + Shift + B, macOS: Command + Shift + B


## Debugging

Set breakpoints in your Ts code and press F5 to start the debugger, happy debugging!


## Debugging with Nodemon

Nodemon enables live reload of you node application, so when you make a change to code,
the application is restarted.

Nodemon debugging is supported. To enable, install nodemon globally
and uncomment the nodemon section the .vscode/launch.json.

When you wish to debug, use the nodemon debug launch command.

via **npm**
```
    npm install -g nodemon
```

via **yarn**
```
    yarn add global nodemon
```


## Live feedback

Ts imports will work out of the box with [Quokka.js](https://quokkajs.com)

## Running

To run the your code

```
    npm start
```

or
```
    yarn start
```

This copmmand uses ts-node to run your application using your tsconfig.json compile options, running the code without build artifacts.

## Customisations

For editor defaults, adjust editor.config.

To change Ts linting, adjust tslint.json.

Adjust the settings in tsconfig.json to change the compiled output.


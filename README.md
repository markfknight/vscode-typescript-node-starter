# VSCode TypeScript node starter
Starter for developing Node apps in TypeScript with setup for VS Code debugging and optional nodemon.

## Prerequisites

To start, **[node](https://nodejs.org)** is required.

The TypeScript Compiler (tsc) is required in your path, install globally:

via **npm**
```
    npm -g install typescript
```

via **[yarn](https://yarnpkg.com)**
```
    yarn add global typescript
```

## Getting started

Fork the repo and clone to your local machine, open a terminal / command line and get base packages:

via **npm**
```
    npm install
```

via **[yarn](https://yarnpkg.com)**
```
    yarn
```

## Adding 3rd Party Packages

Open a terminal / command line, add a package:

via **npm**
```
    npm install packageName --save
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

Both steps can be completed in one by using [typac](https://github.com/ewgenius/typac)

Install typac globally

via npm
```
    npm install -g typac
```

via yarn
```
    yarn add global typac
```

Install a package using the typac command

e.g.
```
   typac moment
```

typac installs moment as a dependancy and @types/moment as a dev dependancy, via npm or if you have it installed yarn.

## Building

Running the Build task in VSCode will compile TypeScript (/src) to es2015 JavaSript (/dist).

Shortcut on Windows/Linux: Ctrl + Shift + B, macOS: Command + Shift + B

## Debugging

Set breakpoints in your Ts code and press F5 to start the debugger, happy debugging!

## Debugging with [nodemon](https://github.com/remy/nodemon)

nodemon enables live reload of you node application, so when you make a change to code,
the application is restarted.

Nodemon debugging is supported. To enable, install nodemon globally
and uncomment the nodemon section the .vscode/launch.json.

When you wish to debug, use the nodemon debug launch command:

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

To run the your code:

```
    npm start
```

or
```
    yarn start
```

This command uses ts-node to run your application using your tsconfig.json compile options, without compiling to JavaScript files.

## Customisations

For editor defaults, adjust editor.config.

To change Ts linting, adjust tslint.json.

Adjust the settings in tsconfig.json to change the compiled output.


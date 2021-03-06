<h1 align="center" style="border-bottom: none;">⚒️ @epranka/create-tsx-package</h1>

<h3 align="center">[DEPRECATED. See below]</h3>

<h3 align="center">Starter kit for React Typescript module</h3>

<p align="center">
  <a href="">
    <img alt="deprecated" src="https://img.shields.io/badge/!-Deprecated-critical" />
  </a>
        <a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-ISC-blue.svg" />
  </a>
   <a href="https://www.npmjs.com/package/@epranka/create-tsx-package">
    <img alt="npm version" src="https://img.shields.io/npm/v/@epranka/create-tsx-package.svg?style=flat" />
  </a> <a href="https://www.npmjs.com/package/@epranka/create-tsx-package">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/@epranka/create-tsx-package.svg?style=flat" />
  </a> <a href="https://travis-ci.org/epranka/create-tsx-package">
      <img alt="build status" src="https://travis-ci.org/epranka/create-tsx-package.svg?branch=master" />
    </a> <a href="https://travis-ci.org/epranka/create-tsx-package">
      <img alt="ci travis" src="https://img.shields.io/badge/ci-travis-yellow" />
    </a> <a href="https://github.com/semantic-release/semantic-release">
      <img alt="semantic release" src="https://img.shields.io/badge/%E2%9C%A8-semantic--release-e10079" />
    </a> 
</p>

## DEPRECATION

This module supports only TSX package and may have issues. Please use [@epranka/create-package](https://github.com/epranka/create-package) because this module will no longer be maintained.

[@epranka/create-package](https://github.com/epranka/create-package) is clone of this module, but with JS, JSX, TS, TSX support and many improvements.

## Features

- Interactive package creation
- Silent mode
- Package manager selection (yarn or npm)
- Choices of ES, CJS, UMD modules and all together
- Rollup bundler
- Tests
- Semantic Release
- README template with badges
- Continuous integration: Travis
- License selection (ISC, MIT, UNLICENSED)

## Create package

1. With package runners

```bash
$ npx @epranka/create-tsx-package my-package

# or

$ yarn create @epranka/tsx-package my-package
```

2. Install globally

```bash
$ npm install -g @epranka/create-tsx-package

# or

$ yarn global add @epranka/create-tsx-package

# and then use

$ create-tsx-package my-package

```

If automated semantic releases are selected, package generation will take longer

## CLI Help

```
Usage:
  $ create-tsx-package [out-dir]

Commands:
  [out-dir]  Generate in a <out-dir> or current directory

For more info, run any command with the `--help` flag:
  $ create-tsx-package --help

Options:
  -i, --info             Print out debugging information relating to the local environment
  -s, --silent           Silent mode. Create package without user interaction
  --name <name>          Name of the package
  --description <name>   Description of the package
  --author <fullname>    Author of package <fullname>
  --email <email>        <email> of author
  --mit                  MIT license. Default is ISC
  --umd <GlobalName>     Build UMD module with <GlobalName>
  --unlicensed           Unlicensed. This option overrides --mit option
  --no-private           No private:true property in package.json (default: true)
  --no-es                Don't build ES Module (default: true)
  --no-travis            Don't use travis ci. (default: true)
  --no-tests             Don't use tests (default: true)
  --no-semantic-release  Don't use semantic release (default: true)
  --npm                  Use NPM package manager. Default is YARN
  --verbose              Show debug logs
  -h, --help             Display this message
  -v, --version          Display version number
```

## Structure

Created package will have following structure (if tests, Semantic Release and Travis is selected)

```
my-package
├── src
│   └── index.tsx
├── __tests__
│   └── index.spec.tsx
├── node_modules
├── jest.config.js
├── LICENSE
├── package.json
├── README.md
├── rollup.config.js
├── tsconfig.json
├── tslint.json
└── yarn.lock
```

## Build

```bash
  # to build

  $ npm run build

  # or

  $ yarn build


  # to watch changes

  $ npm run watch

  # or

  $ yarn watch
```

## Badge

Let people know that your package is generated using **@epranka/create-tsx-package** by including this badge in your readme

<a href="https://github.com/epranka/create-tsx-package">
  <img alt="generated with" src="https://img.shields.io/badge/generated%20with-%40epranka%2Fcreate--tsx--package-blue" />
</a>

Using Markdown

```
[![generated with @epranka/create-tsx-package](https://img.shields.io/badge/generated%20with-%40epranka%2Fcreate--tsx--package-blue)](https://github.com/epranka/create-tsx-package)
```

Using HTML

```
<a href="https://github.com/epranka/create-tsx-package">
  <img alt="generated with" src="https://img.shields.io/badge/generated%20with-%40epranka%2Fcreate--tsx--package-blue" />
</a>
```

## Author

Edvinas pranka ([epranka@gmail.com](mailto:epranka@gmail.com))

Follow on Twitter [@epranka](https://twitter.com/epranka)

https://www.kodmina.lt

## License

ISC License

Copyright (c) 2019, Edvinas Pranka (epranka@gmail.com)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

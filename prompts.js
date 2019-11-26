const getRepositoryURL = require("./utils/repository");
const { random } = require("superb");

const { options } = global["parsedArgs"];
let license = "isc";
if (options["mit"]) {
  license = "mit";
}
if (options["unlicensed"]) {
  license = "unlicensed";
}
const author = options.author;
const email = options.email;
const umdBuild = !!options.umd;
const umdName = options.umd;
const esBuild = options.es;
const useTravis = options.travis;
const useTests = options.tests;
const useSemanticRelease = options["semantic-release"];
const useNPM = options["npm"];

module.exports = [
  {
    name: "name",
    message: "Package name",
    default: "{outFolder}"
  },
  {
    name: "description",
    message: "Package description",
    default: `My ${random()} TSX package`
  },
  {
    name: "author",
    message: "Full name of package author",
    default: author
  },
  {
    name: "email",
    message: "Email of package author",
    default: email
  },
  {
    name: "license",
    message: "Select license",
    choices: [
      {
        name: "ISC",
        value: "isc"
      },
      {
        name: "MIT",
        value: "mit"
      },
      {
        name: "Unlicensed",
        value: "unlicensed"
      }
    ],
    type: "list",
    default: license
  },
  {
    name: "pm",
    message: "Choose the package manager",
    choices: [
      { name: "Yarn", value: "yarn" },
      { name: "Npm", value: "npm" }
    ],
    type: "list",
    default: useNPM ? "npm" : "yarn"
  },
  {
    name: "umd",
    message: "Build to UMD module for browsers (CommonJS is default) ?",
    type: "confirm",
    default: umdBuild
  },
  {
    name: "umd_name",
    message:
      "What is a global name of your package in browser (e.g. React, ReactDOM) ?",
    default: umdName,
    when: answers => {
      if (answers["umd"]) return true;
      return false;
    }
  },
  {
    name: "es",
    message: "Build to ES Module ?",
    type: "confirm",
    default: esBuild
  },
  {
    name: "tests",
    message: "Use unit tests ?",
    type: "confirm",
    default: useTests
  },
  {
    name: "semanticrelease",
    message: "Use automatic semantic releases ?",
    type: "confirm",
    default: useSemanticRelease
  },
  {
    name: "travis",
    message: "Use Travis ?",
    type: "confirm",
    default: useTravis
  },
  {
    name: "repository",
    message: "Respository URL",
    default: getRepositoryURL()
  }
];

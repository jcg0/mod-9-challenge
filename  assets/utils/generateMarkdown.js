// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === "MIT") {
  //   return ``;
  // }
  // switch (license) {
  //   case "Apache License 2.0":
  //     showBadge =
  //       "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  //     break;
  //   case "GNU General Public License v3.0":
  //     showBadge =
  //       "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  //     break;
  //   case "MIT License":
  //     showBadge =
  //       "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  //     break;
  //   case "BSD 2-Clause 'Simplified' License":
  //     showBadge =
  //       "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
  //     break;
  //   case "BSD 3-Clause 'New' or 'Revised' License":
  //     showBadge =
  //       "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  //     break;
  //   case "Boost Software License 1.0":
  //     showBadge =
  //       "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  //     break;
  //   case "Creative Commons Zero v1.0 Universal":
  //     showBadge =
  //       "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
  //     break;
  //   case "Eclipse Public License 2.0":
  //     showBadge =
  //       "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
  //     break;
  //   case "GNU Affero General Public License v3.0":
  //     showBadge =
  //       "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
  //     break;
  //   case "GNU General Public License v2.0":
  //     showBadge =
  //       "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  //     break;
  //   case "GNU Lesser General Public License v3.0":
  //     showBadge =
  //       "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
  //     break;
  //   case "Mozilla Public License 2.0":
  //     showBadge =
  //       "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  //     break;
  //   case "The Unlicense":
  //     showBadge =
  //       "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  //     break;
  //   default:
  //     "";
  // }
  // return `${showBadge}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let licenseUrl;
  // switch (license) {
  //   case "Apache License 2.0":
  //     licenseUrl = "https://opensource.org/licenses/Apache-2.0";
  //     break;
  //   case "GNU General Public License v3.0":
  //     licenseUrl = "https://www.gnu.org/licenses/gpl-3.0";
  //     break;
  //   case "MIT License":
  //     licenseUrl = "https://opensource.org/licenses/MIT";
  //     break;
  //   case "BSD 2-Clause 'Simplified' License":
  //     licenseUrl = "https://opensource.org/licenses/BSD-2-Clause";
  //     break;
  //   case "BSD 3-Clause 'New' or 'Revised' License":
  //     licenseUrl = "https://opensource.org/licenses/BSD-3-Clause";
  //     break;
  //   case "Boost Software License 1.0":
  //     licenseUrl = "https://www.boost.org/LICENSE_1_0.txt";
  //     break;
  //   case "Creative Commons Zero v1.0 Universal":
  //     licenseUrl = "http://creativecommons.org/publicdomain/zero/1.0/";
  //     break;
  //   case "Eclipse Public License 2.0":
  //     licenseUrl = "https://opensource.org/licenses/EPL-2.0";
  //     break;
  //   case "GNU Affero General Public License v3.0":
  //     licenseUrl = "https://www.gnu.org/licenses/agpl-3.0";
  //     break;
  //   case "GNU General Public License v2.0":
  //     licenseUrl = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  //     break;
  //   case "GNU Lesser General Public License v3.0":
  //     licenseUrl = "https://www.gnu.org/licenses/lgpl-3.0";
  //     break;
  //   case "Mozilla Public License 2.0":
  //     licenseUrl = "https://opensource.org/licenses/MPL-2.0";
  //     break;
  //   case "The Unlicense":
  //     licenseUrl = "http://unlicense.org/";
  //     break;
  //   default:
  //     "";
  // }
  // return `License url: ${licenseUrl}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // `${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-purple.svg)](https://opensource.org/licenses/${data.license})
# Title
${data.title}

## Decription
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#credits)
- [License](#licenses)
- [Questions](#questions)
- [Test Instructions](#test)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contribution}

## Licenses
${data.license}

## Test
${data.test}

## Questions
GitHub username link: https://github.com/${data.username}
\nHere is my email account ${data.email} to reach me for additional questions.
`;
}

module.exports = generateMarkdown;

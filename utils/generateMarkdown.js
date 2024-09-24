// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "Apache license 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "Boost Software License 1.0":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      case "BSD 2-clause 'Simplified' license":
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      case "MIT":
        return " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Mozilla Public License 2.0":
        return "https://www.mozilla.org/en-US/MPL/2.0/";
      case "zLib License":
        return "https://www.zlib.net/zlib_license.html";
      case "Eclipse Public License 1.0":
        return " [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      case "Creative Commons Attribution 4.0":
        return " [![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
    }
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "Apache license 2.0":
        return "https://www.apache.org/licenses/LICENSE-2.0";
      case "Boost Software License 1.0":
        return "https://www.boost.org/LICENSE_1_0.txt";
      case "BSD 2-clause 'Simplified' license":
        return "https://opensource.org/license/bsd-2-clause";
      case "MIT":
        return "https://opensource.org/license/mit";
      case "Mozilla Public License 2.0":
        return "https://www.mozilla.org/en-US/MPL/2.0/";
      case "zLib License":
        return "https://www.zlib.net/zlib_license.html";
      case "Eclipse Public License 1.0":
        return "https://www.eclipse.org/org/documents/epl-v10.html";
      case "Creative Commons Attribution 4.0":
        return "https://creativecommons.org/licenses/by/4.0/deed.en";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `
    Distributed under the ${license} license. See ${renderLicenseLink(license)}.
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  GitHub Link: https://github.com/${data.github}
  Email: ${data.email}@gmail.com
 

  ## License   
  ${renderLicenseSection(data.license)}

`;
}

export default generateMarkdown;

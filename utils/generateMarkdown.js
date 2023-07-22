// Consider making all three of these just one function
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    case "Apache": 
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    default:
      "None"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // the data that will be return from this function, be mindful of using MD language for this function.
  // it will potentially be generated directly onto the final readme file.
  return `# ${data.title} #
  
  ## Description
  ${data.description}


  ## Table of Contents ##
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributions](#contributions)
    *[License](#license)
    *[Contact](#contact)
    *[Test](#test)

  ## Installation
  
  ${data.installation} 
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contributions}
  
  ## License
  
  ${data.license}
  
  ## Contact
  
  ${data.username}
  ${data.email}

  ## Test
  ${data.test}
  `;
}

module.exports = generateMarkdown;

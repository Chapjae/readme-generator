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
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    default:
      return ""
  }
}

function renderBadgeInfo(badgeInfo) {
  switch (badgeInfo) {
    case "MIT":
      return "This app is covered under the MIT License."
    case "Perl":
      return "This app is covered under the Perl License."
    case "Apache": 
      return "This app is covered under the Apache License."
    case "IBM":
      return "This app is covered under the IBM License."
    case "Mozilla":
      return "This app is covered under the Mozilla License."
    default:
      return "This app has no licenses."
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // the data that will be return from this function, be mindful of using MD language for this function.
  // it will potentially be generated directly onto the final readme file.
  return `# ${data.title} #
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents 
    
  [Description](#description)<br>
  [Installation](#installation)<br> 
  [Usage](#usage)<br>
  [Contributions](#contributions)<br>
  [License](#license)<br>
  [Contact](#contact)<br>
  [Test](#test)<br>

  ## Installation
  
  ${data.installation} 
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contribution}
  
  ## License
  
  ${renderBadgeInfo(data.badgeInfo)}
  
  ## Contact

  ${data.username}
  ${data.email}

  ## Test
  ${data.tests}
  `;
}

module.exports = generateMarkdown;

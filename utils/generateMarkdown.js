// Get the badge icons for the choices
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

// Get the badge information
function renderBadgeInfo(license) {
  switch (license) {
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

// create the string template for the README using answers passed from index.js
function generateMarkdown(data) {
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
  
  ${renderBadgeInfo(data.license)}
  
  ## Contact

  ${data.username}
  ${data.email}

  ## Test
  ${data.tests}
  `;
}

module.exports = generateMarkdown;

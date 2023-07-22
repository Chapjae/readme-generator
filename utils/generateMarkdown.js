// Consider making all three of these just one function
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case "Perl":
      return "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg))"
    case "Apache": 
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    case "IBM":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
    case "GPL 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    default:
      return "None"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // the data that will be return from this function, be mindful of using MD language for this function.
  // it will potentially be generated directly onto the final readme file.
  return `# ${data.title} #
  
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
  
  ${renderLicenseBadge(data.license)}
  
  ## Contact

  ${data.username}
  ${data.email}

  ## Test
  ${data.tests}
  `;
}

module.exports = generateMarkdown;

// Consider making all three of these just one function

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // the data that will be return from this function, be mindful of using MD language for this function.
  // it will potentially be generated directly onto the final readme file.
  return `# ${data.apptitle}
            ${data.license}
            `;
}

module.exports = generateMarkdown;
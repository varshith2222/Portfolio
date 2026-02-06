const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/resume.pdf');

pdf(dataBuffer).then(function (data) {
    const text = data.text;
    const eduIndex = text.indexOf('EDUCATION');
    const projectsIndex = text.indexOf('PROJECTS');

    const eduSection = text.substring(eduIndex, projectsIndex);

    fs.writeFileSync('education.txt', eduSection);
    console.log('Education section extracted to education.txt');
    console.log('---');
    console.log(eduSection);
}).catch(err => {
    console.error(err);
});

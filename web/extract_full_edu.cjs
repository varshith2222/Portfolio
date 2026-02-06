const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/resume.pdf');

pdf(dataBuffer).then(function (data) {
    const text = data.text;
    const lines = text.split('\n');

    console.log('=== FULL EDUCATION SECTION ===');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.includes('EDUCATION') ||
            line.includes('B.TECH') ||
            line.includes('INTERMEDIATE') ||
            line.includes('GAUTHAMI') ||
            line.includes('SCHOOL') ||
            line.includes('CGPA') ||
            line.includes('Percentage') ||
            line.includes('College') ||
            (i >= 10 && i <= 20)) {
            console.log(i + ': ' + lines[i]);
        }
    }
}).catch(err => {
    console.error(err);
});

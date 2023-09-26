const prompt = require('prompt-sync')();
const fs = require('fs');
const fse = require('fs-extra');

let path = "./history/data.json";
let lastSlashIndex = path.lastIndexOf('/');

let folderName = path.slice(0, lastSlashIndex + 1); // Mengambil bagian dari awal hingga karakter terakhir '/'
let fileName = path.slice(lastSlashIndex + 1); // Mengambil bagian setelah karakter terakhir '/' hingga akhir

// Main function
function writeData(content) {
    if (!fse.existsSync(path)) {
        fs.mkdirSync(folderName, { recursive: true });

        const jsonData = {
            userInput: [content]
        };

        fs.writeFileSync(path, JSON.stringify(jsonData, null, 2), 'utf8'); // Mengonversi objek JSON menjadi string JSON
        console.log('File Succesfully Created.. \n\n\n');
        console.log(jsonData);

    } else {
        const jsonData = fs.readFileSync(path, 'utf8');
        const parsedData = JSON.parse(jsonData);

        parsedData.userInput.push(content);

        if(parsedData.userInput.length > 2){
            parsedData.userInput.shift();
        }

        fs.writeFileSync(path, JSON.stringify(parsedData, null, 2), 'utf8');
        console.log('Data added to the existing file : \n');
        console.log(parsedData);
    }
}

//Get user input and call the function
const data = prompt("Insert data: ");
writeData(data);

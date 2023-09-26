const fse = require('fs-extra');
const prompt = require('prompt-sync')({
    history: require('prompt-sync-history')('data.json', 2)
});

const directory = './history/'; // Adjust the directory path as needed
const fileName = 'data.json';

// Create the parent directory if it doesn't exist
if (!fse.existsSync(directory)) {
    fse.mkdirSync(directory, { recursive: true });
}

let data = prompt("Enter data: ");

function readData() {
    try {
        const data = fse.readFileSync(directory + fileName, 'utf8');
        const jsonObject = JSON.parse(data);
        return jsonObject;
    } catch (err) {
        console.error('Error: ' + err);
        return null;
    }
}

function writeData(dataObject) {
    try {
        const jsonData = JSON.stringify(dataObject, null, 2);
        fse.writeFileSync(directory + fileName, jsonData, 'utf8');
        console.log('Data saved successfully.');
    } catch (err) {
        console.error('Error: XD ' + err);
    }
}

// Read existing data or initialize an empty object
let dataObject = readData() || {};

// Update the data object
dataObject.userInput = data;

// Write the updated data object to the file
writeData(dataObject);

console.log('Data Object:', dataObject);

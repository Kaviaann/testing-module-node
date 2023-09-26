Documentation : 

Using packages :
    - fs
    - fs-extra
    - prompt-sync
    - prompt-sync-history ( useless in this code )

How to fix problem : 

    - use this if u want to separate ur path..
        example :

        let path = "./history/data.json"
        
        //use this
        let lastSindex = path.lastIndexOf('/');

        //separate using this!
        let folderPath = path.slice(0, lastSindex + 1); // take "./history/" from the path!

        let fileName = path.slice(lastSindex + 1) // take "data.json" from the path!

    
    - if u want to use prompt-sync-history.. use this if u want!

        const prompt = require('prompt-sync')({
            history: require('prompt-sync-history')(fileName, maxData)
        });

        //example

        let data = prompt("Insert Data : ");

        prompt.history.save();

    It will save into the "urFileName" path.. example if u place fileName is "data.txt" and u set the maxData inside is 2 then if u add ur answer on the data variable.. then do prompt.history.save() it'll save into the fileName (data.txt) and it contains ur answer.. if u have more than 2 answer in the file.. it will remove the first answer in ur file..


    - if u want to check is the path exist.. and if it dont create the path 

        const fse = require('fs-extra');

        if(!fse.existsSync(path)) {
            fs.mkdir(folderName, { recursive : true }); // recursive making if the path doesn't exist then make it!

            //optional if u want to add file into it!
            fs.writeFileSync(path, data, optional);
        };

    
    - If u want to create .JSON file from object use this!
        
        const jsonData = {
            userInput: [data]
        }

        fs.writeFileSync(path, JSON.stringify(jsonData, null, 2), 'utf8');

    
    - If u want to add a value at the last of array from existing file in JSON

        const jsonData = fs.readFileSync(path, 'utf8');
        const parsedData = JSON.parse(jsonData);

        parsedData.userInput.push(data);

        //if u want to remove the first value if the array lenght is more than the value

        let value = 2;

        if(parsedData.userInput.length > value){
            parsedData.userInput.shift();
        }


Documentation is done..

*Note : 
    Update history :
        26/09/2023

    Added : 
        -

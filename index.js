// imports - Native modules
import {
  writeFile,
  rename,
  unlink,
  appendFile,
  readFile,
  readdir,
} from "node:fs"; // importing various file system modules.

// storing the root directory path.
const directoryPath = "/Documents/Backend_Masai/class_01/node.js_File_Editor";

// Fetching the data from the terminal using process.arv method,
let dataFromTerminal = process.argv;

// Type of operation need to be performed,
let fileOperation = dataFromTerminal[2];

// Which file to be selected,
let fileName = dataFromTerminal[3];

// What type of content or name to be added or changed,
let fileContentOrName = dataFromTerminal[4];

// function to create the file,
function create(fileName, data) {
  if (fileName == undefined || data == undefined) {
    console.log("please enter the details");
  } else {
    writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(
        `The file "${fileName}" successfully created with the data: "${data}"`
      );
    });
  }
}

// function to read the file,
function read(fileName) {
  if (fileName == undefined ) {
    console.log("please enter the details");
  } else {
    readFile(fileName, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
}

// function to append data to file,
function append(fileName, data) {
  if (fileName == undefined || data == undefined) {
    console.log("please enter the details");
  } else {
    appendFile(fileName, data + "\n", "utf8", (err) => {
      if (err) throw err;
      console.log(`Successfully appended the data to the file:"${fileName}"`);
    });
  }
}

// function to rename the file,
function fileRename(fileName, newName) {
  if (fileName == undefined || newName == undefined) {
    console.log("please enter the details");
  } else {
    rename(fileName, newName, (err) => {
      if (err) throw err;
      console.log(`File renamed successfully! to "${newName}"`);
    });
  }
}

// function to delete the file,
function deleteFile(fileName) {
  if (fileName == undefined) {
    console.log("please enter the details");
  } else {
    unlink(fileName, (err) => {
      if (err) throw err;
      console.log(`File with the name "${fileName}" is successfully deleted.`);
    });
  }
}

// function to list the files in the directory,

function listFiles() {
  readdir(directoryPath, "utf8", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // List all files in the directory
    console.log("Files in directory:");
    files.forEach((file) => {
      console.log(file);
    });
  });
}

//Switching the file-operation to be done based on the switch cases,
switch (fileOperation) {
  case "create":
    create(fileName, fileContentOrName);
    break;
  case "read":
    read(fileName);
    break;
  case "append":
    append(fileName, fileContentOrName);
    break;
  case "rename":
    fileRename(fileName, fileContentOrName);
    break;
  case "delete":
    deleteFile(fileName);
    break;
  case "list":
    listFiles();
    break;
  default:
    console.log(`Invalid file operation : '${fileOperation}'`);
}

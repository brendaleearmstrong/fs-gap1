/**
 * 2a.2
 * fs:
 * The fs module provides an API for interacting with the file system. It allows you to read, write, update, and delete files.
 * This module is critical for handling file operations in your Node.js applications.
 * 
 * 2b.2
 */

// fs.js
const fs = require('fs');

// Write a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');

  // Read the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // Delete the file
    fs.unlink('example.txt', (err) => {
      if (err) throw err;
      console.log('File deleted!');
    });
  });
});

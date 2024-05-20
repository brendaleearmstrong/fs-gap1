/**
 * 2a.3
 * path:
 * The path module provides utilities for working with file and directory paths. It can be used to resolve, join, and normalize paths,
 * ensuring that your file paths are handled correctly across different operating systems.
 * 
 * 2b.3
 */

// path.js
const path = require('path');

// Join paths
const joinedPath = path.join(__dirname, 'example', 'file.txt');
console.log('Joined Path:', joinedPath);

// Resolve paths
const resolvedPath = path.resolve('example/file.txt');
console.log('Resolved Path:', resolvedPath);

// Normalize paths
const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log('Normalized Path:', normalizedPath);

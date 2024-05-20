/**
 * This script demonstrates the use of the figlet package to create ASCII art from text.
 * Figlet allows you to convert text into stylized ASCII art.
 */

// Import the figlet module
const figlet = require('figlet');

// Use figlet to create ASCII art for "BRENDA"
figlet('BRENDA', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

// Create ASCII art for "BRENDA" with a different font
figlet.text('BRENDA', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
}, (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

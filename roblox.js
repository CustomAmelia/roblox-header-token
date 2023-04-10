const fs = require('fs');

fetch('https://www.roblox.com/')
  .then(response => {
    // Get the cookies from the response headers
    const cookies = response.headers.get('set-cookie');
    
    // Write the cookies to a file
    fs.writeFile('cookies.txt', cookies, err => {
      if (err) {
        console.error('Error writing cookies:', err);
      } else {
        console.log('Cookies saved to cookies.txt');
      }
    });
  })
  .catch(error => {
    console.error('Error fetching cookies:', error);
  });

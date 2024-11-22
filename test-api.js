const axios = require('axios');

axios.get('https://api-production-2a7d.up.railway.app/greet', {
  params: { name: 'John' }
})
  .then(response => {
    console.log(response.data); // Output: { message: 'Hello, John!' }
  })
  .catch(error => {
    console.error('Error calling the API:', error);
  });

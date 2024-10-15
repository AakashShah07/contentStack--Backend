const contentstack = require('@contentstack/management');

contentstack
  .client({
    authtoken: "bltb00ec8613be67369",  // Use your correct auth token
  })
  .stack({
    api_key: 'blt863838e93292c718',  // Replace with your actual API key
  })
  .contentType('about_us')
  .entry("blte2a4f44b05e9d9ec")
  .fetch()
  .then((response) => {
    console.log('Entry created:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

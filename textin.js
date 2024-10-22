// const contentstack = require('@contentstack/management');

// contentstack
//   .client({
//     authtoken: "bltb00ec8613be67369",  // Use your correct auth token
//   })
//   .stack({
//     api_key: 'blt863838e93292c718',  // Replace with your actual API key
//   })
//   .contentType('about_us')
//   .entry("blte2a4f44b05e9d9ec")
//   .fetch()
//   .then((response) => {
//     console.log('Entry created:', response);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
const contentstack = require('@contentstack/management');
const contentstackClient = contentstack.client();

async function loginToContentstack() {
    try {
        const response = await contentstackClient.login({
            email: 'aakashshah0707@gmail.com',
            password: 'Alfa@1749'
        });
        
        console.log(response.notice);
        console.log(response.user);
    } catch (error) {
        console.error('Login failed:', error);
    }
}

// Call the function to log in
loginToContentstack();



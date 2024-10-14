const contentstack = require('@contentstack/management');

contentstack
  .client({
    authtoken: "bltb00ec8613be67369",  // Use your correct auth token
  })
  .stack({
    api_key: 'blt863838e93292c718',  // Replace with your actual API key
  })
  .contentType('about_us')
  .entry()
  .create({
    entry: {
        organization_name: 'Our Mission Organization',
        mission: 'To achieve excellence through innovation.',
        vision: 'To provide value to the community and empower growth.',
        history: 'Founded in 1905 with a legacy of service.',
        team_members: [
          {
            Name: 'John Doe',
            Role: 'CEO',
            Photo: 'https://fastly.picsum.photos/id/791/200/300.jpg?hmac=Ah_2kp5UqnZv5O0c333s3M4p-FqkCZ6ViRd1V_pAHYk', // You'll need to upload the image separately or use an existing URL
            Bio: 'John has been leading the company for over 10 years.'
          },
          {
            Name: 'Jane Smith',
            Role: 'CTO',
            Photo: 'https://fastly.picsum.photos/id/791/200/300.jpg?hmac=Ah_2kp5UqnZv5O0c333s3M4p-FqkCZ6ViRd1V_pAHYk', // You'll need to upload the image separately or use an existing URL
            Bio: 'Jane is an expert in technology with over 15 years of experience.'
          }
        ]
    },
  })
  .then((response) => {
    console.log('Entry created:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

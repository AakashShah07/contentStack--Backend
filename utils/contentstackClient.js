const Contentstack = require('contentstack');
const dotenv = require('dotenv');

dotenv.config();  // This will load your .env variables

const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
});

module.exports = Stack;

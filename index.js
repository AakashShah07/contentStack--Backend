const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package

const aboutRoutes = require('./routes/aboutRoutes');
const homeRoutes = require('./routes/homeRoutes');
const servicesRoute = require('./routes/serviceRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contentRoutes = require('./routes/contentRoutes');
const visualRoutes = require('./routes/visualRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware to allow all origins
app.use(cors()); // This allows all origins

app.use(express.json());

// Use routes
app.use('/about', aboutRoutes);
app.use('/home', homeRoutes);
app.use('/service', servicesRoute);
app.use('/blog', blogRoutes);
app.use('/content', contentRoutes);
app.use('/visual', visualRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

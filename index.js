const express = require('express');
const dotenv = require('dotenv');
const aboutRoutes = require('./routes/aboutRoutes');
const homeRoutes = require('./routes/homeRoutes')
const servicesRoute = require('./routes/serviceRoutes')
const blogRoutes = require("./routes/blogRoutes")
const contentRoutes = require("./routes/contentRoutes")
const visualRoutes = require("./routes/visualRoutes")
// const servicesRoutes = require('./routes/servicesRoutes');
// const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use routes
app.use('/about', aboutRoutes);
app.use('/home', homeRoutes);
app.use('/service', servicesRoute);
app.use('/blog', blogRoutes);
app.use('/content', contentRoutes);
app.use('/visual', visualRoutes);


// app.use('/services', servicesRoutes);
// app.use('/blogs', blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

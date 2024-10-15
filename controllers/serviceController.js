const Stack = require('../utils/contentstackClient');
const contentstack = require('@contentstack/management');

const getAllServiceContent = async (req, res) => {
    try {
      const Query = Stack.ContentType('servies').Query();
      Query.toJSON().find()
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  // Get a specific "Service Us" entry by ID
  const getServiceContentById = async (req, res) => {
    try {
      const entryId = req.params.id;
      console.log("Entry ID is:", entryId);  
      
      if (!entryId) {
        return res.status(400).send("Entry ID is missing");
      }
      const contentstackClient = contentstack.client({ authtoken: process.env.CONTENTSTACK_AUTH_TOKEN });
     
      const response = await contentstackClient
        .stack({ api_key: process.env.CONTENTSTACK_API_KEY })
        .contentType('servies')  // Use the UID of your Content Type
        .entry(entryId)
        .fetch();
  
      res.status(201).json({ message: "Entry fetch successfully", entry: response });
  
    } catch (error) {
      console.error("Server Error:", error);  // Log server errors
      res.status(500).send("Server Error");
    }
  };


  const createServiceContent = async (req, res) => {
    try {
     
      // Create a Contentstack client instance
      const contentstackClient = contentstack.client({ authtoken: process.env.CONTENTSTACK_AUTH_TOKEN });
      console.log("Token is ",process.env.CONTENTSTACK_MANAGEMENT_TOKEN);
   
  
      // Create a new entry
      const response = await contentstackClient
        .stack({ api_key: process.env.CONTENTSTACK_API_KEY })
        .contentType('servies')  // Use the UID of your Content Type
        .entry()
        .create({ entry: req.body });
  
      res.status(201).json({ message: "Entry created successfully", entry: response });
    } catch (error) {
      console.log("Error is ", error);
      res.status(500).send('Server Error');
    }
  };

  const updateServiceContent = async (req, res) => {
    try {
      const entryId = req.params.id;
    
      const contentstackClient = contentstack.client({ authtoken: process.env.CONTENTSTACK_AUTH_TOKEN });
      console.log("Token is ",process.env.CONTENTSTACK_MANAGEMENT_TOKEN);
      // Prepare the entry data
   
      // Create a new entry
      const response = await contentstackClient
        .stack({ api_key: process.env.CONTENTSTACK_API_KEY })
        .contentType('servies')  // Use the UID of your Content Type
        .entry(entryId)
        .update({entry: req.body });
  
      res.status(201).json({ message: "Entry updated successfully", entry: response });
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  const deleteServiceContent = async (req, res) => {
    try {
      const entryId = req.params.id;
      console.log("Entry ID is:", entryId);  
      
      if (!entryId) {
        return res.status(400).send("Entry ID is missing");
      }
      const contentstackClient = contentstack.client({ authtoken: process.env.CONTENTSTACK_AUTH_TOKEN });
     
      const response = await contentstackClient
        .stack({ api_key: process.env.CONTENTSTACK_API_KEY })
        .contentType('servies')  // Use the UID of your Content Type
        .entry(entryId)
        .delete();
        res.status(201).json({ message: "Entry deleted successfully", entry: response });
  
  
    } catch (error) {
      console.log("Error is ",error)
      res.status(500).send('Server Error');
    }
  };
  
  

  module.exports = {
    getAllServiceContent,
    getServiceContentById,
    createServiceContent,
    deleteServiceContent,
    updateServiceContent
  };
const Stack = require('../utils/contentstackClient');
const Visualsstack = require('@contentstack/management');;

const getAllVisualsVisuals = async (req, res) => {
    try {
      const Query = Stack.ContentType('visuals_content').Query();
      Query.toJSON().find()
        .then(result => {
          res.json(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
        console.log("Error is ", error)
      res.status(500).send('Server Error');
    }
  };
  
  // Get a specific "Visuals Us" entry by ID
  const getVisualsVisualsById = async (req, res) => {
    try {
      const entryId = req.params.id;
      console.log("Entry ID is:", entryId);  
      
      if (!entryId) {
        return res.status(400).send("Entry ID is missing");
      }
      const VisualsstackClient = Visualsstack.client({ authtoken: process.env.VisualsSTACK_AUTH_TOKEN });
     
      const response = await VisualsstackClient
        .stack({ api_key: process.env.VisualsSTACK_API_KEY })
        .ContentType('visuals_content')  // Use the UID of your Visuals Type
        .entry(entryId)
        .fetch();
  
      res.status(201).json({ message: "Entry fetch successfully", entry: response });
  
    } catch (error) {
      console.error("Server Error:", error);  // Log server errors
      res.status(500).send("Server Error");
    }
  };


  const createVisualsVisuals = async (req, res) => {
    try {
     
      // Create a Visualsstack client instance
      const VisualsstackClient = Visualsstack.client({ authtoken: process.env.VisualsSTACK_AUTH_TOKEN });
      console.log("Token is ",process.env.VisualsSTACK_MANAGEMENT_TOKEN);
   
  
      // Create a new entry
      const response = await VisualsstackClient
        .stack({ api_key: process.env.VisualsSTACK_API_KEY })
        .ContentType('visuals_content')  // Use the UID of your Visuals Type
        .entry()
        .create({ entry: req.body });
  
      res.status(201).json({ message: "Entry created successfully", entry: response });
    } catch (error) {
      console.log("Error is ", error);
      res.status(500).send('Server Error');
    }
  };

  const updateVisualsVisuals = async (req, res) => {
    try {
      const entryId = req.params.id;
    
      const VisualsstackClient = Visualsstack.client({ authtoken: process.env.VisualsSTACK_AUTH_TOKEN });
      console.log("Token is ",process.env.VisualsSTACK_MANAGEMENT_TOKEN);
      // Prepare the entry data
   
      // Create a new entry
      const response = await VisualsstackClient
        .stack({ api_key: process.env.VisualsSTACK_API_KEY })
        .ContentType('visuals_content')  // Use the UID of your Visuals Type
        .entry(entryId)
        .update({entry: req.body });
  
      res.status(201).json({ message: "Entry updated successfully", entry: response });
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  const deleteVisualsVisuals = async (req, res) => {
    try {
      const entryId = req.params.id;
      console.log("Entry ID is:", entryId);  
      
      if (!entryId) {
        return res.status(400).send("Entry ID is missing");
      }
      const VisualsstackClient = Visualsstack.client({ authtoken: process.env.VisualsSTACK_AUTH_TOKEN });
     
      const response = await VisualsstackClient
        .stack({ api_key: process.env.VisualsSTACK_API_KEY })
        .ContentType('visuals_content')  // Use the UID of your Visuals Type
        .entry(entryId)
        .delete();
        res.status(201).json({ message: "Entry deleted successfully", entry: response });
  
  
    } catch (error) {
      console.log("Error is ",error)
      res.status(500).send('Server Error');
    }
  };
  
  

  module.exports = {
    getAllVisualsVisuals,
    getVisualsVisualsById,
    createVisualsVisuals,
    deleteVisualsVisuals,
    updateVisualsVisuals
  };
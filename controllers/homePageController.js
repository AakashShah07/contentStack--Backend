const Stack = require('../utils/contentstackClient');

const getAllHomeContent = async (req, res) => {
    try {
      const Query = Stack.ContentType('home_page').Query();
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
  
  // Get a specific "home Us" entry by ID
  const getHomeContentById = async (req, res) => {
    try {
      const entryId = req.params.id;
      console.log("Entry ID is:", entryId);  
      
      if (!entryId) {
        return res.status(400).send("Entry ID is missing");
      }
      const Query = Stack.ContentType('home_page').Entry(entryId);
      await Query.toJSON().fetch()
        .then(entry => {
          if (!entry) {
            return res.status(404).send("Entry not found");
          }
         // Log the result to debug
          res.json(entry);  // Return the entry directly
        })
        .catch(err => {
          // console.error("Error fetching entry:", err);  // Log the error
          console.log("Response is ",res);
          res.status(500).send({ error: "Failed to fetch entry", details: err });
        });
    } catch (error) {
      console.error("Server Error:", error);  // Log server errors
      res.status(500).send("Server Error");
    }
  };
  

  module.exports = {
    getAllHomeContent,
    getHomeContentById,
  };
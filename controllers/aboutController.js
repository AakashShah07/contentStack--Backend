const Stack = require('../utils/contentstackClient');

// Get all entries for "About Us"
const getAllAboutContent = async (req, res) => {
  try {
    const Query = Stack.ContentType('about_us').Query();
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

// Get a specific "About Us" entry by ID
const getAboutContentById = async (req, res) => {
  try {
    const entryId = req.params.id;
    console.log("Entry ID is:", entryId);  
    
    if (!entryId) {
      return res.status(400).send("Entry ID is missing");
    }
    const Query = Stack.ContentType('about_us').Entry("bltb8cf032515b7269c");
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


// Create a new "About Us" entry
const contentstack = require('@contentstack/management');

const createAboutContent = async (req, res) => {
  try {
    const { organization_name, vision, history, team_members } = req.body;

    if (!organization_name || !vision) {
      return res.status(400).send("organization_name and vision are required.");
    }

    // Create a Contentstack client instance
    const contentstackClient = contentstack.client({ authtoken: process.env.CONTENTSTACK_DELIVERY_TOKEN });
    console.log("Token is ",process.env.CONTENTSTACK_MANAGEMENT_TOKEN);
    // Prepare the entry data
    const entryData = {
      organization_name: organization_name,
      vision: vision,
      history: history,
      team_members: team_members,
    };

    // Create a new entry
    const response = await contentstackClient
      .stack({ api_key: "blt863838e93292c718" })
      .contentType('about_us')  // Use the UID of your Content Type
      .entry()
      .create({ entry: entryData });

    res.status(201).json({ message: "Entry created successfully", entry: response });
  } catch (error) {
    console.log("Error is ", error);
    res.status(500).send('Server Error');
  }
};


const updateAboutContent = async (req, res) => {
  try {
    const Entry = Stack.ContentType('about_us').Entry(req.params.id);
    Entry.toJSON().fetch()
      .then(entry => {
        entry.set(req.body).save().then(updatedEntry => {
          res.json(updatedEntry.toJSON());
        });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Delete a "About Us" entry by ID
const deleteAboutContent = async (req, res) => {
  try {
    const Entry = Stack.ContentType('about_us').Entry(req.params.id);
    Entry.toJSON().delete()
      .then(() => {
        res.json({ message: 'Entry deleted successfully' });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  } catch (error) {
    console.log("Error is ",error)
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllAboutContent,
  getAboutContentById,
  createAboutContent,
  updateAboutContent,
  deleteAboutContent,
};

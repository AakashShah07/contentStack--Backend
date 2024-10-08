const Stack = require('../utils/contentstackClient');
console.log("Stack is ",Stack)



const getAboutContent = async (req, res) => {
  try {
    const Query = Stack.ContentType('about_us').Query();
    Query.toJSON().find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};


module.exports = { getAboutContent };

const NlpManager = require("node-nlp");
const manager = new NlpManager.NlpManager(({ languages: ["en"] }));

 const chatBotController = {
 
  testChat : async(req, res) => {
  //========= starting to train the model ===========

  //step 1. adding documents to the model

  // model addDocument has three arguments 1-specify language, 2-declare a dailog or key word and 3-decalre intent for the keyword
  manager.addDocument("en", "hey", "greeting");
  manager.addDocument("en", "hi", "greeting");
  manager.addDocument("en", "yo man whats up", "greeting");
  manager.addDocument("en", "hey you", "greeting");
  manager.addDocument("en", "hi man", "greeting");

  //step 2. add answers for the intents
  // three args, 1-language, 2-the intent we declared before, 3-the answer to it
  manager.addAnswer("en", "greeting", "Hi! may know how could I help?");
  manager.addAnswer("en", "greeting", "Hey! may know how could assist you?");
  manager.addAnswer("en", "greeting", "Welcome back! please tell me how can I help?");
  manager.addAnswer("en", "greeting", "Hi! please let me know how can I help?");
  //this will randomly select an answer if the intent score is matched

  //step 3. training the model
  await manager.load('./model.nlp')
  await manager.train();
  manager.save();

  const response = await manager.process('en', req.query.message);
  res.status(200).json({
    answer: response.answer
  })

}
}
module.exports = chatBotController;
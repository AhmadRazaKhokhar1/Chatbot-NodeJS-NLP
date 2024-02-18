const NLP = require("node-nlp");
const data = require("../dataset/intents.json");
const manager = new NLP.NlpManager({ languages: ["en"] });

const chatBotController = {
  testChat: async (req, res) => {
    //========= starting to train the model ===========
    try {
      //step 1. adding documents to the model

      // model addDocument has three arguments 1-specify language, 2-declare a dailog or key word and 3-decalre intent for the keyword
      data.intents.map((intent) =>
        intent.patterns.map((pattern) => {
          manager.addDocument("en", pattern, intent.tag);
        })
      );

      //step 2. add answers for the intents
      // three args, 1-language, 2-the intent we declared before, 3-the answer to it and is commonly known as utterances
      data.intents.map((intent) =>
        intent.responses.map((response) => {
          manager.addAnswer("en", intent.tag, response);
        })
      );
      //this will randomly select an answer if the intent score is matched

      //step 3. training the model
      await manager.train();
      await manager.save();

      const response = await manager.process("en", req.query.message);
      res.status(200).json({
        answer: response.answer,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = chatBotController;

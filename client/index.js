const userInput = document.querySelector("#userInput");
const responseContainer = document.querySelector("#response");
var response;
async function askAiChatBot() {
  try {
    responseContainer.innerHTML = "Loading please wait...";
    response = await axios.get(
      `http://localhost:3001/api/v1/chatbot?message=${userInput.value}`
    );
    responseContainer.innerHTML = "";
    if (response.data.answer === "" || !response.data.answer) {
      return (responseContainer.innerHTML +=
        "<b>Please rephrase your query, it is not available upto to what I am trained for.</b>");
    }
    return (responseContainer.innerHTML += `<b>
                    ${response.data.answer.toString()}
                    </b>`);
  } catch (error) {
    console.log(error);
  }
}

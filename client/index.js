const userInput = document.querySelector("#userInput");
const responseContainer = document.querySelector("#response");
const askAiChatBot = async () => {
  try {
    responseContainer.innerHTML = "Loading please wait...";
    const response = await axios.get(
      `http://localhost:3001/api/v1/chatbot?message=${userInput.value}`
    );
    responseContainer.innerHTML = "";

    responseContainer.innerHTML += `<b>
                    ${response.data.answer.toString()}
                    </b>`;
  } catch (error) {
    console.log(error);
  }
};

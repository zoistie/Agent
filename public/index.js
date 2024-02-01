const ChatOllama = require("@langchain/community/chat_models/ollama").ChatOllama;
window.sendMessage = async function() {
    var messageInput = document.getElementById("message");
    var message = messageInput.value;
    messageInput.value = "";

    var chatHistory = document.getElementById("chat-history");

    // Display the user's message
    var userMessage = document.createElement("div");
    userMessage.textContent = "You: " + message;
    chatHistory.appendChild(userMessage);

    // Echo the user's message as a response
    var echoMessage = document.createElement("div");
    const response = await agentresponse(message);
    echoMessage.textContent = "Agent: " + response; 
    chatHistory.appendChild(echoMessage);
}

const chatModel = new ChatOllama({
    baseUrl: "http://localhost:11434", // Default value
    model: "nous-hermes",
  });

  async function agentresponse(message){
    const response = await chatModel.invoke(message);
    console.log(response.content);
    return response.content;
}
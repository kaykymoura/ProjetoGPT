async function sendMessage(){
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.ariaValueMax;

    if (!userMessage) return;

    // Adicionar mensagem do usuario
    const userDiv = document.getElementById("div");
    userDiv.className = "user-message message";
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);


    // Limpar o campo de entrada
    userInput.value = "";

    // Fazer scrool automatico para a ultima mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Configuracao do endpoint e chave da API
    const endpoint ="https://ai-kaykymoura27774ai106425217035.openai.azure.com";
    const apiKey = "6DJBwGEih0yYjm6cNKsQLREn93MTUWZAHyCEdBoY5GdGRlZrn2XFJQQJ99BCACHYHv6XJ3w3AAAAACOGtpgQ";
    const deploymentId = "gpt-35-turbo"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verifique a versao na documentacao




}
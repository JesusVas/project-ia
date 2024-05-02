let sendBtn=document.getElementById('sendBtn');
let textBox=document.getElementById('textbox');
let chatContainer=document.getElementById('chatContainer');
let user={message:""};

let arrayOfPosibleMessages=[
    {message:"hola",response:"Hola soy un chatbot"},
    {message:"Como estas hoy?",response:"Estoy bien gracias por preguntar."},
    {message:"Escurri",response:"Escurri"},
];
const sendMessage=(userMessage)=>{
    let messageElement=document.createElement('div');
    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";
    messageElement.innerHTML="<span>You: </span>"+"<span>"+userMessage+"</span>";
    chatContainer.appendChild(messageElement);

};

const chatbotMessage = (userMessage) => {
    let chatbotMessage = "";
    if (userMessage.trim() !== "") {
        let result = arrayOfPosibleMessages.find(val => val.message.toLowerCase() === userMessage.toLowerCase());
        if (result) {
            chatbotMessage = result.response;
        } else {
            chatbotMessage = "No entiendo tu mensaje. Por favor ingresa un mensaje correcto";
        }
    } else {
        chatbotMessage = "No enviaste nada. Por favor ingresa un mensaje";
    }
    let messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";
    
    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop=chatContainer.scrollHeight;
    }
    ,1000);
};

sendBtn.addEventListener('click',function(e){
    let userMessage=textBox.value;
    if(userMessage==""){
        alert("No enviaste nada");
    }else{
        let userMessageText=userMessage.trim();
        userMessage.message=userMessageText;
        textBox.value="";
        sendMessage(userMessageText);
        chatbotMessage(userMessageText);
    }
})
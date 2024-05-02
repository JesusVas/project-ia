let sendBtn=document.getElementById('sendBtn');
let textBox=document.getElementById('textbox');
let chatContainer=document.getElementById('chatContainer');
let user={message:""};
const sendMessage=(userMessage)=>{
    let messageElement=document.createElement('div');
    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";
    messageElement.innerHTML="<span>You: </span>"+"<span>"+userMessage+"</span>";
    chatContainer.appendChild(messageElement);

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
    }
})
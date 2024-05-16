let sendBtn=document.getElementById('sendBtn');
let textBox=document.getElementById('textbox');
let chatContainer=document.getElementById('chatContainer');
let user={message:""};

let arrayOfPosibleMessages=[
    {message:"hola",response:"¡Hola! ¿En qué puedo ayudarte? Puedes preguntarme sobre la biblioteca, carreras, información sobre la universidad o cómo llegar a la universidad."},
    {message:"Sobre la Biblioteca",response:"Opciones:Horarios de la biblioteca, Días de apertura, Reglas, Alquiler"},
    {message:"Horarios de la biblioteca",response:"La biblioteca abre de 8:30 am a 4:00 pm."},
    {message:"Días de apertura",response:"La biblioteca abre de lunes a sábado, excepto feriados."},
    {message:"Reglas de la biblioteca",response:"Las reglas de la biblioteca son no comer dentro y mantener el silencio."},
    {message:"Alquiler de libros",response:"'¿Que quieres saber? Requerimientos,Fechas,límite"},

    {message:"Requerimientos de alquiler",response:"Los requerimientos para alquilar libros son dejar el carnet de la universidad y el código del estudiante."},
    {message:"Fechas límite de alquiler",response:"La fecha límite para devolver el material es de 1 mes."},
    {message:"Carreras",response:"Ing. de Sistemas, Gastronomía, Veterinaria"},
    {message:"Sobre la carrera Ing. de Sistemas",response:"Opciones: Requerimientos, Carga Horaria, Pensiones, Horarios, Duración de la carrera, Materias"},
    {message:"Requerimientos de Ing. de Sistemas",response:"Si eres nuevo, se requiere el título de bachiller, fotocopias del carnet y pagar la matrícula de 1000 Bs."},
    {message:"Carga Horaria de Ing. de Sistemas",response:"La carga horaria es de 16 horas y 15 minutos por semana."},

    {message:"Pensiones de Ing. de Sistemas",response:"La mensualidad es de 850 Bs mensualmente."},
    {message:"Horarios de Ingenieria de Sistemas",response:"Hay 2 turnos: Mañana de 8:30 a 11:45 y Nocturno de 8:00 pm a 10:00 pm."},
    {message:"Duración de la carrera de Ingenieria de Sistemas",response:"La carrera tiene una duración de 4 años."},
    {message:"Materias de Ingenieria de Sistemas",response:"", content:"<table style='border: 1px solid black;'><tr style='border-bottom: 1px solid black;'><th>Primer año</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Horas</th><th style='border: 1px solid black;'>Lunes</th><th style='border: 1px solid black;'>Martes</th><th style='border: 1px solid black;'>Miercoles</th><th style='border: 1px solid black;'>Jueves</th><th style='border: 1px solid black;'>Viernes</th></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>8:30-10:00</td><td style='border: 1px solid black;'>ADMINISTRACION I-II</td><td style='border: 1px solid black;'>ADMINISTRACION I-II</td><td style='border: 1px solid black;'>TALLER DE COMPUTACION I-II</td><td style='border: 1px solid black;'>ADMINISTRACION I-II</td><td style='border: 1px solid black;'>TALLER DE COMPUTACION I-II</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>LAB-COMP-2</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>LAB-COMP2</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>10:15-11:45</td><td style='border: 1px solid black;'>ALGEBRA I-II</td><td style='border: 1px solid black;'>TALLER DE COMPUTACION I-II</td><td style='border: 1px solid black;'>ALGEBRA I-II</td><td style='border: 1px solid black;'>ALGEBRA I-II</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>LAB-COMP2</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>316</td></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Segundo año</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Horas</th><th style='border: 1px solid black;'>Lunes</th><th>Martes</th><th style='border: 1px solid black;'>Miercoles</th><th style='border: 1px solid black;'>Jueves</th><th style='border: 1px solid black;'>Viernes</th></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>8:30-10:00</td><td style='border: 1px solid black;'>PROGRAMACION I-II</td><td style='border: 1px solid black;'>PROGRAMACION I-II</td><td style='border: 1px solid black;'>DIGITAL I-II</td><td style='border: 1px solid black;'>PROGRAMACION I-II</td><td style='border: 1px solid black;'>DIGITAL I-II</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>LAB-COMP2</td><td style='border: 1px solid black;'>LAB-COMP-2</td><td style='border: 1px solid black;'>216</td><td style='border: 1px solid black;'>LAB-COMP2</td><td style='border: 1px solid black;'>216</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>10:15-11:45</td><td style='border: 1px solid black;'>CALCULO III-IV</td><td style='border: 1px solid black;'>DIGITAL I-II</td><td style='border: 1px solid black;'>CALCULO III-IV</td><td style='border: 1px solid black;'>CALCULO III-IV</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>214</td><td style='border: 1px solid black;'>216</td><td style='border: 1px solid black;'>214</td><td style='border: 1px solid black;'>214</td></tr><tr style='border: 1px solid black;'><th>Tercer año</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Horas</th><th style='border: 1px solid black;'>Lunes</th><th style='border: 1px solid black;'>Martes</th><th style='border: 1px solid black;'>Miercoles</th><th style='border: 1px solid black;'>Jueves</th><th>Viernes</th></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>8:30-10:00</td><td style='border: 1px solid black;'>INTELIGENCIA ARTIFICIAL I-II</td><td style='border: 1px solid black;'>INTELIGENCIA ARTIFICIAL I-II</td><td style='border: 1px solid black;'>INGENIERIA DE METODOS</td><td>INTELIGENCIA ARTIFICIAL I-II</td><td style='border: 1px solid black;'>INGENIERIA DE METODOS I-II</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>LAB COMP-1</td><td style='border: 1px solid black;'>LAB-COMP-1</td><td>316</td><td style='border: 1px solid black;'>LAB-COMP1</td><td style='border: 1px solid black;'>316</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>10:15-11:45</td><td style='border: 1px solid black;'>SISTEMAS DE COMPUTACION I-II</td><td style='border: 1px solid black;'>INGENIERIA DE METODOS I-II</td><td style='border: 1px solid black;'>SISTEMAS DE COMPUTACION I-II</td><td>SISTEMAS DE COMPUTACION I-II</td></tr><tr style='border: 1px solid black;'><td>aula</td><td style='border: 1px solid black;'>LAB-COPM2</td><td style='border: 1px solid black;'>316</td><td style='border: 1px solid black;'>LAB-COMP2</td><td>LAB-COMP2</td></tr><tr style='border: 1px solid black;'><th>Cuarto año</th></tr><tr style='border: 1px solid black;'><th style='border: 1px solid black;'>Horas</th><th style='border: 1px solid black;'>Lunes</th><th>Martes</th><th style='border: 1px solid black;'>Miercoles</th><th style='border: 1px solid black;'>Jueves</th><th style='border: 1px solid black;'>Viernes</th></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>8:30-10:00</td><td style='border: 1px solid black;'>AUDITORIA Y SISTEMAS DE SEGURIDAD I-II</td><td>AUDITORIA Y SISTEMAS DE SEGURIDAD I-II</td><td style='border: 1px solid black;'>INGENIERIA DE INFORMACION I-II</td><td style='border: 1px solid black;'>AUDITORIA Y SEGURIDAD DE SISTEMAS I-II</td><td style='border: 1px solid black;'>INGENIERIA DE INFORMACION I-II</td></tr><tr style='border: 1px solid black;'><td style='border: 1px solid black;'>aula</td><td style='border: 1px solid black;'>504</td><td style='border: 1px solid black;'>504</td><td style='border: 1px solid black;'>LAB-COMP-1</td><td style='border: 1px solid black;'>504</td><td style='border: 1px solid black;'>LAB-COMP1</td></tr><tr style='border: 1px solid black;'><td>10:15-11:45</td><td style='border: 1px solid black;'>SIMULACION DE SISTEMAS I-II</td><td style='border: 1px solid black;'>INGENIERIA DE INFORMACION I-II</td><td style='border: 1px solid black;'>SIMULACION DE SISTEMAS I-II</td><td style='border: 1px solid black;'>SIMULACION DE SISTEMAS I-II</td></tr><tr style='border: 1px solid black;'><td>aula</td><td style='border: 1px solid black;'>LAB-COMP1</td><td>LAB-COMP1</td><td style='border: 1px solid black;'>LAB-COMP1</td><td style='border: 1px solid black;'>LAB-COMP1</td></tr></table>"},
    {message:"Sobre la carrera Gastronomia",response:"Opciones:Requerimientos, Carga Horaria, Pensiones, Horarios, Duración de la carrera, Materias"},
    {message:"Requerimientos de Gastronomia ",response:"Si eres nuevo, se requiere el título de bachiller, fotocopias del carnet y pagar la matrícula de 1000 Bs."},

    {message:"Carga Horaria de Gastronomia",response:"La carga horaria es de 16 horas y 15 minutos por semana."},
    {message:"Pensiones de Gastronomia",response:"La mensualidad es de 850 Bs mensualmente."},
    {message:"Horarios de Gastronomia",response:"Hay un turno de 8:30 a 11:45."},
    {message:"Duración de la carrera de Gastronomia",response:"La carrera tiene una duración de 4 años."},
    {message:"Materias de Gastronomia",response:" ", content: "<img src='./path_to_your_image.jpg' alt='Horarios de las materias'/>"},
    {message:"Carga Horaria de Gastronomia",response:"La carga horaria es de 20 horas por semana."},
    
    {message:"las sucursales de la universidad",response:"La universidad tiene dos sucursales una es de postgrado y la otra el campues prueva preguntadome para darte una direccion y un mapa"},
    {message:"postgrado",response:" Postgrado queda en la: Av. Busch # 1191, Ed. El Sauce",content:"<iframe style='border: 0; width: 400px; height: 450px;' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.6629979578983!2d-68.12379939999999!3d-16.492660999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206af6123c63%3A0x8746519349fadd10!2sUniversidad%20Loyola!5e0!3m2!1ses-ES!2sbo!4v1608502840292!5m2!1ses-ES!2sbo' allowFullScreen title='Google Map'></iframe>"},
    {message:"campus",response:"El campus queda en: Calle D Michel, Zona Bajo Seguencoma",content:"<iframe style='border: 0; width: 400px; height: 450px;' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18193.44264843244!2d-68.09603532708063!3d-16.541227458971694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20d88198117f%3A0xa421ae79c564a423!2sUniversidad%20Loyola!5e0!3m2!1ses-419!2sbo!4v1711019579865!5m2!1ses-419!2sbo' allowFullScreen title='Google Map'></iframe>"},
    {message:"Nos olvidamos de algo",response:"No olvides el 12/28"},
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
    let content = "";
    if (userMessage.trim() !== "") {
        let result = arrayOfPosibleMessages.find(val => userMessage.toLowerCase().includes(val.message.toLowerCase()));
        if (result) {
            chatbotMessage = result.response;
            content = result.content || ""; 
        } else {
            chatbotMessage = "No entiendo tu mensaje. Por favor ingresa un mensaje correcto";
        }
    } else {
        chatbotMessage = "No enviaste nada. Por favor ingresa un mensaje";
    }
    let messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";
    if (content !== "") {
        messageElement.innerHTML += "<br>" + content;
    }
    
    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:5000});
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
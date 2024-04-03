const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const deleteButton = document.querySelector("#delete-btn");
const voiceButton = document.querySelector("#voice-btn");

let userText = '';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const loadDataFromLocalstorage = () => {
  const defaultText = `<div class="default-text"><br><br>
    <h1>Hello, There!</h1><br>
    <div class="default-sub" id="default-sub">
        <p style="font-size: 12px;">"It's PatrIck Ogalesco – a passionate individual on a journey of exploration and creation. Explore my skills, projects, and more. Feel free to ask me anything!"</p>
    </div>


    <div id="default-sub2">
        <p style="font-size: 12px;">I am <span id="typewriter"></span><span id="cursor">|</span></p>
    </div>
    </div>
  </div>`;
  
  chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

const createChatElement = (content, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = content;
  return chatDiv;
};

const displayAnswerWithTypingEffect = async (answer) => {
  const answerHtml = `<div class="chat-content">
    <div class="chat-details">
      <img src="www/images/chatbot3.jpg" alt="chatbot-img">
      <p>${answer}</p>
    </div>
  </div>`;

  const incomingChatDiv = document.createElement("div");
  incomingChatDiv.classList.add("chat", "incoming");
  incomingChatDiv.innerHTML = answerHtml; // Use innerHTML here

  chatContainer.appendChild(incomingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  const responseText = document.querySelector(".incoming:last-child p");
  for (let i = 0; i < answer.length; i++) {
    responseText.innerHTML = answer.substring(0, i + 1); // Use innerHTML here
    await sleep(50);
  }
};

const handleOutgoingChat = async () => {
  userText = chatInput.value.trim();
  if (!userText) return;

  chatInput.value = "";

  const html = `<div class="chat-content">
    <div class="chat-details">
      <img src="www/images/user1.jpg" alt="user-img">
      <p>${userText}</p>
    </div>
  </div>`;

  const outgoingChatDiv = createChatElement(html, "outgoing");
  chatContainer.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  const question = userText.toLowerCase();

  switch (question) {
  case 'hi':
  case 'hello':
    const greetingResponse = "Hi there! How can I assist you?";
    // Use typing-text animation function instead of direct HTML response
    displayAnswerWithTypingEffect(greetingResponse);
    break; // Add the missing semicolon here
  case 'Tell me about yourself.':
  case 'who are you?':
  case 'Introduce yourself.':
  case 'What can you tell me about your background?':

    const aboutMeResponse = `
      I am Patrick Ogalesco, 24 years old, an aspiring digital artist, boasting a unique fusion of technical prowess and artistic finesse. 
      Currently, I am passionately pursuing a BSc in Computer Science, immersing myself not only in the realm of coding and programming but also dedicating myself fervently to the canvas as an artist. <br><br>
      My journey seamlessly weaves together creativity and logic, charting a course toward innovative problem-solving and the creation of visually breathtaking solutions. Fueled by an innate curiosity and an unwavering commitment to bridging the gap between art and technology, I am poised to inject a fresh perspective into the world of digital art.
    `;
    displayAnswerWithTypingEffect(aboutMeResponse);
    break;

    case 'where did you study?':
    case 'tell me about your education':
    case 'what is your educational background?':
    const educationResponse = `
    Here is a summary of my educational journey:
    - Christian Polytechnic Institute Of Catanduanes (2021 - 2024)
    - Catanduanes College (2020 - 2021)
    - San Jose(OCO) National High School (2014 - 2020)
    - Sagrada Viga Catanduanes (2008 - 2013)
  `;
  displayAnswerWithTypingEffect(educationResponse);
  break;
  

  // case 'portfolio':
  // case 'show me your work':

  // const portfolioResponse = `
  //   <img src="www/images/SimpleDrawingAppJS.png" id="Portfolio">
  //   Here is an example of my work. I created this piece during my exploration of digital art.

  //   <img src="www/images/SimpleDrawingAppJS.png" id="Portfolio">
  //   Another project in my portfolio. This showcases my skills in web development.

  //   <img src="www/images/SimpleDrawingAppJS.png" id="Portfolio">
  //   Here's a snapshot of a coding project I worked on. It involves a mix of frontend and backend technologies.
  // `;
  // displayAnswerWithTypingEffect(portfolioResponse);
  // break;



  case "what you do":
  case 'what are you up to?':

  const doingResponse = `Here's an overview of what I'm currently engaged in:

Web Design
- Currently in the process of learning.

Web Development
- Currently in the process of learning.

Android Development
- Currently in the process of learning.

Digital Art
- Currently in the process of learning.`;
  displayAnswerWithTypingEffect(doingResponse);
  break;


  case 'what are your skills?':
  case 'what can you do?':

  const skillsResponse = `
    As a versatile individual with a passion for both technology and creativity, here are some of my key skills:

    - Digital Art
    - Programming
    - Web Development
    - Artistic Vision
    - Collaboration
    - Adaptability
    - Attention to Details
    - Continuous Learning

    I specialize in various skills that contribute to my expertise in the field. Here are some of my key areas:
    - Photoshop
    - Ibis Paint
    - Krita
    - HTML And CSS
    - JavaScript
    - PHP
    - C
    - C++
    - JAVA
    - Visual Basic
    - Microsoft Application
  `;
  displayAnswerWithTypingEffect(skillsResponse);
  break;

  case 'how can we reach you?':
  case 'what is your contact information?':
    const contactResponse = `
      Thank you for reaching out! Feel free to contact me through the following:
      
      Email: jpatrickogalesco@gmail.com

      Phone: 0938 070 ****

      Location: Viga Catanduanes
    `;
    displayAnswerWithTypingEffect(contactResponse);
    break;





  default:
    const defaultResponse = "I'm sorry, I didn't understand that. My responses are generated based on programmed commands.";
    displayAnswerWithTypingEffect(defaultResponse);
    break;
}

};

const deleteChats = () => {
  if (confirm("Are you sure you want to delete all the chats?")) {
    localStorage.removeItem("all-chats");
    loadDataFromLocalstorage();
  }
};

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${initialInputHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleOutgoingChat();
  }
});

loadDataFromLocalstorage();
sendButton.addEventListener("click", handleOutgoingChat);
deleteButton.addEventListener("click", deleteChats);

voiceButton.addEventListener("click", () => {
  // Add voice functionality here if needed
});

chatInput.addEventListener("input", () => {
  // Handle input changes if needed
});

window.addEventListener('beforeunload', () => {
  // Handle cleanup before unload if needed
});
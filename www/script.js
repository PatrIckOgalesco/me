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
        <p style="font-size: 12px;">"It's John PatrIck Ogalesco – a passionate individual on a journey of exploration and creation. Explore my skills, projects, and more. Feel free to ask me anything!"</p>
    </div>

 <img src="www/images/pic.png" alt="pic" id="img1">


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
    await sleep(10);
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
  const greetingResponse = `
    \nHello there! It's an absolute pleasure to greet you! Welcome to our interactive chat platform. How may I be of service to you today? Whether you have questions, need assistance, or simply want to chat, I'm here to help in any way I can. Feel free to explore and engage with me, and together, let's make your experience as enjoyable and informative as possible!
  `;
  displayAnswerWithTypingEffect(greetingResponse);
  break;


  case 'Tell me about yourself.':
  // case 'Introduce yourself.':

    const aboutMeResponse = `
      \nAllow me to introduce myself. I am John Patrick Ogalesco, a 24-year-old with a unique fusion of technical prowess and artistic finesse.  

      \nCurrently, I am passionately pursuing a BSc in Computer Science, immersing myself not only in the realm of coding and programming but also dedicating myself fervently to the canvas as an artist. <br><br>
      \nMy journey seamlessly weaves together creativity and logic, charting a course toward innovative problem-solving and the creation of visually breathtaking solutions. Fueled by an innate curiosity and an unwavering commitment to bridging the gap between art and technology, I am poised to inject a fresh perspective into the world of digital art.
    `;
    displayAnswerWithTypingEffect(aboutMeResponse);
    break;


    case 'tell me about your education':

    const educationResponse = `
    \nHere is a summary of my educational journey:
    \n- Christian Polytechnic Institute Of Catanduanes (2021 - 2024)
    \n- Catanduanes College (2020 - 2021)
    \n- San Jose(OCO) National High School (2014 - 2020)
    \n- Sagrada Viga Catanduanes (2008 - 2013)
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


  case 'show me your work':

  const portfolioResponse = `
      \nI'm sorry, but the administrator has not uploaded any work yet


      \n....Coming Soon! 
  `;
  displayAnswerWithTypingEffect(portfolioResponse);
  break;


  case 'what are you up to?':

  const doingResponse = `\nHere's an overview of what I'm currently engaged in:

      \nWeb Design
      \n- Currently in the process of learning.

      \nWeb Development
      \n- Currently in the process of learning.

      \nAndroid Development
      \n- Currently in the process of learning.

      \nDigital Art
      \n- Currently in the process of learning.`;
  displayAnswerWithTypingEffect(doingResponse);
  break;


  case 'what are your skills?':

  const skillsResponse = `
    \nAs a versatile individual with a passion for both technology and creativity, here are some of my key skills:

    \n- Digital Art
    \n- Programming
    \n- Web Development
    \n- Artistic Vision
    \n- Collaboration
    \n- Adaptability
    \n- Attention to Details
    \n- Continuous Learning

    \nI specialize in various skills that contribute to my expertise in the field. Here are some of my key areas:
    \n- Photoshop
    \n- Ibis Paint
    \n- Krita
    \n- HTML And CSS
    \n- JavaScript
    \n- PHP
    \n- C
    \n- C++
    \n- JAVA
    \n- Visual Basic
    \n- Microsoft Application
  `;
  displayAnswerWithTypingEffect(skillsResponse);
  break;


  case 'how can we reach you?':
    const contactResponse = `
      \nThank you for reaching out! You can contact me through the following channels:
      
      \nEmail: jpatrickogalesco@gmail.com
      \nPhone: 0938 070 ****
      \nLocation: Viga Catanduanes

      \nSocial Media:
      \nFacebook: <a href="https://www.facebook.com/profile.php?id=100078646130852" target="_blank">Facebook Profile</a>
      \nLinkedIn: <a href="https://www.linkedin.com/in/patrickogalesco" target="_blank">LinkedIn Profile</a>
    `;
    displayAnswerWithTypingEffect(contactResponse);
    break;

  case 'do you have any job experience?':
    const jobExperienceResponse = `
      \nAs of now, I don't possess any formal job experience. However, I firmly believe that my passion for learning and my commitment to excellence compensate for my lack of formal work history. I am a motivated individual who thrives on challenges and is eager to immerse myself in various professional environments to gain valuable experience. 

      \nDespite not having job experience, I have actively engaged in self-directed projects, academic pursuits, and extracurricular activities, all of which have contributed to my skill set and personal growth. I approach every task with dedication and a desire to learn, and I am confident in my ability to adapt quickly to new roles and responsibilities.

      \nWhile I may not have a traditional job background, I am enthusiastic about the prospect of applying my knowledge and skills to real-world scenarios. I am open to opportunities that allow me to contribute meaningfully to a team, develop professionally, and make a positive impact on any organization I join.

      \nIn summary, while I may not have job experience in the conventional sense, I am a proactive and ambitious individual ready to embark on a fulfilling professional journey and make valuable contributions to any team or project I become a part of.
    `;
    displayAnswerWithTypingEffect(jobExperienceResponse);
    break;



  case 'question':
    const questionResponse = `
        "\n- Hi | Hello",

        "\n- Tell me about yourself?,

        "\n- Tell me about your education?,

        "\n- What are you up to?",

        "\n- What are your skills?,

        "\n- show me your work?",

        "\n- do you have any job experience?",

        "\n- How can we reach you?"
    `;
    displayAnswerWithTypingEffect(questionResponse);
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


function showAvailableQuestions() {
    const availableQuestions = [
        "\n- Hi | hello",
        "\n- Tell me about yourself?",
        "\n- tell me about your education?",
        "\n- what are you up to?",
        "\n- what are your skills?",
        "\n- show me your work?",
        "\n- do you have any job experience?",
        "\n- how can we reach you?",
        "\nNote: This system is programmed to respond to specific questions. If the question you want to ask is not listed here, the system may not understand it. Thank you for understanding!"
    ];

    alert("Available questions to ask:\n\n" + availableQuestions.join("\n"));
}


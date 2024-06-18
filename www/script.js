okconst chatInput = document.querySelector("#chat-input");
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
        <p style="font-size: 12px;">"It's John Patrick Ogalesco – a passionate individual on a journey of exploration and creation. Explore my skills, projects, and more. Feel free to ask!"</p>
    </div>

    <img src="www/images/pic.png" alt="pic" id="img1">

    <div id="default-sub2">
        <p style="font-size: 12px;">I am <span id="typewriter"></span><span id="cursor">|</span></p>
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
      <div class="response-text">${answer}</div>
    </div>
  </div>`;

  const incomingChatDiv = document.createElement("div");
  incomingChatDiv.classList.add("chat", "incoming");
  incomingChatDiv.innerHTML = answerHtml;

  chatContainer.appendChild(incomingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  const responseText = incomingChatDiv.querySelector(".response-text");

  let i = 0;
  while (i < answer.length) {
    const char = answer[i];
    if (char === "<") {
      const tagEnd = answer.indexOf(">", i);
      i = tagEnd + 1;
    } else {
      responseText.innerHTML = answer.substring(0, i + 1);
      await sleep(10);
      i++;
    }
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
        Hello there! It's an absolute pleasure to greet you! Welcome to our interactive chat platform. How may I be of service to you today? Whether you have questions, need assistance, or simply want to chat, I'm here to help in any way I can. Feel free to explore and engage with me, and together, let's make your experience as enjoyable and informative as possible!
      `;
      displayAnswerWithTypingEffect(greetingResponse);
      break;

    case 'tell me about yourself.':
      const aboutMeResponse = `
        <div style="width: 100%; height: auto;">
          <img src="www/images/pic3.jpg" id="Portfolio" alt="Portfolio Image 2" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        Allow me to introduce myself. I am John Patrick Ogalesco, a 2*-year-old aspiring Tech Artist with a boundless imagination and an insatiable passion for bringing fantastical worlds to life.  
        While I'm currently pursuing a BSc in Computer Science, my heart truly belongs to the realm of visual storytelling and creative expression. <br><br>
        My journey is a vibrant tapestry of colors and concepts, blending technical proficiency with artistic flair to craft immersive and captivating narratives. Fueled by a relentless drive to push the boundaries of imagination, I am dedicated to honing my craft and sharing my vision with the world.
      `;
      displayAnswerWithTypingEffect(aboutMeResponse);
      break; 

    case 'what is your educational background?':
    const educationResponse = `
        Here is a summary of my educational journey:
        <ul>
          <li>Christian Polytechnic Institute Of Catanduanes (2021 - 2024)</li>
          <li>Catanduanes College (2020 - 2021)</li>
          <li>San Jose(OCO) National High School (2014 - 2020)</li>
          <li>Sagrada Viga Catanduanes (2008 - 2013)</li>
        </ul>
      `;
      displayAnswerWithTypingEffect(educationResponse);
      break;


  case 'show me your work?':
  const portfolioResponse = `
    <div class="portfolio-container">
      <div class="portfolio-item">
        <img src="www/images/lol (1).png" id="Portfolio" alt="Portfolio Image 1">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (2).png" id="Portfolio" alt="Portfolio Image 2">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (3).png" id="Portfolio" alt="Portfolio Image 3">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (4).png" id="Portfolio" alt="Portfolio Image 4">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (5).png" id="Portfolio" alt="Portfolio Image 5">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (6).png" id="Portfolio" alt="Portfolio Image 6">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (7).png" id="Portfolio" alt="Portfolio Image 7">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (8).png" id="Portfolio" alt="Portfolio Image 8">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (9).png" id="Portfolio" alt="Portfolio Image 9">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (10).png" id="Portfolio" alt="Portfolio Image 10">
      </div>
      <div class="portfolio-item">
        <img src="www/images/lol (11).png" id="Portfolio" alt="Portfolio Image 11">
      </div>
    </div>
  `;
  displayAnswerWithTypingEffect(portfolioResponse);
  break;


    case 'show me your certification?':
  const certification = `
    <div class="portfolio-container">
      <div class="portfolio-item">
        <img src="www/images/mygreatlearning.jpg" id="Portfolio" alt="Certification Image 1">
        <p>Completed the Great Learning online course in Front End Development - HTML.</p>
      </div>
      <div class="portfolio-item">
        <img src="www/images/cisco.png" id="Portfolio" alt="Certification Image 2">
        <p>Achieved Cisco Certified Network Associate (CCNA) certification.</p>
      </div>
      <div class="portfolio-item">
        <img src="www/images/mygretlearningCSS.jpg" id="Portfolio" alt="Certification Image 3">
        <p>Successfully completed the Great Learning online course in Front End Development - CSS.</p>
      </div>
      <div class="portfolio-item">
        <img src="www/images/JavaScript_Essentials_1.jpg" id="Portfolio" alt="Certification Image 3">
        <p>Successfully completed the JavaScript Essentials 1 course, provided by Cisco Networking Academy in collaboration with OpenEDG JS Institute.</p>
      </div>
      <div class="portfolio-item">
        <img src="www/images/nc.jpg" id="Portfolio" alt="Certification Image 3">
        <p>Successfully completed the TESDA course in Computer Syetem Servicing NC.</p>
      </div>
    </div>
  `;
  displayAnswerWithTypingEffect(certification);
  break;



    case 'what are you up to?':
      const doingResponse = `
        Here's an overview of what I'm currently engaged in:
        <ul>
          <li>Web Development - Passionately diving into the world of web development.</li>
          <li>Concept Art - Enthusiastically exploring the depths of concept art.</li>
        </ul>

      `;
      displayAnswerWithTypingEffect(doingResponse);
      break;

    case 'what are your skills?':
      const skillsResponse = `
        As a versatile individual with a passion for both technology and creativity, here are some of my key skills:
        <ul>
          <li>Digital Art</li>
          <li>Programming</li>
          <li>Web Development</li>
          <li>Artistic Vision</li>
          <li>Collaboration</li>
          <li>Adaptability</li>
          <li>Attention to Details</li>
          <li>Continuous Learning</li>
        </ul>
        I specialize in various skills that contribute to my expertise in the field. Here are some of my key areas:
        <ul>
          <li>Photoshop</li>
          <li>Ibis Paint</li>
          <li>Krita</li>
          <li>HTML And CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>C</li>
          <li>C++</li>
          <li>JAVA</li>
          <li>Visual Basic</li>
          <li>Microsoft Application</li>
        </ul>
      `;
      displayAnswerWithTypingEffect(skillsResponse);
      break;

    case 'how can we reach you?':
      const contactResponse = `
        Thank you for reaching out! You can contact me through the following channels:
        <ul>
          <li>Email: jpatrickogalesco@gmail.com</li>
          <li>Phone: 0938 070 ****</li>
          <li>Location: Viga Catanduanes</li>
        </ul>
        Social Media:
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/profile.php?id=100078646130852" target="_blank">Facebook Profile</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/patrickogalesco" target="_blank">LinkedIn Profile</a></li>
        </ul>
      `;
      displayAnswerWithTypingEffect(contactResponse);
      break;

    case 'do you have any job experience?':
  const jobExperienceResponse = `
    As of now, I don't possess any formal job experience. However, I firmly believe that my passion for learning and my commitment to excellence compensate for my lack of formal work history. I am a motivated individual who thrives on challenges and is eager to immerse myself in various professional environments to gain valuable experience.<br><br>
    Despite not having job experience, I have actively engaged in self-directed projects, academic pursuits, and extracurricular activities, all of which have contributed to my skill set and personal growth. I approach every task with dedication and a desire to learn, and I am confident in my ability to adapt quickly to new roles and responsibilities.<br><br>
    While I may not have a traditional job background, I am enthusiastic about the prospect of applying my knowledge and skills to real-world scenarios. I am open to opportunities that allow me to contribute meaningfully to a team, develop professionally, and make a positive impact on any organization I join.
    In summary, while I may not have job experience in the conventional sense, I am a proactive and ambitious individual ready to embark on a fulfilling professional journey and make valuable contributions to any team or project I become a part of.<br><br>
    <strong>Job Experience:</strong><br>
    - (CSS) Computer System Serving Trainer: Teaching senior high school CSS strand in 40 days.
    <br>- Computer Assembly
    <br>- Networking
    <br>- Server Configuration
  `;
  displayAnswerWithTypingEffect(jobExperienceResponse);
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

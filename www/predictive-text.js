
// // Array of predictive text options---------------suggestion forn js
// let predictiveTextOptions = [
// "How can we reach you?",

// "Tell me about yourself.",

// "What is your educational background?",

// "What are your skills?",

// "What are you up to?",

// "Do you have any job experience?",

// "Show me your work?",
// ];
// predictiveTextOptions.sort();

// const input = document.getElementById("chat-input");
// const suggestion = document.getElementById("suggestion");

// // Event listener for input changes
// input.addEventListener("input", () => {
//   clearSuggestion();
//   const inputWords = input.value.split(" ");
//   const lastWord = inputWords[inputWords.length - 1];
//   const regex = new RegExp("^" + lastWord, "i");

//   const matchingSuggestions = predictiveTextOptions.filter(option =>
//     regex.test(option.toLowerCase())
//   );

//   if (matchingSuggestions.length > 0 && lastWord !== "") {
//     matchingSuggestions.forEach(suggest => {
//       const suggestionItem = document.createElement("div");
//       suggestionItem.textContent = suggest;
//       suggestionItem.classList.add("suggestion-item");
//       suggestionItem.addEventListener("click", () => {
//         applySuggestion(suggest);
//         clearSuggestion();
//       });
//       suggestion.appendChild(suggestionItem);
//     });
//   }
// });

// // Event listener for Enter key press
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && suggestion.childElementCount > 0) {
//     e.preventDefault();
//     applySuggestion(suggestion.textContent.trim());
//     clearSuggestion();
//   }
// });

// const applySuggestion = (selectedSuggestion) => {
//   const currentInput = input.value;
//   const updatedInput = currentInput.replace(/\S+$/, "");
//   input.value = updatedInput + selectedSuggestion;
// };

// const clearSuggestion = () => {
//   suggestion.innerHTML = "";
// };

// sendButton.style.display = "block";




let predictiveTextOptions = [
  "Tell me about yourself.",
  "What is your educational background?",
  "What are your skills?",
  "What are you up to?",
  "Do you have any job experience?",
  "Show me your work?",
  "How can we reach you?",
];
predictiveTextOptions.sort();

const input = document.getElementById("chat-input");
const suggestion = document.getElementById("suggestion");

// Event listener for input changes
input.addEventListener("input", () => {
  clearSuggestion();
  const inputWords = input.value.split(" ");
  const lastWord = inputWords[inputWords.length - 1];

  predictiveTextOptions.forEach(suggest => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = suggest;
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.addEventListener("click", () => {
      applySuggestion(suggest);
      clearSuggestion();
    });
    suggestion.appendChild(suggestionItem);
  });
});

// Event listener for Enter key press
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && suggestion.childElementCount > 0) {
    e.preventDefault();
    const firstSuggestion = suggestion.firstChild.textContent;
    applySuggestion(firstSuggestion);
    clearSuggestion();
  }
});

const applySuggestion = (selectedSuggestion) => {
  const currentInput = input.value;
  const updatedInput = currentInput.replace(/\S+$/, "");
  input.value = updatedInput + selectedSuggestion;
};

const clearSuggestion = () => {
  suggestion.innerHTML = "";
};

sendButton.style.display = "block";

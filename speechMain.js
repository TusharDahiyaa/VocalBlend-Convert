//Checks if the Web Speech API is available in the browser.
if ("webkitSpeechRecognition" in window) {
  //   Creates a new instance of webkitrecognition if available.
  let recognition = new webkitSpeechRecognition();
  let finalTranscript = "";

  //   Configures speech recognition settings
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = document.querySelector("#selectDialect").value;

  // Event handlers for onstart, onerror, onend, and onresult events
  recognition.onstart = () => {
    updateListeningStatus(true);
  };
  recognition.onerror = (event) => {
    updateListeningStatus(false);
    console.log("Speech Recognition Error: ", event.error);
  };
  recognition.onend = () => {
    updateListeningStatus(false);
    console.log("Speech Recognition Ended");
  };

  recognition.onresult = (event) => {
    let interimTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        // Displays the recognized speech in the #final and #interim elements
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    document.querySelector("#final").innerHTML = finalTranscript;
    document.querySelector("#interim").innerHTML = interimTranscript;
  };

  document.querySelector("#start").onclick = () => {
    recognition.start();
  };
  document.querySelector("#stop").onclick = () => {
    recognition.stop();
  };

  // Event listener for the "Clear" button
  document.querySelector("#clear").onclick = () => {
    clearTranscript();
  };

  function updateListeningStatus(isListening) {
    let statusElement = document.querySelector("#status");
    if (isListening) {
      statusElement.style.display = "block";
    } else {
      statusElement.style.display = "none";
    }
  }

  function clearTranscript() {
    // Clear the final transcript and update the display
    finalTranscript = "";
    document.querySelector("#final").innerHTML = "";
    document.querySelector("#interim").innerHTML = "";
  }
} else {
  console.log("Speech Recognition Not Available");
}

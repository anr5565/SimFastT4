function addCharacter(character) {
    const textField = document.getElementById("keyboardtextfield");
    textField.value += character;
  }

  function deleteCharacter() {
    const textField = document.getElementById("keyboardtextfield");
    textField.value = textField.value.slice(0, -1);
  }

  function displayflightstrip(){
  const textField = document.getElementById("callsigntext");
  textField.value += "001";
  }

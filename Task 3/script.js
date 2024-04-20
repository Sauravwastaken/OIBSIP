let btn = document.getElementById("btn");
let userInput = document.getElementById("userInput");
let userInputSelect = document.getElementById("userInputSelect");
let userOutput = document.getElementById("userOutput");
let userOutputSelect = document.getElementById("userOutputSelect");

function removeSameType() {
  // 1
  for (let i = 0; i < 3; i++) {
    userOutputSelect.options[i].disabled = false;
  }

  let toRemove = userOutputSelect.querySelector(
    `option[value='${userInputSelect.value}']`
  );

  toRemove.disabled = true;

  // 2

  if (userInputSelect.value == userOutputSelect.value) {
    if (userInputSelect.value == "Celcius") {
      let option = userOutputSelect.querySelector("option[value='Fahrenheit']");
      option.selected = true;
    } else if (userInputSelect.value == "Fahrenheit") {
      let option = userOutputSelect.querySelector("option[value='Celcius']");
      option.selected = true;
    } else {
      let option = userOutputSelect.querySelector("option[value='Celcius']");
      option.selected = true;
    }
  }
}
removeSameType();

function temperatureConverter() {
  if (userInput.value == "") {
    userInput.value = 0;
  }

  // Conversion from Celcius
  if (userInputSelect.value == "Celcius") {
    // ! Celcius into Fahrenheit
    if (userOutputSelect.value == "Fahrenheit") {
      let result = (userInput.value * 9) / 5 + 32;
      userOutput.value = result.toFixed(2) + "°F";
    }

    // ! Celcius into Kelvin
    else if (userOutputSelect.value == "Kelvin") {
      let result = parseInt(userInput.value) + 273.15;
      userOutput.value = result.toFixed(2) + "k";
    }
  }

  //   Conversion from Fahrenheit
  else if (userInputSelect.value == "Fahrenheit") {
    // ! Fahrenheit into Celcius
    if (userOutputSelect.value == "Celcius") {
      let result = ((userInput.value - 32) * 5) / 9;
      userOutput.value = result.toFixed(2) + "°C";
    }

    // ! Fahrenheit into Kelvin
    else if (userOutputSelect.value == "Kelvin") {
      let result = ((userInput.value - 32) * 5) / 9 + 273.15;
      userOutput.value = result.toFixed(2) + "k";
    }
  }

  //   Connversion from Kevlin
  else {
    // ! Kelvin into Celcius
    if (userOutputSelect.value == "Celcius") {
      let result = userInput.value - 273.15;
      userOutput.value = result.toFixed(2) + "°C";
    }

    // ! Kelvin into Fahrenheit
    else if (userOutputSelect.value == "Fahrenheit") {
      let result = ((userInput.value - 273.15) * 9) / 5 + 32;
      userOutput.value = result.toFixed(2) + "k";
    }
  }
}

// Function called on clicking button
btn.addEventListener("click", () => {
  temperatureConverter();
});

// Function called on pressing enter
userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    temperatureConverter();
  }
});

// 1. Disabled selecting same type conversion
// 2. Changes same type conversion
userInputSelect.addEventListener("change", () => {
  removeSameType();
});

function BMIresult() {
  var w = weigh.value
  var h = heigh.value
  var bmi = (w / ((h / 100) ** 2)).toFixed(2)

  const radios = document.getElementsByName("gender");
    let isChecked=false;

    for (let radio of radios) {
      if (radio.checked) {
        isChecked = true;
        break;}
      }

  if (weigh.value && heigh.value && isChecked==true) {
    resultBMI.innerHTML = `YOUR BMI VALUE IS ${bmi}`
    if (bmi < 18.5) {
      condition.innerHTML = "UNDERWEIGHT!!"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      condition.innerHTML = "HEALTHY WEIGHT"
    }
    else if (bmi >= 25) {
      condition.innerHTML = "OVERWEIGHT!!"
    }
  }
  
  else {
    if (isChecked==false) {
      alert('Please select your gender.');
  }
    else if (weigh.value == 0) {
      alert("Please enter weight")
    }
    else {
      alert("Please enter height")
    }

  }
}




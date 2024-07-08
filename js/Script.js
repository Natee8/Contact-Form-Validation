let ValidateCamp = document.querySelectorAll('[name="ElementsCamp"]');
let email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}$/i;
let Form = document.getElementById('Form');
let Query = document.querySelectorAll('[name="Query"]');
let CheckBox = document.getElementById("CheckBx");

document.addEventListener('click', (event) => {
  let clickBx = document.querySelectorAll('.CheckBoxContainer input:checked + label')
  clickBx.forEach((label) => {
    label.classList.add('click')
  })
})


function SetError(input) {
  input.classList.add('BorderStyle')
};
function RemoveError(input) {
  input.classList.remove('BorderStyle')
};


function NameValidation(event) {
  let input = event.target;
  if (input.value == '') {
    SetError(input)
    return true;
  } else {
    RemoveError(input)
    return false;
  }
};

function EmailValidation() {
  let emailInput = ValidateCamp[2]
  if (!email.test(emailInput.value)) {
    SetError(emailInput)
    return true;
  } else {
    RemoveError(emailInput)
    return false;
  }
}

function ValidQuery() {
  let valueQuery = false;
  Query.forEach((Radio) => {
    if (Radio.checked) {
      valueQuery = true;
    }
  })
  if (!valueQuery) {
    Query.forEach(() => {
      let StyleRadio = document.querySelectorAll('.InptRadio')
      StyleRadio.forEach((RS) => {
        SetError(RS)
        return true;
      })
    })
  } else {
    Query.forEach((inpt) => {
      let StyleRadio = document.querySelectorAll('.InptRadio')
      StyleRadio.forEach((RS) => {
        RemoveError(RS)
        return false;
      })
    })
  }
}

function ValidationCheckBox() {
  let errorCheck = document.querySelector('.CheckBoxContainer input + label')
  if (!CheckBox.checked) {
    errorCheck.classList.add('error')
    return true;
  } else {
    errorCheck.classList.remove('error')
    return false;
  }
}

function ValidateAll() {
  let hasError = false;

  ValidateCamp.forEach(input => {
    let event = new Event('blur');
    input.dispatchEvent(event);
    if (input.classList.contains('BorderStyle')) {
      hasError = true;
    }
  });

  if (EmailValidation()) {
    hasError = true;
  }

  if (ValidQuery()) {
    hasError = true;
  }

  if (ValidationCheckBox()) {
    hasError = true;
  }

  return !hasError;
}

function Submitt() {
  if (ValidateAll()) {
    alert('Formulario Enviado!')
    ValidateCamp.forEach((camps) => {
      camps.value = ''
    })
    Query.forEach((checkbxvalue) => {
      checkbxvalue.checked = false
    })

    CheckBox.checked = false;
    let clickBx = document.querySelectorAll('.CheckBoxContainer input:checked + label')
    clickBx.forEach((label) => {
      label.classList.remove('click')
    })


  } else {
    alert('Preencha todos os campos antes de enviar!')
  }
}
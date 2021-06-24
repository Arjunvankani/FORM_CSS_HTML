$(document).ready(function validate () {
  let allIsValid = 0

  let titleRegistration = $('#titleRegistration')

  let userInformation = $('#userInformation')

  let username = $('#username')
  let firstName = $('#firstName')
  let lastName = $('#lastName')
  let email = $('#email')

  let password = $('#password')
  let confirmPassword = $('#confirmPassword')

  let verifyHuman = $('#verifyHuman')
  let numberVerification = $('#numberVerification')
  let incorrectSum = $('#incorrectSum')

  let ageVerification = $('#ageVerification')

  let nextStepFieldset = $('#nextStep')
  let nextStepBtn = $('#nextStepBtn')

  let submitFieldset = $('#submitFieldset')
  let submit = $('#submit')
  let submitBtn = $('#submitBtn')

  let yesBtn = $('#yesBtn')
  let noBtn = $('#noBtn')

  let congratulationsFieldset = $('#congratulationsFieldset')
  let stoppingFieldset = $('#stoppingFieldset')

  let emptyUsername = $('#emptyUsername')
  let errorUsername = $('#errorUsername p')
  let tooMuchLetters = $('#tooMuchLetters')
  let notEnoughLetters = $('#notEnoughLetters')
  let lettersOrNumbers = $('#lettersOrNumbers')

  let emptyFirstName = $('#emptyFirstName')
  let errorFirstName = $('#incorrectFirstName')

  let emptyLastName = $('#emptyLastName')
  let errorLastName = $('#incorrectLastName')

  let errorEmail = $('#incorrectEmail')
  let emptyEmail = $('#emptyEmail')

  let emptyPassword = $('#emptyPassword')
  let errorShortPassword = $('#tooShortPassword')
  let errorLongPassword = $('#tooLongPassword')

  let passwordNotMatch = $('#passwordNotMatch')
  let emptyField = $('#emptyField')

  nextStepBtn.on('click', function (event) {
    event.preventDefault()
    validateInfo()
  })

  function validateInfo () {
    validateForm(username, /^[A-Za-z\d]{3,20}$/g)
    validateForm(firstName, /^[A-Za-z]{1,1000}$/g)
    validateForm(lastName, /^[A-Za-z]{1,1000}$/g)
    validateForm(email, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)
    validateForm(password, /^.{5,15}$/g)
    validateForm(confirmPassword, /^.{1,1000}$/g)

    if (confirmPassword.val() === password.val()) {
      validateForm(password, /^.{5,15}$/g)
      validateForm(confirmPassword, /^.{5,15}$/g)
      allIsValid++
    } else {
      confirmPassword.css('border', '2px solid red')
    }
  }

  function validateForm (input, pattern) {
    if (pattern.test(input.val())) {
      input.css('border', '2px solid green')
      allIsValid++

      if (input == username) {
        emptyUsername.css('display', 'none')
        notEnoughLetters.css('display', 'none')
        tooMuchLetters.css('display', 'none')
        lettersOrNumbers.css('display', 'none')
      }

      else if (input == firstName) {
        emptyFirstName.css('display', 'none')
        errorFirstName.css('display', 'none')
      }

      else if (input == lastName) {
        errorLastName.css('display', 'none')
        emptyLastName.css('display', 'none')
      }

      else if (input == email) {
        errorEmail.css('display', 'none')
        emptyEmail.css('display', 'none')
      }

      else if (input == password) {
        errorShortPassword.css('display', 'none')
        errorLongPassword.css('display', 'none')
        emptyPassword.css('display', 'none')
      }

      else if (input == confirmPassword) {
        passwordNotMatch.css('display', 'none')
        emptyField.css('display', 'none')
      }

      if (input == confirmPassword) {
        if (confirmPassword.val() === password.val()) {
          confirmPassword.css('border', '2px solid green')
          passwordNotMatch.css('display', 'none')
          emptyField.css('display', 'none')
        }else {
          confirmPassword.css('border', '2px solid red')
          passwordNotMatch.css('display', 'block')
          emptyField.css('display', 'none')
        }
        nextStep()
      }
    }else {
      input.css('border', '2px solid red')
      allIsValid = 0

      if (input == username) {
        checkErrorUsername(username)
      }
      else if (input == firstName) {
        if (!/^.{1,1000}$/g.test(input.val())) {
          firstName.css('border', '2px solid red')
          errorFirstName.css('display', 'none')
          emptyFirstName.css('display', 'block')
        }else {
          emptyFirstName.css('display', 'none')
          errorFirstName.css('display', 'block')
        }
      }
      else if (input == lastName) {
        if (!/^.{1,1000}$/g.test(input.val())) {
          lastName.css('border', '2px solid red')
          errorLastName.css('display', 'none')
          emptyLastName.css('display', 'block')
        }else {
          emptyLastName.css('display', 'none')
          errorLastName.css('display', 'block')
        }
      }
      else if (input == email) {
        if (!/^.{1,1000}$/g.test(input.val())) {
          email.css('border', '2px solid red')
          errorEmail.css('display', 'none')
          emptyEmail.css('display', 'block')
        }else {
          emptyEmail.css('display', 'none')
          errorEmail.css('display', 'block')
        }
      }
      else if (input == password) {
        if (!/^.{1,1000}$/g.test(input.val())) {
          password.css('border', '2px solid red')
          errorShortPassword.css('display', 'none')
          errorLongPassword.css('display', 'none')
          emptyPassword.css('display', 'block')
        }else {
          checkPassword(password)
        }
      }
      else if (input == confirmPassword) {
        passwordNotMatch.css('display', 'none')
        emptyField.css('display', 'block')
      }
    }
  }

  function nextStep () {
    if (allIsValid > 7 && confirmPassword.val() === password.val()) {
      titleRegistration.css('display', 'none')
      verifyHuman.css('display', 'block')
      userInformation.css('display', 'none')
      nextStepFieldset.css('display', 'none')
      submitFieldset.css('display', 'block')
    }else {
      validateInfo()
    }
  }

  submitBtn.on('click', function (event) {
    event.preventDefault()
    if (numberVerification.val() == 7) {
      verifyHuman.css('display', 'none')
      submitFieldset.css('display', 'none')
      ageVerification.css('display', 'block')
      verifyAge()
    }else {
      verifyHuman.css('display', 'block')
      incorrectSum.css('display', 'block')
    }
  })

  function verifyAge () {
    yesBtn.on('click', function (event) {
      event.preventDefault()
      congratulationsFieldset.css('display', 'block')
      ageVerification.css('display', 'none')
    })

    noBtn.on('click', function (event) {
      event.preventDefault()
      stoppingFieldset.css('display', 'block')
      ageVerification.css('display', 'none')
    })
  }

  function checkErrorUsername (input) {
    if (!/^.{1,1000}$/g.test(input.val())) {
      username.css('border', '2px solid red')
      lettersOrNumbers.css('display', 'none')
      notEnoughLetters.css('display', 'none')
      tooMuchLetters.css('display', 'none')
      emptyUsername.css('display', 'block')
    }else {
      if (!/^[A-Za-z\d]{1,1000}$/g.test(input.val())) {
        emptyUsername.css('display', 'none')
        notEnoughLetters.css('display', 'none')
        tooMuchLetters.css('display', 'none')
        lettersOrNumbers.css('display', 'block')
      } else {
        if (!/^[A-Za-z\d]{3,}$/g.test(input.val())) {
          emptyUsername.css('display', 'none')
          lettersOrNumbers.css('display', 'none')
          tooMuchLetters.css('display', 'none')
          notEnoughLetters.css('display', 'block')
        }else {
          emptyUsername.css('display', 'none')
          lettersOrNumbers.css('display', 'none')
          notEnoughLetters.css('display', 'none')
          tooMuchLetters.css('display', 'block')
        }
      }
    }
  }

  function checkPassword (input) {
    if (!/^.{5,}$/g.test(input.val())) {
      emptyPassword.css('display', 'none')
      errorLongPassword.css('display', 'none')
      errorShortPassword.css('display', 'block')
    }else {
      emptyPassword.css('display', 'none')
      errorShortPassword.css('display', 'none')
      errorLongPassword.css('display', 'block')
    }
  }
})
function generatePassword() {
    let length = prompt('Choose a password length between 8 and 128 characters');
    length = Math.floor(Math.random() * (128 - 8 + 1) + 8);
    let password = '';
    let lowerCase = confirm('Include lowercase letters?');
    let upperCase = confirm('Include uppercase letters?');
    let numeric = confirm('Include numeric characters?');
    let special = confirm('Include special characters?');

    if (lowerCase || upperCase || numeric || special) {
      let typesCount = lowerCase + upperCase + numeric + special;
      let options = {
        lowerCase: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: '!@#$%^&*()_-+={}[]|?/.,:;<>',
      };

      for (let i = 0; i < length; i++) {
        let typeIndex = Math.floor(Math.random() * typesCount);
        let selectedType;

        switch (typeIndex) {
          case 0:
            selectedType = options.lowerCase;
            break;
          case 1:
            selectedType = options.upperCase;
            break;
          case 2:
            selectedType = options.numeric;
            break;
          case 3:
            selectedType = options.special;
            break;
        }

        password += selectedType[Math.floor(Math.random() * selectedType.length)];
      }
    } else {
      alert('Please select at least one character type');
      return;
    }

    alert('Generated password: ' + password);
 }

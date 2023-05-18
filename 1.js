const vowels = ["a", "e", "i", "o", "u", "y"]

function ask_password(login,password,success,failure){

    passwordLetters = password.replaceAll('', ' ').split(' ').filter( (letter) => {
        return isNaN(letter);
    });

    loginLetters = login.replaceAll('', ' ').split(' ').filter( (letter) => {
        return !vowels.includes(letter) && isNaN(letter);
    });

    passwordVowels = passwordLetters.filter((item) => {
        return vowels.includes(item);
    });

    passConsonants = passwordLetters.filter((item) => {
        return !vowels.includes(item);
    });

    if(passwordVowels.length != 3 && passConsonants != loginLetters){
        failure(login, "Everything is wrong!")
        return;
    }

    if(passwordVowels.length != 3){
        failure(login, "Wrong number of Vowels!");
        return;
    }

    if(passConsonants.toString() != loginLetters.toString()){ 
        failure(login, "Wrong consonants!");
        return;
    }

    success(login);
    
};

function failure(login, errorText){
     
}

function success(login){
}

function main(login, password){

    let error;
    let error_code;

    let failure = (login, errorText) => {
        error = true;
        error_code = errorText;
    }

    let success = (login) => {
        error = false;
    }

    ask_password(login, password, success, failure);

    if(error == true){
        console.log('Кто-то пытался притвориться пользователем ' + login + ', но в пароле допустил ошибку: ' + error_code.toUpperCase());
    }

    if(error == false){
        console.log('Привет, ' + login);
    }

}

main('anastasia1337', 'nsyatos22');
main('eugene', 'aanig123123');
const users = document.querySelector('#user');
const company = document.querySelector('#company');
const words = document.querySelector('#words');

function updateUserCount() {
    let user_count = 0; // Initialize user_count

    const intervalId = setInterval(function() {
        user_count += 1;
        users.innerText = user_count;

        if (user_count >= 360) {
            clearInterval(intervalId);
            users.innerText = '360+' // Stop the interval when user_count reaches 1000
        }
    }, 2);
}

function updateCompanyCount() {
    let company_count = 0; // Initialize user_count

    const intervalCompany = setInterval(function() {
        company_count += 1;
        company.innerText = company_count;

        if (company_count >= 230) {
            clearInterval(intervalCompany);
            company.innerText = '230+'
        }
    }, 2);
}

function updateWordsCount() {
    let words_count = 0;

    const intervalWord = setInterval(function() {
        words_count += 1;
        words.innerText = words_count+'M';

        if (words_count >= 230) {
            clearInterval(intervalWord);
            words.innerText = '230M+';
        }
    },2);
}

updateUserCount();
updateCompanyCount();
updateWordsCount();
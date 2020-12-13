function registration() {

    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;

    const data = {
        email: "SFSBDFSDBFHJ@gmail.com", // email,
        firstName: "async", // firstName,
        lastName: "async",  // lastName,
        password: "async"   // password};
    }


    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://b15126db5bb0.ngrok.io/register', true);

    //Передает правильный заголовок в запросе
    xhr.setRequestHeader("Content-type", 'application/json');
    xhr.setRequestHeader("mode", 'no-cors');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'no');


    xhr.onreadystatechange = function () {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // Запрос завершен. Здесь можно обрабатывать результат.
        }
    }
    xhr.send(data);

    /*postData('https://b15126db5bb0.ngrok.io/register', data)
        .catch((error) => {
            console.log(error);
        });*/
}


async function postData(url, data) {

    const request = new Request('https://5885fc58d480.ngrok.io/register', { mode: 'no-cors', method: 'POST', body: '{"email": "SFSBDFSDBFHJ@gmail.com,"firstName": "async",lastName: "async", "pasword": "async"}' });
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Что-то пошло не так на API сервере.');
            }
        })
        .then(response => {
            console.debug(response);
            // ...
        }).catch(error => {
            console.error(error);
        });


    /*
        try {
            const response = await fetch(url, {
                mode: 'no-cors',
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.error('Ошибка:', error);
        }*/
}

/*
async function postData(url = '', data) {
    console.log(JSON.stringify(data));
    const body = JSON.stringify(data);
    const response = await fetch(url, {
        mode: 'no-cors',
        credentials: 'include',
        method: 'POST',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Access-Control-Allow-Origin': 'no',
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: body // body data type must match "Content-Type" header
    });
    console.log('response = ', response);
    console.log('response.json() = ', response.json());
    return await response.json();
}
*/

/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({ "email": "a236ynJ@gmail.com", "firstName": "async", "lastName": "async", "password": "async" });

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:3000/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    */
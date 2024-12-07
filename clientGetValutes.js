const soap = require('soap');

const url = 'http://localhost:8000/wsdl?wsdl'; // URL прокси-сервера

// Функция для получения данных о валюте
function getValute(code, startDate, endDate) {
    const args = {
        code: code,
        startDate: startDate,
        endDate: endDate
    };

    soap.createClient(url, function(err, client) {
        if (err) throw err;
        client.getValute(args, function(err, result) {
            if (err) throw err;
            console.log('Полученные данные о валюте:', JSON.stringify(result.values));
        });
    });
}

// Пример вызова функции получения данных о валюте
getValute('R01010', '2023-03-01T00:00:00', '2023-03-15T00:00:00'); // Код валюты и даты в формате ISO
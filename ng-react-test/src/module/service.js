function getList() {
    return query('getList');
}

let domain = 'http://localhost:8000/';
const Status_Success = 200;
function query(name) {
    return fetch(domain + 'mock/' + name +'.json', {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit'
    })
    .then(function (response) {
        if (response.status === Status_Success) {
            return response.json()
        }
    })
}

export default {
    getList: getList
}
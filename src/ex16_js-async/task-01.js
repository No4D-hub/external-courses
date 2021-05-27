function myFetch(URL, method) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.open(method, URL, true);
        if (method === 'GET') {
            xhr.send()
        } else {
            let formData = new FormData();
            xhr.send(formData);
        }
        xhr.onload = () => resolve(console.log('Success!'));
        xhr.onerror = () => reject(console.log(`Error ${xhr.status}:${xhr.statusText}`))
    });
}

module.exports = myFetch;
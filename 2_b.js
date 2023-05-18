function readConfig (name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function doQuery (statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function httpGet (url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function readFile (path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function readConfigNotifyer () {
    callback()
    doQuery('select * from cities', doQueryNotifier)
}

function doQueryNotifier(){
    callback()
    httpGet('http://google.com', httpGetNotifyer)
}

function httpGetNotifyer(){
    callback()
    readFile('README.md',callback)
}

function callback(){
    console.log('It is done!')
}

// Вызов функций
console.log('start')
readConfig('myConfig', readConfigNotifyer)

    

function fx(x){

    let callback = (value)=>{
        console.log('F(x) = ' + value.toString())
    }

    f1(x, callback);
    
}

function f1(x, callback){
    setTimeout(()=>{
        let value = x*x;
        console.log("F1(x) = " + value);
        console.log("F(x) промежуточное = " + value);
        f1Notify(x,value,callback)
    }, 0);
}

function f1Notify(x, value, callback){
    f2(x, value, callback);
}

function f2(x, value, callback){
    setTimeout(()=>{
        let res = 2*x;
        value += res;
        console.log("F2(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        callback(value);
    },0)
    
}

fx(3);
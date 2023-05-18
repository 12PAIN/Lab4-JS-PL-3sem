
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
        f2Notify(x,value,callback)
    },0);
}

function f2Notify(x, value, callback){
    f3(x,value,callback);
}

function f3(x,value,callback){
    setTimeout(()=>{
        let res = -2;
        value += res;
        console.log("F3(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        f3Notify(x,value,callback);
    }, 0);
}

function f3Notify(x,value,callback){
    f4(x,value,callback);
}

function f4(x, value, callback){
    setTimeout(()=>{
        let res = x * 5;
        value += res;
        console.log("F4(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        f4Notify(x,value,callback);
    },0);
}

function f4Notify(x,value,callback){
    f5(x,value,callback);
}

function f5(x,value,callback){
    setTimeout(()=>{
        let res = x*x*x;
        value += res;
        console.log("F5(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        f5Notify(x,value,callback);
    },0);
}

function f5Notify(x,value,callback){
    f6(x,value,callback);
}

function f6(x,value,callback){
    setTimeout(()=>{
        let res = x*x*2;
        value += res;
        console.log("F6(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        callback(value);
    },0);
}

fx(3);
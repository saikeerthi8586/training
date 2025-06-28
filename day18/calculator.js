function cal(a,b,c){
    if(c=="+"){
        var x=add(a,b);
        return x;
    }
    else{
        var x=sub(a,b);
        return x;
    }
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(cal(10,5,"+"));
console.log(cal(10,5,"-"));
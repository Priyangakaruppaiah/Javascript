let a=10
function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(a,b,c)
    }
    inner()
}
outer()
function outer1(){
    let count = 0
    function inner(){
            count++         
            
            console.log(count)
    }
    return inner
}
const fn=outer1()
fn()
fn()

function sum(a,b,c){
    return a + b + c
}

function normalFunction(){
    console.log('Welcome')
    console.log('JavaScript')
}
normalFunction()

function* generatorFunction(){
    yield 'Welcome'
    yield 'js'
}
const generatorObject = generatorFunction()
for(const word of generatorObject){
    console.log(word)
}

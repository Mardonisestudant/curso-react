function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if(temParam('--production')){
    console.log('Atenção total!')
}else{
    console.log('Tranquilo!!!')
}
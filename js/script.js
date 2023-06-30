'use strict'

const buttonNum = document.querySelectorAll('.button_number');
const buttonAct = document.querySelectorAll('.button_action')
let output = document.querySelector('.output')
let input = document.querySelector('.input')
let lastResult = document.querySelector('.last_result')

buttonNum.forEach(element =>{
    
        element.addEventListener('click', () =>{
            if(!buttonAct.value){
            input.value += element.textContent;
            }
        })
        
})

buttonAct.forEach(element =>{
    let checkStr = input.value;
    
    console.log(checkStr)
    
        element.addEventListener('click', () =>{
            if(!input.value.endsWith('+') && !input.value.endsWith('-') && !input.value.endsWith('*') && !input.value.endsWith('/') ){
                input.value += element.textContent
                
            }
        })

    const clearBTN = document.querySelectorAll('.button_clear')
    clearBTN[0].addEventListener('click', () =>{
        input.value = '';
        output.value = '';
    })
    clearBTN[1].addEventListener('click', () =>{
        lastResult.value = '';
    })

  
})

let getResult = document.querySelector('.go')
getResult.addEventListener('click', () => {
    try{
        output.value = eval(input.value)
        lastResult.value += output.value
        lastResult.value += ' '
    }catch(err){
        output.value = 'Пошел нахуй, пидор'
    }
    

})
output.textContent = getResult.value;


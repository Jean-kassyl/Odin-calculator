const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll(".number")
const equal = document.querySelector(".equal")
const decimal = document.querySelector(".decimal")
const clear = document.querySelector(".clear")
const del = document.querySelector(".delete")
const operation = document.querySelector(".operation")
const screen_result = document.querySelector(".result")

let result = ""
let number = ""
let number2 = ""
let screen_operation = ""
let operator = ""

numbers.forEach(num => {
    num.addEventListener("click", setNumber)
})

operators.forEach(op => {
    op.addEventListener('click', setOperator)
})

decimal.addEventListener("click", setDecimal)

equal.addEventListener('click', () => {
    console.log(screen_operation,"operator ", operator, "number2 ", number2)
    if(result || (number && operator && number2)) {
        calculate_operation()
        number = result
        number2 = ""
    }
})

function setNumber(e){
    if(screen_operation.length > 1 && screen_operation.includes(operator)) {
        number2 += e.currentTarget.textContent.trim()
        screen_operation += " " + number2
        set_Operation_onscreen()
    } else {
        number += e.currentTarget.textContent.trim()
        screen_operation = number
        set_Operation_onscreen()
    }
    
    
}

function setDecimal() {
    if(number.includes('.') || !number.includes('.') && number.length < 1) {
        number = number
    } else {
        number += "."
    }
    screen_operation = number
    set_Operation_onscreen()
}


function set_Operation_onscreen() {
    operation.textContent = screen_operation
}

function setOperator(e) {
    if(screen_operation.length < 1){
        operator = ""
    } else if (screen_operation.includes('+') || screen_operation.includes('-') || screen_operation.includes('×') || screen_operation.includes('÷') ) {
        if(operation.textContent.includes(number2)) {
            calculate_operation()
            number = result
            operator = e.currentTarget.textContent.trim()
            screen_operation += " " + operator 
            set_Operation_onscreen()
            number2 = ""
            
        } else if(result) {
            operator = e.currentTarget.textContent.trim()
            screen_operation += " " + operator 
            set_Operation_onscreen()
        } else {
            operator = ""
        }
    } else {
        operator = e.currentTarget.textContent.trim()
        screen_operation += " " + operator 
        set_Operation_onscreen()
    }
    
}

function calculate_operation() {
    if(operator && number && number2) {
        switch(operator){
            case '×':
                result = multiply(Number(number), Number(number2) )
                break
            case '÷':
                result = divide(Number(number), Number(number2 ) )
                break
            case '-':
                result = substract(Number(number), Number(number2) )
                break
            default:
                result = add(Number(number), Number(number2) )
        }

        screen_result.textContent = result
    }
}

// const btns = document.querySelectorAll('.btn');
// const operation = document.querySelector('.operation')
// const result = document.querySelector('.result')

// let number = ""
// let operator = ""
// let number1 = ""
// let op = ''





// btns.forEach(btn => {
//     btn.addEventListener("click", operate)
// })

// function operate(e){
    
//     getArguments(e)
//     if(!number1 ){
//         operation.textContent = number
//     } else if (number1 && !e.currentTarget.classList.contains("equal")){
//         operation.textContent = ''
//         operation.textContent += number1 + " " + op  +" " + number
//     }
//     console.log(number)
//     if (operator) {
//         console.log(operator)
//         number1 = number
//         number = ""
//         operation.textContent += " " + operator
//         op = operator
//         operator = ""
//     }
//     if (e.currentTarget.classList.contains("equal") ) {
        
//         if (number1 && op && number){
            // switch(op){
            //     case '×':
            //         result.textContent = multiply(number1, number)
            //         break
            //     case '÷':
            //         result.textContent = divide(number1, number)
            //         break
            //     case '-':
            //         result.textContent = substract(number1, number)
            //         break
            //     default:
            //         result.textContent = add(number1, number)
            // }
//         }
//     }
// }

// function getArguments(e){
//     let currentBtn = e.currentTarget
    
//     if (currentBtn.classList.contains("clear")){
//         console.log("clearing the screen")
//     } else if (currentBtn.classList.contains("C")){
//         console.log("deleting numbers")
//     } else if(currentBtn.classList.contains("multiply")){
//         operator = '×'
//         return 
//     } else if(currentBtn.classList.contains("division")){
//         operator = '÷'
//         return
//     } else if(currentBtn.classList.contains("addition")){
//         operator = '+'
//         return
//     } else if(currentBtn.classList.contains("subtract")){
//         operator = '-'
//         return
//     } else if(currentBtn.classList.contains("equal")){
//         return
//     }
//     else {
//         if(number.includes('.') && currentBtn.textContent.trim() == '.'){
//             number = number
//         } else {
//              number += currentBtn.textContent.trim()
//         }

        
//     }
   
// }

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function substract(a,b){
    return a - b
}

function add(a,b){
    return a + b
}
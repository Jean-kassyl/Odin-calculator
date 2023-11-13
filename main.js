const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll(".number")
const equal = document.querySelector(".equal")
const decimal = document.querySelector(".decimal")
const clear = document.querySelector(".clear")
const del = document.querySelector(".delete")

const screen_result = document.querySelector(".result")

const negate = document.querySelector(".negate")
let result = ""
let number = ""
let number2 = ""
let operator = ""
screen_result.textContent = 0

numbers.forEach(num => {
    num.addEventListener("click", setNumber)
})

operators.forEach(op => {
    op.addEventListener('click', setOperator)
})

decimal.addEventListener("click", setDecimal)

equal.addEventListener('click', () => {
    calculate_operation()
    screen_result.textContent = result
    number = result
    number2 = ""
    operator =""
})

del.addEventListener("click", () => {
    let str_result = String(result)
    let new_result = str_result.replace(str_result.charAt(str_result.length - 1), " ").trimEnd()
    result = Number(new_result)
    screen_result.textContent = result
    check_current_number()
})

clear.addEventListener("click", () => {
    result = "0"
    screen_result.textContent = result
    number = ""
    number2 = ""
    operator = ""
})

negate.addEventListener("click", () => {
    result = result * -1
    screen_result.textContent = result
    if(operator){
        number2 = result
    }
    else {
        number = result
    }
})


//////////////////////////////////////////////////functions //////////////////

function setNumber(e){
    if(number && operator ) {
        
        if (number2.length < 15){
            number2 += e.currentTarget.textContent.trim()
        }  
        result = number2
        screen_result.textContent = result
        console.log("number 2", number2)
        
    } else {
        if (number.length < 15){
            number += e.currentTarget.textContent.trim()
        }  
        console.log(number)
        result = number
        screen_result.textContent = result
      
    }
    
    
}

function setDecimal() {
    if(result.includes('.') || !result.includes('.') && result.length < 1) {
        result = result
    } else {
        result += "."
        screen_result.textContent = result
        check_current_number()
       
    }
   
}


function check_current_number() {
    if (operator){
        number2 = result == "0" ? "": result
    }else {
        number = result == "0" ? "": result
    }
}


function setOperator(e) {
    if(result){
        if (!operator){
            operator = e.currentTarget.textContent.trim()
            console.log("operator ", operator)
        }else if(operator && number2){
            
            calculate_operation()
            screen_result.textContent = result
            number = result
            operator = e.currentTarget.textContent.trim()
            number2 = ""
    
        }
    } 
   
   
}

function calculate_operation() {
    if(operator && number && number2) {
        switch(operator){
            case '×':
                result = multiply(Number(number), Number(number2) )
                break
            case '÷':
               if(Number(number2) != 0){
                result = divide(Number(number), Number(number2 ) )
               } else {
                result = "lmao"
               }
                break
            case '-':
                result = substract(Number(number), Number(number2) )
                break
            default:
                result = add(Number(number), Number(number2) )
        }

    }
}


////////////////////////////operation////////////////////////////////////////


function multiply(a,b){
    let r = a * b
    if (String(r).length > 10){
        return r.toExponential(3)
    }
    return r
}

function divide(a,b){
    let r = a / b
    if (String(r).length > 10){
        return r.toFixed(7)
    }
    return r
}



function substract(a,b){
    let r = a - b
    if (String(r).length > 10){
        return r.toExponential(3)
    }
    return r
}

function add(a,b){
    let r = a + b
    if (String(r).length > 10){
        return r.toExponential(3)
    }
    return r
}
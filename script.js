class Calculator {
    constructor(previousOperandButtons, currentoperandButtons) {
        this.previousOperandButtons = previousOperandButtons
        this.currentoperandButtons = currentoperandButtons
        this.clear
    }
}

clear(); {
this.currentOperand = ''
this.previousoperand = ''
this.operation = undefined
}

delete(); {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number); {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation); {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperandOperand
    this.currentOperand = ''
}

compute(); {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operatoin) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '+':
            computation = prev / current
            break
        default:
            return  
            
    }
    this.current = computation
    this.operation = undefined
    this.previousOperand = ''
}
getDisplayNumber(number); 
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let (isNaN(integerDigits)) 
    if  (integerDisplay = '') {

    } 
       else {
        integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
        return '${intergerDisplay}.${decimalDigits}'
    }   else {
        return intergerDisplay
    }

updateDisplay(); {
this.currentOperandTextElemnt.innerText = this.currentOperand
this.previousOperandTextElemnt.innerText = this.previousOperand
if (this.operation != null) {
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
}   else {
    this.previousOperandTextElemnt.innerText = ''
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandButtons = document.querySelectorAll('[data-previous-operand]')
const currentoperandButtons = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElemnt, currentOperandTextElemnt)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButtons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delateButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

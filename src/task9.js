const loanAmount = 200000;
const interestRate = 10;
const loanTerm = 2; 

const interest = loanAmount * (interestRate / 100);
const totalPayment = loanAmount + interest;
const overpayment = interest;

console.log("Общая сумма выплаты:", totalPayment, "рублей");
console.log("Переплата по кредиту:", overpayment, "рублей");

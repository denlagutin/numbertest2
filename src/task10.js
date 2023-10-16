const totalBill = 3500;
const tip = 500; 
const numberOfPeople = 6;

const totalPaymentPerPerson = (totalBill + tip) / numberOfPeople;

console.log("С каждого по", totalPaymentPerPerson, "рублей, при общем счете", totalBill, "рублей и чаевых", tip, "рублей");
const element=document.querySelector("#btnAddExpense");
const headingEl=document.querySelector("#headingTotal");

let totalExpense=0;
function addExpenseToTotal(){    
  const inputElement=document.querySelector("#inputAmount");
  const textAmount=inputElement.value;  
  const expense=parseInt(textAmount);  
  totalExpense=totalExpense+expense;
  headingEl.textContent=totalExpense;
}
element.addEventListener("click",addExpenseToTotal,false); 
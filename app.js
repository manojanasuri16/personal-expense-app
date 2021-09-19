const inputElement=document.querySelector("#inputAmount");
const inputDescEL=document.querySelector("#inputDesc");
const element=document.querySelector("#btnAddExpense");
const headingEl=document.querySelector("#headingTotal");
const expenseTable=document.querySelector("#expenseTable");

let totalExpense=0;
headingEl.textContent=totalExpense;
const expenseItem={};
const allExpenses=[];
function addExpenseToTotal(){  
  const textAmount=inputElement.value;  
  const expense=parseInt(textAmount);
  const textDesc=inputDescEL.value;    
  totalExpense=totalExpense+expense;

  totalText=`Total: ${totalExpense}`
  headingEl.textContent=totalText;


  currentExpense={desc:textDesc,amount:expense};    
  allExpenses.push(currentExpense);
  
  const allExpenseHTML=allExpenses.map(currentExpense => {
    return `<div>${currentExpense.amount} :: ${currentExpense.desc}</div>`;
  }); 

  const joinedAllExpenseHTML=allExpenseHTML.join("");

  expenseTable.innerHTML=joinedAllExpenseHTML;

}


element.addEventListener("click",addExpenseToTotal,false); 


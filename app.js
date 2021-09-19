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

  someText=`Total: ${totalExpense}`
  headingEl.textContent=someText;

  currentExpense={desc:textDesc,amount:expense};    
  allExpenses.push(currentExpense);  
  // console.clear();
  // console.table(allExpenses)

  const data1=allExpenses[0];
  const data2=allExpenses[1];
  data1Text=`${data1.amount} :: ${data1.desc}`;
  data2Text=`${data2.amount} :: ${data2.desc}`;

  const tableText=`
    <div>${data1Text}</div>
    <div>${data2Text}</div>
  `

  expenseTable.innerHTML=tableText;

}


element.addEventListener("click",addExpenseToTotal,false); 


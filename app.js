const inputElement = document.querySelector("#inputAmount");
const inputDescEL = document.querySelector("#inputDesc");
const element = document.querySelector("#btnAddExpense");
const headingEl = document.querySelector("#headingTotal");
const expenseTable = document.querySelector("#expenseTable");

let totalExpense = 0;
headingEl.textContent = totalExpense;

const allExpenses = [];

function addExpenseToTotal() {
  const expenseItem = {};

  const textAmount = inputElement.value;
  const expense = parseInt(textAmount,10);

  const textDesc = inputDescEL.value;

  if (textDesc !== "" && !isNaN(expense) && expense > 0) {
    totalExpense += expense;
    total();

    expenseItem.amount = expense;
    expenseItem.desc = textDesc;
    expenseItem.date = new Date();

    allExpenses.push(expenseItem);
    renderList(allExpenses);

    //after inserting the values must be cleared in input boxes for next input
    inputElement.value = "";
    inputDescEL.value = "";
  }
}

function total(){
  headingEl.textContent=totalExpense;
}

function renderList(array) {
  // const allExpenseHTML=allExpenses.map(expense => {
  //   listItem(expense.desc,expense.amount,expense.date);
  // });
  const allExpenseHTML = array.map(expense => 
    listItem(expense)
  );
  //since the above is returning something from function,
  //we remove {} and make it as lambda function and
  //expenseItem object consists of amount,desc,date, we just pass whole expenseItem object

  const joinedAllExpenseHTML = allExpenseHTML.join('');
  expenseTable.innerHTML = joinedAllExpenseHTML;  
  //.join('') is used to remove comma (,) at endings of table contents  
}

// *** must use {} for multiple parameters ***
function listItem({
  desc,
  amount,
  date
}) {
  return `
          <li class="list-group-item d-flex justify-content-between">
            <div class="d-flex flex-column">
              ${desc}
              <small class="text-muted">${formattedDate(date)}</small>
            </div>
            <div>
              <span class="px-5">
                ${amount}
              </span>
              <button 
                type="button" 
                class="btn btn-outline-danger btn-sm" 
                  onclick="deleteItem(${date.valueOf()},${amount})"
                >
                <i class="fas fa-trash-alt"></i>
              </button> 
            </div>
          </li>
          `;
}

function formattedDate(date) {
  var now = date;
  var format = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  reqDate = now.toLocaleDateString('en-US', format);
  return reqDate;
}
  
function deleteItem(dateValue,amount){  
  // const newArr = [];
  // for (let i = 0; i < allExpenses.length; i++) {
  //   if(allExpenses[i].date.valueOf() !== dateValue){
  //     newArr.push(allExpenses[i]);      
  //   }      
  // }  

  // const newArr=allExpenses.filter(expense => {
  //   if(expense.date.valueOf() !== dateValue){
  //     return expense;
  //   }
  // });

  const newArr = allExpenses.filter(
    expense => expense.date.valueOf()!==dateValue
  );
  renderList(newArr);
  totalExpense -= amount;
  total();
}


allExpenses.forEach(item => {
  if(item.moment.valueOf()===dateValue){
      let pos = allExpenses.indexOf(item);
      allExpenses.splice(pos,1);
      totalExpense-=item.amount;
  }
});



element.addEventListener("click", addExpenseToTotal, false);
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    addExpenseToTotal();
  }
});
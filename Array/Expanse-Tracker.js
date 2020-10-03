account = {
    name: 'PeiWai Lee',
    expenses: [],
    income: [],
    addExpense: function (subject,amount){
        this.expenses.push(
            {desc:subject,
             value: amount}
             )
    },

    addIncome: function(subject, amount){
        this.income.push(
            {
                desc: subject,
                value: amount
            }
        )
    },
    getAccountSummary: function(){
        let totalExpense = 0
        this.expenses.forEach(function(expense) {
            totalExpense = totalExpense + expense.value
        } )
        let totalIncome = 0
        this.income.forEach(function(single){
            totalIncome = totalIncome + single.value            
        })
        let balance = totalIncome - totalExpense
        return `${account.name} has a balance of $${balance}. With total income $${totalIncome}, total expenses $${totalExpense}`
    }
}

account.addExpense('Rent',950);
account.addExpense('Coffee',2);
account.addIncome('Job',1000)
console.log(account.getAccountSummary())
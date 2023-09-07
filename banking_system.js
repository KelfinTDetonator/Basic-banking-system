class BankAccount{
    constructor(saldo){
        this.saldo = +saldo;
    }
    deposit(amount){
        setTimeout(()=>{
            return this.saldo += amount;
        }, 1000);
    }

    withdraw(amount){
        setTimeout(()=>{
            return this.saldo -= amount;
        }, 1000);
    }
}

const kelfin = new BankAccount(0);
kelfin.deposit(50000);
kelfin.withdraw(30000)
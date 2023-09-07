class BankAccount{
    constructor(saldo){
        this.saldo = saldo
    }
    deposit(amount){
        this.saldo += amount;
    }

    withdraw(amount){
        this.saldo -= amount;
    }
}
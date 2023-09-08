class BankAccount{
    constructor(pin){
        this.saldo = 100000;
        this.pin = this.#encrypt(pin);
    }
    #encrypt(pin){
        return `encrypted-pin-of${pin}`;
    }

    #decrypt(){
        return this.pin.split(`encrypted-pin-of`)[1];
    }

    authenticate(pin){
        this.#decrypt() === pin;
    }

    deposit(amount){
        setTimeout(()=>{
            console.log("Processing request..")
            this.saldo += amount;
        }, 500);
        setTimeout(()=>{ console.log(`Dana sebesar ${amount} telah berhasil dideposit!`) }, 4000)
        return this.saldo;
    }

    withdraw(amount){
        setTimeout(()=>{
            this.saldo -= amount; return "1";
        }, 300);
        return " ";
    }
}

const kelfin = new BankAccount(0);
kelfin.deposit(50000)

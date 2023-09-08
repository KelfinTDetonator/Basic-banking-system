import Display from "./screenClass.js";

class BankAccount{
    constructor(pin){
        this.saldo = 500000;
        this.pin = this.#encrypt(pin);
        this.screen = new Display(this.saldo);
    }
    #encrypt(pin){
        return `encrypted-pin-of${pin}`;
    }

    #decrypt(){
        return this.pin.split(`encrypted-pin-of`)[1];
    }

    authenticate(pin){
        if(this.#decrypt() === pin) { 
            console.log("Berhasil masuk!");
            return true;
            }
    }

    #timeProcess(){
        let time = Math.floor(1+Math.random()*2);
        
        return time * 1000;
    }

    deposit(amount){
        setTimeout(()=>{
            console.log("Memproses permintaan..")
            this.saldo += amount;
        }, 500);
        setTimeout(()=>{ console.log(`Dana sebesar ${amount} telah berhasil dideposit!`) }, this.#timeProcess())
        return this.saldo;
    }

    withdraw(amount){
        setTimeout(()=>{
            console.log("Memproses permintaan..")
            this.saldo -= amount; 
        }, 500);
        setTimeout(()=>{ console.log(`Dana sebesar ${amount} telah berhasil ditarik!`) }, this.#timeProcess())
        return this.saldo;
    }
}

const kelfin = new BankAccount("112666");
kelfin.authenticate("112666");

kelfin.withdraw(100000);



class Screen{
    constructor(prop){
        this.prop = prop.toString();
    }

    displayAmountMessage(){
        let digit = this.prop.length
        if(digit === 7)
        console.log(`Saldo anda adalah Rp.${this.prop.split("", 4).join("")}.000`); 
         else if(digit === 6){
            console.log(`Saldo anda adalah Rp.${this.prop.split("", 3).join("")}.000`); 
        } else if(digit === 5){
            console.log(`Saldo anda adalah Rp.${this.prop.split("", 2).join("")}.000`);
        }
        
        //split string index ke-3 
    }
}

class BankAccount{
    constructor(pin){
        this.saldo = 1500000;
        this.pin = this.#encrypt(pin);
        this.screen = new Screen(this.saldo);
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
kelfin.screen.displayAmountMessage();

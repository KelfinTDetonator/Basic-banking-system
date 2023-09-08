export default class Display{
    constructor(prop){
        this.prop = prop.toString();
    }

    

    displayAmountMessage(){
        let digit = this.prop.length
        if(digit === 7)
        console.log(`Saldo anda adalah Rp.${this.prop.split("", 4).join("")}.000`); 
         else if(digit === 6){
            //split string index ke-3 
            console.log(`Saldo anda adalah Rp.${this.prop.split("", 3).join("")}.000`); 
        } else if(digit === 5){
            console.log(`Saldo anda adalah Rp.${this.prop.split("", 2).join("")}.000`);
        }
        
        
    }
}


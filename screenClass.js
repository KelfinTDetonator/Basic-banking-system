import { kelfin } from "./banking_system.js";

export default class Display{
    constructor(prop){
        this.prop = prop.toString();
    }

    tampilLayar(){
        let quit = true;
        do{
            let pilih = 
            +prompt(
               `Masukkan pilihan dibawah ini:
                [1]: Deposit
                [2]: Withdraw
                [3]: Cek saldo
                [4]: Keluar
                `, "");
            
            switch (pilih) {
                case 1:{ 
                    let input = +prompt("Masukkan nominal saldo", ""); 
                    (kelfin.deposit(input))(); break;
                }
                case 2:{ 
                    let input = +prompt("Masukkan nominal saldo", ""); 
                    (kelfin.withdraw(input))(); break; 
                }   
                case 3:{ this.displayAmountMessage(); break; }
                case 4:{ 
                    quit = confirm("Apakah anda yakin ingin keluar menu?"); 
                    break;
                }
                default: "Kode salah"
                    break;
            }
        } while(quit !== false)
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


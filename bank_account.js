let saldo = 20000;
const saldoMin = 20000;

function tambahSaldo(){
    const tambah = +prompt("Masukkan saldo yang ingin Anda setor (Min. Rp.50.000): ", "");
    const minStor = 50000;
    if (tambah === minStor){
        return saldo += tambah;
    } else if (tambah < minStor){
        alert("Masukkan saldo minimal Rp. 50.000")
        return;
    }
}

function isSaldoMencukupi(et){
    if(et >= saldoMin) return true;
    return false;
}

function kurangiSaldo(){
    const kurangi = +prompt("Masukkan jumlah saldo yang ingin di-transfer (Min. Rp.10.000): ", "");
    const minTf = 10000;
    const estimated = saldo - kurangi;
    if(kurangi >= minTf){
        if(isSaldoMencukupi(estimated)){
            return saldo -= kurangi;
        } 
        else {
            alert("Saldo anda tidak cukup untuk melakukan transaksi");
            return;
        }
    } 
    else if(kurangi < minTf){
        alert("Saldo minimal yang di-transfer adalah Rp.10.000");
        return;
    }
}

function tampilSaldo(){ alert(`Saldo kamu sekarang adalah ${saldo}`); }

tambahSaldo();
kurangiSaldo();
tampilSaldo();








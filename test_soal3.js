/*data pribadi : 

Nama : Rifky Maulana
Alamat Email: rifkymaulanaindonesia@gmail.com
Waktu Mulai : 16.00 Senin, 11 Juli 2022
Waktu Selesai : 13.00 WIB Selasa, 12 Juli 2022*/

/*3. buatlah program looping untuk menampilkan output di bawah 

   output 1:  

    *
    **
    ***
    ****
    *****
    ******

    output 2: 

            *
           **
          ***
         ****
        ******/



         
function setitiga(number){
    let pola = "";
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
        pola += "*";
      }
      pola += "\n";
    }
    console.log(pola);
}

function segitigaTerbalik(number) {
    let pola = "";
    for (let i = 1; i <= number; i++) {
        for (let j = number-1; j >= i; j--) {
            pola += " ";
        }
        for(let k = 1; k <= i; k++){
            pola += "*";
        }
        pola += "\n";
    }
    console.log(pola);
}

setitiga(6);
segitigaTerbalik(5);

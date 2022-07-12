/* data pribadi : 

Nama : Rifky Maulana
Alamat Email: rifkymaulanaindonesia@gmail.com
Waktu Mulai : 16.00 Senin, 11 Juli 2022
Waktu Selesai : 13.00 WIB Selasa, 12 Juli 2022*/

/* 
1. Kami mempunyai data dataay dengan data : 
    
    var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
    var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
    var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

    - buatlah sebuah program untuk menampilkan banyak angka yang keluar
    output yang di inginkan : total data paling banyak keluar adalah #angka dengan jumlah #10

    - contoh:
        var data = [2, 2, 2, 2, 4, 2, 1]
        output : total data paling banyak keluar adalah 2 dengan jumlah 5 */

var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];

// function cariDataTerbanyakPadaArray() berfungsi untuk mencari data terbanyak di dalam dataay dengan parameter array.
function cariDataTerbanyakPadaArray(data){
    let x = 1;
    let y = 0;
    let dataTerbanyak;
        
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[i] == data[j]) {
                y++;
                if (y > x) {
                    x = y;
                    dataTerbanyak = data[i];
                }
            }
        }
        y = 0;
    }
    console.log("total data paling banyak keluar adalah", dataTerbanyak, "dengan jumlah", data.filter((nilai) => (nilai === dataTerbanyak)).length);;
}

cariDataTerbanyakPadaArray(data1);
cariDataTerbanyakPadaArray(data2);
cariDataTerbanyakPadaArray(data3);
/*data pribadi : 

Nama : Rifky Maulana
Alamat Email: rifkymaulanaindonesia@gmail.com
Waktu Mulai : 16.00 Senin, 11 Juli 2022
Waktu Selesai : 13.00 WIB Selasa, 12 Juli 2022*/

/*2. Kami mempunyai masalah pada validasi huruf dan angka, perusahaan kami membutuhkan validasi untuk pengecekan apakah inputan ini sesuai dengan keinginan kami

    var input1 = "hallo jesika24 selamat datang!"
    var input2 = "hallo anggun selamat datang!"
    var input3 = "hallo ** selamat datang!"
    var input4 = "hallo Mariage889120! selamat datang!"

    validasi yang di inginkan: 

    - Jika inputan mengandung angka maka harus mengeluarkan output : Sistem kami menolak untuk inputan berisi angka 167283
    - Jika inputan tidak mengandung angka maka harus mengeluarkan output : Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!

    contoh : 

    var input1 = "hallo mina23 selamat datang!"
    expektasi output : Sistem kami menolak untuk inputan berisi angka 23

    var input2 = "hallo amir selamat datang!"
    expektasi output: Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo amir selamat datang! */

var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

function validasiAngkaDalamString(string) {
    //
    console.log(/\d/.test(string)? "Sistem kami menolak untuk inputan berisi angka " + string.match(/\d/g).join(""):"Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + string);
}

validasiAngkaDalamString(input1);
validasiAngkaDalamString(input2);
validasiAngkaDalamString(input3);
validasiAngkaDalamString(input4);
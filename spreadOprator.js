const favorit = ["Seafood", "Salad", "Nugget", "Soup",10];
const other = ["apel", "manggo", "orange", "tomat",10];
const allfavorita = [favorit, other]
const allfavorit = [...favorit,...other]//menggabunfkan 2 buah array
console.log("makanan Favorit : ",...favorit) //menggabungkan seluruh nya
console.log("semua nya adalah favit ku ; ",allfavorit) 

console.log("==== meggunakan spread array ===") 
console.log(allfavorit) //memanggil ke2 buah array 

console.log("==== atau bisa menggunakan object literals ===")
const object1 = {firsnamenya : 'SABARDI', Lastnamenya : 'dii', umurnya : 18}
const object2 = {nama : 'ilham', namapanjang : 'udim', umur : 18}
const callobject = {...object1, ...object2};

console.log("menggabungan ke 2 objek nya : ",callobject)
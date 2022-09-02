/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir

//Test :

const array = ["Patika", "219", "Akbank", "React", "Bootcamp"]
Array.prototype.includesCi = function (search) {
    if (this.find((element) => element.toLowerCase() === search.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
};
console.log(array.includesCi("patika") === true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array.includesCi("219") === false ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array.includesCi("kırmızı") === false ? "Beklendiği gibi" : "Beklendiği gibi değil")

// includes(), bir dizinin girdileri arasında belirli bir değer içerip içermediğini, dönen true veya false ile uygun şekilde belirler.
// toLowerCase ile aranan ve bulunan elementleri küçük harflere çevirdik. (Case sensitivity) 
// Böylelikle harfin küçüklüğüne ve büyüklüğüne bakmadan aranan element varsa doğru yoksa yanlış olarak döndürdük. 
// Kaynak : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
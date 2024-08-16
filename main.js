let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org/articls.php?id=100&cat=topics";
let url6 = "https://www.elzero.net/articls.php?id=100&cat=topics";

let regurl = /((http|https):\/\/)?(www.)?\w+.(org|net|com)(\/\S+)?/ig;
console.log(url1.match(regurl));
console.log(url2.match(regurl));
console.log(url3.match(regurl));
console.log(url4.match(regurl));
console.log(url5.match(regurl));
console.log(url6.match(regurl));
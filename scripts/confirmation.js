// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const nameString = localStorage.getItem('name');
let namee = JSON.parse(nameString).name;
console.log(namee);
document.getElementById('nameSpan').innerHTML = namee;


const confir_id_string = localStorage.getItem('confimation_id');
let id = JSON.parse(confir_id_string);
document.getElementById('idSpan').innerHTML = id;

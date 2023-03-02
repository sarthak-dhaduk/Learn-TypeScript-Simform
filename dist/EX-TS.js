"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var students = {
    name: "a",
    age: 20,
    phone: 7687896567
};
var studentList = [
    { name: "Prashant", age: 20, phone: 2131231 },
    { name: "Shree", age: 27, phone: 274235 }
];
studentList.push(students);
// for (var index = 0; index < studentList.length; index++){
//     var element = studentList[index];
//     console.log("name:" + element.name + "age:" + element.age + "phone:" +  element.phone)
// }
function GetstudentData(students) {
    students.forEach(function (element) {
        console.log("name:" + element.name + "age:" + element.age + "phone:" + element.phone);
    });
}
GetstudentData(studentList);
// rest prm 
function GetDataByRest() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log(element);
    });
}
GetDataByRest(1, 2, 3, 4, 5, 6);
//Default parameters
function DefaultPrm(info) {
    if (info === void 0) { info = "Hello..."; }
    console.log(info);
}
DefaultPrm("Hello Sarthak...");
//Anonymous Function
var Data = function (Lname, Fname) {
    return Fname + "..." + Lname;
};
console.log(Data("Dhaduk", "Sarthak"));
//Lambda Function
var Data2 = function (Lname, Fname) { return Lname + "..." + Fname; };
console.log(Data2("Dhaduk", "Sarthak"));
//interface
// interface Itf1  {
//     name:string,
//     age:number,
//     phone:number,
//     tx:string,
// }
var student = {
    name: "a",
    age: 20,
    phone: 7687896567,
    tx: "interface1"
};
var studentLists = [
    { name: "Prashant", age: 20, phone: 2131231, tx: "interface1" },
    { name: "Shree", age: 27, phone: 274235, tx: "interface1" }
];
//Generics ----
var studentListsG = [
    { name: "Prashant", age: 20, phone: 2131231, tx: "interface1" },
    { name: "Shree", age: 27, phone: 274235, tx: "interface1" }
];
//---/
studentLists.push(student);
function GetstudentDataItf(students) {
    students.forEach(function (element) {
        console.log("name:" + element.name + "age:" + element.age + "phone:" + element.phone + "interface:" + element.tx);
    });
}
GetstudentDataItf(studentLists);
//class
// class stInfo {
//     protected _fname:string;
//     protected _lname:string;
//     constructor(_fname:string,_lname:string) {
//         this._fname = _fname
//         this._lname = _lname
//     }
//     classData():string {
//         return this._fname + " " + this._lname;   
//     }
// }
var obC1 = new classes_1["default"]("Sarthak", "D.");
console.log(obC1.classData());
//Print Data of Generics Array
function GetstudentDataItfG(students) {
    students.forEach(function (element) {
        console.log("name:" + element.name + "age:" + element.age + "phone:" + element.phone + "interface:" + element.tx);
    });
}
GetstudentDataItfG(studentListsG);

import stInfo from "./classes";
import Itf1 from "./Interface";

let students:any = {
    name:"a",
    age:20,
    phone:7687896567,
}

let studentList:any = [
    {name: "Prashant", age:20, phone:2131231},
    {name: "Shree", age:27, phone:274235}
]

studentList.push(students);

// for (var index = 0; index < studentList.length; index++){
//     var element = studentList[index];
//     console.log("name:" + element.name + "age:" + element.age + "phone:" +  element.phone)
// }


function GetstudentData(students:any[]) {
    students.forEach(element => {
        console.log("name:" + element.name + "age:" + element.age + "phone:" +  element.phone)
    });
}

GetstudentData(studentList);

// rest prm 

function GetDataByRest(...nums: Number[]){
    nums.forEach(element => {
        console.log(element)    
    });
}

GetDataByRest(1,2,3,4,5,6);

//Default parameters

function DefaultPrm(info:string = "Hello...") {
    console.log(info);    
}

DefaultPrm("Hello Sarthak...")

//Anonymous Function

let Data = function(Lname:string,Fname:string){
    return Fname + "..." + Lname;
}

console.log(Data("Dhaduk","Sarthak"));

//Lambda Function

let Data2 = (Lname:string,Fname:string) => {return Lname + "..." + Fname;}

console.log(Data2("Dhaduk","Sarthak"));

//interface

// interface Itf1  {
//     name:string,
//     age:number,
//     phone:number,
//     tx:string,
// }

let student:Itf1 = {
    name:"a",
    age:20,
    phone:7687896567,
    tx:"interface1"
}

let studentLists:Itf1[] = [
    {name: "Prashant", age:20, phone:2131231,tx:"interface1"},
    {name: "Shree", age:27, phone:274235,tx:"interface1"}
]
//Generics ----
let studentListsG:Array<Itf1> = [
    {name: "Prashant", age:20, phone:2131231,tx:"interface1"},
    {name: "Shree", age:27, phone:274235,tx:"interface1"}
]
//---/
studentLists.push(student);


function GetstudentDataItf(students:Itf1[]) {
    students.forEach(element => {
        console.log("name:" + element.name + "age:" + element.age + "phone:" +  element.phone + "interface:" + element.tx)
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

const obC1 = new stInfo("Sarthak","D.");

console.log(obC1.classData());

//Print Data of Generics Array
function GetstudentDataItfG(students:Array<Itf1>) {
    students.forEach(element => {
        console.log("name:" + element.name + "age:" + element.age + "phone:" +  element.phone + "interface:" + element.tx)
    });
}

GetstudentDataItfG(studentListsG);

"use strict";

class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName
        this.lastName = lastName
        
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getIntro() {
        return "My name is " + this.getFullName() + "!";
    }

}


let sallie = new Person("Sallie", "Sheppard");
console.log(sallie.getFullName());

console.log("---------------------exerc2-------------------")

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);

        this.employeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getIntro() {
        return "My name is " + this.getFullName() +
            " and I am a " + this.jobTitle +
            " My pay rate is " + this.payRate + "!";
    }
    getGrossPay(hoursWorked){
       return hoursWorked * this.payRate
    }

}

let tim = new Employee(
    "Tim", "Kellogg", 1 , "Engineer", 45.90);
console.log(tim.getIntro());

let Kim = new Employee(
    "Kim", "Lopez", 2 , "Software developer", 55.90);
console.log(Kim.getIntro());

sallie = new Person("Sallie", "Sheppard");
console.log(sallie.getIntro())

console.log("---------------------exerc3-------------")

Kim = new Employee(
    "Kim", "Lopez", 2 , "Software developer", 55.90);
    console.log(Kim.getIntro());
console.log("my grossPay this week is $" + Kim.getGrossPay(30));

let Anna = new Employee(
    "Anna", "smith", 3, "web designer" , 34.16);
    console.log(Anna.getFullName());
    console.log("my grossPay this week is $" + Anna.getGrossPay(10));

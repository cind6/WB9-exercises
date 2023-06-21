"use strict";

class Employee {
 constructor(id, firstName, lastName, jobTitle, payRate) {
 this.employeeId = id;
 this.firstName = firstName;
 this.lastName = lastName;
 this.jobTitle = jobTitle;
 this.payRate = payRate;
 }
 getFullName() {
    return this.firstName + " " + this.lastName;
    }
    promote(newJobTitle, newPayRate){
     this.jobTitle = newJobTitle;
     this.payRate = newPayRate;

    }
    getIntro() {
      let intro =
      "Hi! I'm " + this.firstName + " " + this.lastName +
      " and I am a " + this.jobTitle;
      return intro;
      }
}


   let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);

    let employee2 = new Employee(
      2, "Brian", "Williams", "Graphic Artist", 43.50);
    

   console.log(`Employee ${employee1.firstName} created`);
   console.log(`Employee ${employee1.getFullName()} created`);
   console.log(`Job title is ${employee1.jobTitle}`);
   console.log(`Pay rate is $${employee1.payRate}`);

   console.log(`Employee ${employee2.firstName} created`);
   console.log(`Employee ${employee2.getFullName()} created`);
   console.log(`Job title is ${employee2.jobTitle}`);
   console.log(`Pay rate is $${employee2.payRate}`);
   
   
   console.log("------------------Exerc2--------------------------------")
  
  
     console.log(`Employee ${employee1.getFullName()}  is promoted`);
     employee1.promote("Sr. Graphic Artist", 46.75);
     console.log(`Job title is ${employee1.jobTitle}`);
      console.log(`Pay rate is $${employee1.payRate}`);

      console.log("----employee2-------------")
      console.log(`Employee ${employee2.getFullName()} is promoted`);
      employee2.promote("Sr. Graphic Artist", 47.75);
      console.log(`Job title is ${employee2.jobTitle}`);
       console.log(`Pay rate is $${employee2.payRate}`);
 

   
console.log("-----------------------Exerc3--------------------------------")
  let intro = employee1.getIntro();
console.log(intro);
   

 
   intro = employee2.getIntro();
  console.log(intro);
  

           
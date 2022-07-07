class EmployeePayrollData 
{
    //property
    id;
    salary;
    gender;
    startDate; 

    /// ========constructor====///
    // constructor(id, name, salary) {
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    // getter & setter method
    get name()    
    { 
        return this._name; 
    }
    set name(name) 
    { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');   //......UC13-regex
        if (nameRegex.test(name))                        //...... UC13
        //console.log("Setting: "+ name);                //.....used in uc12
        this._name = name;
        else throw 'Name is Incorrect!';
    }

    //method
    toString() 
    {
        return "id=" + this.id +", name= " + this.name + ",salary= " + this.salary + ", " + "gender = "+ this.gender + ", startDate=" + this.startDate ;
    }

  
}
    
//UC-1                                                                                                
let employeePayrollData =new EmployeePayrollData(1, "Mark", 30000);
console.log("UC-1:"+ employeePayrollData.toString());

//UC-2 Extend empPayroll data Add gender & StartDate
let newEmployeePayrollData =new EmployeePayrollData(1, "Amit", 40000, "M", new Date());
console.log("UC-2:"+ newEmployeePayrollData.toString());

//UC-13-REgex Pattern & Try-Catch Error

 employeePayrollData.name = "Mark";                                           //....Regex Pattern Matching 
 console.log("Uc-3: Pattern Matching:"+ employeePayrollData.toString());

try {
    employeePayrollData.name = "mark";
    console.log("Uc-3: TryCatch Error :"+ employeePayrollData.toString());     //...with try-catch will get else part 'Name Is Incorrect' instead of error
}
catch (e){
    console.error(e);
}
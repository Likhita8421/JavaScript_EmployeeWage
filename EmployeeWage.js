
//UC-1 If-Else Condition

{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if  (empCheck ==  IS_ABSENT) 
    {
        console.log("UC-1  Employee is Absent.");
    }
    else
    {
        console.log("UC-1  Employee is Present");
    }

}


//UC-2 Switch Case

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
{
    let emp_Hrs = 0;
    let empCheck =Math.floor(Math.random() * 10) % 3;
    switch (empCheck)
    {
        case IS_PART_TIME:
            emp_Hrs = IS_PART_TIME;
            break;
        case IS_FULL_TIME:
            emp_Hrs = IS_FULL_TIME;
            break
        default:
            emp_Hrs = 0;        
    }

    let empWage = emp_Hrs * WAGE_PER_HOUR;
    console.log("UC-2  EmpWage: " + empWage);
}



//UC-3 Functions
const PART_TIME = 1;
const FULL_TIME = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

    function getWorkingHours(empCheck)
    {
        switch (empCheck)
    {
        case PART_TIME:
            return PART_TIME;
        case FULL_TIME:
            return FULL_TIME;
        default:
            return 0;        
    }
    }
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let emp_Hrs = getWorkingHours(empCheck);
    let empWage = emp_Hrs * Wage_Per_Hour;
    console.log("UC-3  EmpWage: " + empWage + " Hours: "+ emp_Hrs);
    
    
   //UC-4 For Loop

{
    const NUM_WORKING_DAYS = 20;
let totalEmpHrs = 0;
for (let day = 0; day < NUM_WORKING_DAYS; day++);
{
    let empCheck = Math.floor(Math.random() * 10) %3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * Wage_Per_Hour;
console.log("UC-4 : Total Hours: " + totalEmpHrs + " EmpWage: "+ empWage);
} 



//UC-5 While Loop
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKIGN_DAYS =20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKIGN_DAYS)
        {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getWorkingHours(empCheck);
        }
    let empWage = totalEmpHrs * Wage_Per_Hour;
    console.log("UC-5 : Total Days: " + totalWorkingDays + " Total hrs: "+ totalEmpHrs+ " EmpWage: "+ empWage);
}


//UC-6 Arrays and 7 Maps
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKIGN_DAYS =20; 
let totalEmpHrs =0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function calcDailyWage(empHrs)
{
    return emp_Hrs* WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKIGN_DAYS)
    {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let emp_Hrs = getWorkingHours(empCheck);
    totalEmpHrs += emp_Hrs;
    empDailyWageArr.push(calcDailyWage(emp_Hrs));
    empDailyHrsMap.set(totalWorkingDays, emp_Hrs);
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(emp_Hrs));
    }

let EmpWage = calcDailyWage(totalEmpHrs);
console.log("UC-6 : Total Days: " + totalWorkingDays + " Total Hrs: "+ totalEmpHrs + " Emp Wage " + EmpWage );

    
//Using Array Helper Functions
//UC 7A- CALC Total Wage Using Array "forEach method or reduce method"

let totEmpWage = 0;
function sum(dailyWage) 
{
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + " Total Hrs "+  totalEmpHrs + " Emp Wage " + EmpWage );

//-----reduce method
function totalWages(totalWage, dailyWage) 
{
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage With Reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B- Show the Day Along with Daily Wage using Array "Map Helper function"
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B : Daily Wage Map");
console.log(mapDayWithWageArr);


//UC 7C-  Show Days when full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Earned ")
console.log(fullDayWageArr);

//UC 7D- Find the first occurence when Full time Wage was earned using find function
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D : First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFullTimeWage));






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


//UC 7E - Check if Every Element Of Full Time Wage is truely holding Full time Wage 
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E : Check All Elements have Full Time Wage:" + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - Check if there is any part time wage 
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC 7F : Check if any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employe Worked
function totalDaysWorked(numofDays, dailyWage)
{
    if (dailyWage > 0) return numofDays+1;
    return numofDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));


//UC-8 Map Functions

console.log("UC-8A - Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0 ));



//UC-9 

const findTotal = (totalVal, dailyVal) => 
{
    return totalVal + dailyVal;
}
let totalHrs = Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours > 0)
                                                  .reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                                 .reduce(findTotal);
console.log("UC-9 - Emp Wage with Arrow: " + " Total Hours: " + totalHrs + " Total Wage: " + totalSalary);


let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => 
{
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);

























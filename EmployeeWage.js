
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
    
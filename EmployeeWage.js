
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

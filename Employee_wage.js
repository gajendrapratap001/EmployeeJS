const EMP_RATE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HOURS = 80;

let empDailyWageArr = [];
let empDailyWageMap = new Map();
let totalEmpHours = 0;
let totalWorkingDays = 0;

const getWorkHours = (empCheck) =>
    empCheck === 1 ? FULL_DAY_HOURS : empCheck === 2 ? PART_TIME_HOURS : 0;

while (totalEmpHours <= MAX_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkHours(empCheck);
    totalEmpHours += empHours;
    let dailyWage = empHours * EMP_RATE_PER_HOUR;
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

const calcTotalWage = (total, daily) => total + daily;
console.log("Total Wage: ", empDailyWageArr.reduce(calcTotalWage, 0));

console.log("Day-wise Daily Wage:", Array.from(empDailyWageMap.entries()));

console.log("Days with Full Time Wage:", Array.from(empDailyWageMap.keys()).filter(day => empDailyWageMap.get(day) === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));

console.log("First Occurrence of Full Time Wage:", Array.from(empDailyWageMap.values()).find(wage => wage === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));

console.log("All elements Full Time Wage:", Array.from(empDailyWageMap.values()).every(wage => wage === FULL_DAY_HOURS * EMP_RATE_PER_HOUR));

console.log("Any Part Time Wage:", Array.from(empDailyWageMap.values()).some(wage => wage === PART_TIME_HOURS * EMP_RATE_PER_HOUR));

console.log("Number of Days Employee Worked:", Array.from(empDailyWageMap.values()).filter(wage => wage > 0).length);

const validateEmployee = (id, salary, gender, date) => {
    try {
        if (!/^\d+$/.test(id) || id <= 0) throw new Error("Invalid Employee ID");
        if (!/^\d+(\.\d+)?$/.test(salary) || salary <= 0) throw new Error("Invalid Salary");
        if (!/^[MF]$/.test(gender)) throw new Error("Invalid Gender");
        if (new Date(date) > new Date()) throw new Error("Date cannot be in the future");
        console.log("Employee details are valid.");
    } catch (error) {
        console.log("Error:", error.message);
    }
};

validateEmployee("101", "5000", "M", "2025-03-20");

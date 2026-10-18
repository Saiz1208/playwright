import * as XLSX from 'xlsx';

const workbook = XLSX.readFile('C:\\Users\\SATHISH KUMAR S\\Pictures\\Practice Typescript\\tests\\Playwright\\Test Data\\Employee.xlsx');
const sheet = workbook.Sheets["Sheet1"];
//console.log(sheet);
//convert sheet to JSON
const data: any[] = XLSX.utils.sheet_to_json(sheet);
//console.log(Data);

let totalrows = data.length;
console.log("Total Rows : " + totalrows);
for (let rownumber = 0; rownumber < totalrows; rownumber++) {
    let empid = data[rownumber].EMPID;
    let empname = data[rownumber].EMPNAME;
    let empemail = data[rownumber].EMPMAIL;
    let empno = data[rownumber].EMPMOBILE;
    console.log(empid + " || " + empname + " || " + empemail + " || " + empno);
}
//Write data to cell 
XLSX.utils.sheet_add_aoa(sheet, [["Sathish"]], { origin: "F10" });
XLSX.writeFile(workbook, 'C:\\Users\\SATHISH KUMAR S\\Pictures\\Practice Typescript\\tests\\Playwright\\Test Data\\Employee.xlsx');
console.log("Data written to cell F10 successfully.");


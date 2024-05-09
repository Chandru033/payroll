document.addEventListener("DOMContentLoaded", function() {
    const newPayrollBtn = document.getElementById("NewPayroll");
  
    newPayrollBtn.addEventListener("click", () => {
        const payrollTable = document.getElementById("PayrollTable");
        payrollTable.style.display = "table";
        newPayrollBtn.style.display = "none";
    });
  
    const people = [
        {
            "id": "1",
            "firstName": "Chandru",
            "lastName": "J",
            "hw": 100.46
        },
        {
            "id": "2",
            "firstName": "Rahul",
            "lastName": "Sharma",
            "hw": 130.47
        },
        {
            "id": "3",
            "firstName": "Priya",
            "lastName": "Patel",
            "hw": 78.31
        },
        {
            "id": "4",
            "firstName": "Amit",
            "lastName": "Singh",
            "hw": 180.3
        },
        {
            "id": "5",
            "firstName": "Anjali",
            "lastName": "Anand",
            "hw": 300.25
        },
        {
            "id": "6",
            "firstName": "Megha",
            "lastName": "Akash",
            "hw": 280.31
        },
        {
            "id": "7",
            "firstName": "Sobhita",
            "lastName": "Dhulipala",
            "hw": 69.18
        },
        {
            "id": "8",
            "firstName": "Gowri",
            "lastName": "Krishnan",
            "hw": 82.32
        },
        {
            "id": "9",
            "firstName": "Samyuktha ",
            "lastName": "Hegde",
            "hw": 98.78
        },
        {
            "id": "10",
            "firstName": "Nivetha",
            "lastName": "Thomas",
            "hw": 88.2
        }
    ];
  
    displayEmployees(people);
  
    function displayEmployees(employees) {
        const employeesTable = employees.map((employee) => {
            return `
            <tr>
                <th scope="row">${employee.id}</th>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>&#8377;${employee.hw}</td>
                <td><input type="number" class="hours-worked" style="width:60px"  min="0"/> h</td>
                <td class='monthly-pay fw-bold'></td>
            </tr>
            `;
        }).join("");
  
        document.getElementById("Employees-table").innerHTML = employeesTable;
  
        monthlyPay();
  
        const getEmployeesHW = employees.map((employee) => employee.hw);
  
        let maxHW = calcMaxWage(getEmployeesHW);
        document.getElementById("Max-wage").innerText = "₹" + maxHW;
  
        let minHW = calcMinWage(getEmployeesHW);
        document.getElementById("Min-wage").innerText = "₹" + minHW;
  
        const getTotalHW = (total, hw) => total + hw;
        const getAvgHW = (arr) => arr.reduce(getTotalHW, 0) / arr.length;
  
        let avgHW = getAvgHW(getEmployeesHW).toFixed(2);
        document.getElementById("Avg-wage").innerText = "₹" + avgHW;
    }
  
    function monthlyPay() {
        const hoursWorked = document.querySelectorAll(".hours-worked");
  
        hoursWorked.forEach((workHour) => {
            workHour.addEventListener("keyup", (e) => {
                if (e.target.value === "" || e.target.value <= 0) {
                    return;
                } else {
                    if (e.key === "Enter") {
                        const hour = e.target.value;
                        const hourlyWage = Number(
                            e.target.parentElement.parentElement.children[3].innerText.substring(1)
                        );
                        let monthlyPay = e.target.parentElement.parentElement.children[5];
                        const calcMonthlyPay = (hour * hourlyWage).toFixed(2);
                        monthlyPay.innerText = "₹" + calcMonthlyPay;
                        saveData(hour);
                        getTotalPayouts();
                    }
                }
            });
        });
    }
  
    function calcMaxWage(arr) {
        return Math.max(...arr);
    }
  
    function calcMinWage(arr) {
        return Math.min(...arr);
    }
  
    function saveData(hour) {
        const hoursWorked = document.querySelectorAll(".hours-worked");
        let totalHours = 0;
    
        hoursWorked.forEach((workHour) => {
            const hourValue = parseFloat(workHour.value);
            if (!isNaN(hourValue) && hourValue > 0) {
                totalHours += hourValue;
            }
        });
    
        document.getElementById("Total-WH").innerText = totalHours.toFixed(2) + " h";

    
    }
  
    const calcTotal = (total, num) => {
        return total + num;
    };
  
    function getTotalPayouts() {
        const allMonthlyPays = document.querySelectorAll(".monthly-pay");
        let arrayOfPayouts = Array.from(allMonthlyPays);
        let newPayout = arrayOfPayouts.map((payout) =>
            parseFloat(payout.innerHTML.substring(1))
        );
        newPayout = newPayout.filter((payout) => payout);
        let calculateTotalPay = newPayout.reduce(calcTotal, 0);
        document.getElementById("Total-pay").innerText = "₹" + calculateTotalPay.toFixed(2);
    }
  });
  
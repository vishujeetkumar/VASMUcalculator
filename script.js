 document.getElementById("calculate").addEventListener("click", function () {
            const num1Str = document.getElementById("num1").value;
            const num2Str = document.getElementById("num2").value;
            const operator = document.getElementById("operator").value.trim();

            const num1 = parseFloat(num1Str);
            const num2 = parseFloat(num2Str);
            let calculateResult;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").value = "Please enter valid numbers";
                return;
            }

            switch (operator) {
                case "+":
                    calculateResult = num1 + num2;
                    break;
                case "-":
                    calculateResult = num1 - num2;
                    break;
                case "*":
                    calculateResult = num1 * num2;
                    break;
                case "/":
                    if (num2 !== 0) {
                        calculateResult = num1 / num2;
                    } else {
                        calculateResult = "Error (Div by 0)";
                    }
                    break;
                case "%":
                    calculateResult = num1 % num2;
                    break;
                case "**":
                    calculateResult = num1 ** num2;
                    break;
                case "Area":
                    calculateResult = num1 * num2;
                    break;
                case "Perimeter":
                    calculateResult = 2 * (num1 + num2);
                    break;
                default:
                    calculateResult = "Invalid operator";
            }

            document.getElementById("result").textContent = calculateResult;

            console.log("First Number : " + num1);
            console.log("Second Number : " + num2);
            console.log("Operator : " + operator);
            console.log("ANSWER : " + calculateResult);
        });

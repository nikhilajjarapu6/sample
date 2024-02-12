let displayValue = "";

function appendToDisplay(value) {
    displayValue = displayValue + value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
        // this method brief way
        const operators = displayValue.match(/[+\-*/]/g);
        const numbers=displayValue.split(/[+\-*/]/).map(Number)
        if(numbers.length==1){
            document.getElementById("display").value=numbers[0];
            return;
        }

        if(operators===null || numbers.length<2){
            document.getElementById("display").value="Error"
            return;
        }

        let result=numbers[0];
        for(let i=0;i<operators.length;i++){
            var operator=operators[i];
            var nextNumber=numbers[i+1]
            if(operator==='+'){
                result=result+nextNumber;  //numbers[i]+numbers[i+1]
            }
            else if(operator==='-'){
                result=result-nextNumber;
            }
            else if(operator==='*'){
                result=result*nextNumber;
            }
            else if(operator==='%'){
                result=(result/100)*nextNumber;
            }
            else if (operator === '%') {
                // Handle percentages in two different ways:
                if (nextNumber >= 0 && nextNumber <= 1) {
                    // If nextNumber is between 0 and 1, treat it as a percentage of the result.
                    result = result * nextNumber;
                } else {
                    // Otherwise, treat it as a percentage (e.g., 5% as 0.05).
                    result = result * (nextNumber / 100);
                }
            }
            
        }
        document.getElementById("display").value = result;
        displayValue = result.toString();

        //this is direct method to perform operations
    // try {
    //     const result = eval(displayValue);
    //     document.getElementById("display").value = result;
    //     displayValue = result.toString();
    // } catch (error) {
    //     document.getElementById("display").value = "Error";
    // }

}

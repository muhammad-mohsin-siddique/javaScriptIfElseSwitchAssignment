document.write("<hr/>");

/* Assignment 1: If-Else Statements

 Problem: 
 
 Write a program that takes an integer as input and prints whether it is an even or odd number.


 Instructions:

 1. Create a variable and assign an integer value to it.
 2. Use an if-else statement to check if the number is even or odd.
 3. Print the result.

*/

{
    let number = 10; // declare and initialize the variable 

    if (number % 2 == 0) {

        document.write("The number = ", number, " is EVEN <br />");
    }
    else {

        document.write("The number =", number, " is ODD ");
    }
}

document.write("<hr/>");

/* Assignment 2: If-Else Statements

 Problem: 
 
 Create a program that determines if a given temperature is above or below freezing (32°F).


 Instructions:

 1. Create a variable and assign a temperature value to it.
 2. Use an if-else statement to check if the temperature is above or below freezing.
 3. Print the result.

*/

{
    let temperature; // declare a temperature variable

    temperature = 35; // assigne the value 

    if (temperature > 32) {

        document.write("<br/>Temperature = ", temperature, " is above the Freezing (32<sup>o</sup> F)")
    }
    else if (temperature == 32) {

        document.write("<br/>Temperature = ", temperature, " is equal to the Freezing (32<sup>o</sup> F)")
    }
    else
        document.write("<br/>Temperature = ", temperature, " is below the Freezing (32<sup>o</sup> F)")
}


document.write("<hr/>");

/* Assignment 3: Switch Statement

 Problem: 
 
 Write a program that converts a numeric day of the week (1 for Sunday, 2 for Monday, ..., 7 for Saturday) into its corresponding name.


 Instructions:

 1. Create a variable and assign a day number to it.
 2. Use a switch statement to match the number with the corresponding day.
 3. Print the day of the week.

*/

{
    let day = 5; // day = 1 -> sunday 

    switch (day) {
        case 1:
            document.write("Day = ", day, " => ", "Sunday");
            break;
        case 2:
            document.write("Day = ", day, " => ", "Monday");
            break;
        case 3:
            document.write("Day = ", day, " => ", "Tuesday");
            break;
        case 4:
            document.write("Day = ", day, " => ", "Wednesday");
            break;
        case 5:
            document.write("Day = ", day, " => ", "Thursday");
            break;
        case 6:
            document.write("Day = ", day, " => ", "Friday");
            break;
        case 7:
            document.write("Day = ", day, " => ", "Saturday");
            break;
        default:
            document.write("\nInvalid Input try Again... ");


    }
}

document.write("<hr/>");

/* Assignment 4: If-Else Statements

 Problem: 
 
 Create a program that checks if a given number is positive, negative, or zero.


 Instructions:

 1. Create a variable and assign a number to it.
 2. Use if-else statements to check if the number is positive, negative, or zero.
 3. Print the result.
*/

{
    let number = 5;

    if (number > 0) {

        document.write("The Given Number = ", number, " is Positive Number");
    }
    else if (number < 0) {

        document.write("The Given Number = ", number, " is Negative Number");
    }
    else {

        document.write("The Given Number = ", number, " is Equal to Zero");
    }
}

document.write("<hr/>");

/* Assignment 5: If-Else Statements

 Problem: 
 
 Write a program that checks if a given year is a leap year.


 Instructions:

 1. Create a variable and assign a year value to it.
 2. Use if-else statements to check if the year is a leap year.
 3. Print the result.
*/

{
    let year = 1700;

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.write("The Year = ", year, " is a leap year");
            }
            else {
                document.write("The Year = ", year, " is not a leap year000");
            }
        }
        else {

            document.write("The Year = ", year, " is a leap year");
        }
    }
    else
        document.write("The Year = ", year, " is not a leap year");
}

document.write("<hr/>")
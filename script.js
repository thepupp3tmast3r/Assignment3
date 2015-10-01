// 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var favMovies = new Array("Scream", "Scream 2", "Scream 3", "Scream 4", "Juice");
//window.console.log(favMovies[1]);

// 2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//window.console.log(movies[0]);

// 3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//movies.splice(2, 0, "It");
//window.console.log(movies.length);

// 4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//
//delete movies[0];
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i]);
//}

// 5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//movies[5] = "It";
//movies[6] = "The Matrix";
//
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i]);
//}

// 6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//movies[5] = "It";
//movies[6] = "The Matrix";
//
//for (var index in movies) {
//    window.console.log(movies[index]);
//}


// 7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//var movies = [];
//
//movies[0] = "Scream";
//movies[1] = "Scream 2";
//movies[2] = "Scream 3";
//movies[3] = "Scream 4";
//movies[4] = "Juice";
//movies[5] = "It";
//movies[6] = "The Matrix";
//
//movies.sort();
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

// 8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

//var movies = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Juice"];
//var leastFavMovies = ["Gone With the Wind", "The Sound of Music", "Mean Girls"];
//
//
//window.console.log("Movies I loved!: \n\n");
//for (var index in movies) {
//    window.console.log(movies[index]);
//}
//
//window.console.log("\n\nMovies I hated!: \n\n");
//for (var index in leastFavMovies) {
//    window.console.log(leastFavMovies[index]);
//}

// 9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

//var movies = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Juice"];
//var leastFavMovies = ["Gone With the Wind", "The Sound Of Music", "Mean Girls"];
//
//movies = movies.concat(leastFavMovies);
//
//movies.reverse(movies.sort());
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

// 10.	Return just the last item in the array and display it within the console window.

//var movies = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Juice"];
//var leastFavMovies = ["Gone With the Wind", "The Sound Of Music", "Mean Girls"];
//
//movies = movies.concat(leastFavMovies);
//
//var leastMovies = movies.reverse(movies.sort());
//
//window.console.log(leastMovies.pop());

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.

//var movies = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Juice"];
//var leastFavMovies = ["Gone With the Wind", "The Sound Of Music", "Mean Girls"];
//
//movies = movies.concat(leastFavMovies);
//
//var lstMovies = movies.reverse(movies.sort());
//
//window.console.log(lstMovies.shift());

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var movies = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Juice"];
//var leastFavMovies = ["Gone With the Wind", "The Sound Of Music", "Mean Girls"];
//
//movies = movies.concat(leastFavMovies);
//
//movies.sort();
//
//movies.splice(2,2, "The Animatrix", "It");
//movies.splice(5,1, "Swordfish");
//
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

//var employee1 = [];
//employee1["id"] = 1111;
//employee1["name"] = "Lance Groh-Prout";
//employee1["title"] = "Network Engineer";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 2222;
//employee2["name"] = "Holly Berry";
//employee2["title"] = "Director";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//
//window.console.log(employees[1]["name"]);

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

//var employee1 = [];
//employee1["id"] = 1111;
//employee1["name"] = "Lance Groh-Prout";
//employee1["title"] = "Network Engineer";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 2222;
//employee2["name"] = "Holly Berry";
//employee2["title"] = "Director";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//var i;
//for (i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//};

//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

//var employee1 = [];
//employee1["id"] = 1111;
//employee1["name"] = "Lance Groh-Prout";
//employee1["title"] = "Network Engineer";
//employee1["department"] = "IT";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 2222;
//employee2["name"] = "Holly Berry";
//employee2["title"] = "Director";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//
//var employee3 = [];
//employee3["id"] = "3333";
//employee3["name"] = "Jasmine Tala";
//employee3["title"] = "Driver";
//employee3["department"] = "Transportation";
//employee3["isCurrent"] = false;
//
//var employees = [employee1, employee2, employee3];
//
//var i;
//for (i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] === true) {
//        window.console.log(employees[i]["name"]);
//    }
//    
//};

//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.



//var movies = [["Scream", 1], ["Scream 2", 2], ["Scream", 3], ["Scream 4", 4], ["Juice", 5]];
//
//movies = movies.reduce(function(a, b){
//     return a.concat(b);
//});
//
//var movieNames = movies.filter(function(item) { 
//    return typeof item == "string";
//});
//console.log(movieNames);




// Rock, Paper,Scissors Game 

//var comGuess;
//var yourGuess = prompt("Please select rock, paper or scissors:");
//
//var comCalc = Math.random();
//
//if (comCalc <= .34) {
//    comGuess = "Rock";
//} else if (comCalc >= .67) {
//    comGuess = "Paper";
//} else {
//    comGuess = "Scissors";
//}
//
//switch (yourGuess) {
//case "rock":
//    if (comGuess == "Rock") {
//        window.console.log("You both chose Rock, game results in a tie.  Play again!")
//    } else if (comGuess == "Paper") {
//        window.console.log("Paper beats rock, you lose!")
//    } else {
//        window.console.log("Rock beats Scissors, you win!")
//    }
//    break;
//case "Paper":
//    if (comGuess == "Rock") {
//        window.console.log("Paper beats Rock, you win!")
//    } else if (comGuess == "Paper") {
//        window.console.log("You both chose paper, game results in a tie. Play again!")
//    } else {
//        window.console.log("Scissors beats Paper, you lose!")
//    }
//	break;
//case "Scissors":
//    if (comGuess == "Rock") {
//        window.console.log("Rock beats Scissors, you lose!")
//    } else if (comGuess == "Paper") {
//        window.console.log("Scissors beats Paper, you win!")
//    } else {
//        window.console.log("You both chose scissors, game results in a tie. Play again!")
//    }
//    break;
//default:
//    window.console.log("You made an invalid selection. Please try again!");
//}



// The Basic Calculator 

//var x = Number(window.prompt("Please enter the first number:"));
//var y = Number(window.prompt("Please enter the second number:"));
//var op = window.prompt("Enter the operator: (addition, subtraction, multiplication or division:)");
//
//function calculate(x, y, op) {
//    switch (op) {
//        case "addition":
//            window.console.log("First number plus Second number = " + (x+y));
//            break;
//        case "subtraction":
//            window.console.log("First number subtract the Second number = " + (x-y));
//            break;
//        case "multiplation":
//            window.console.log("First number times Second number = " + (x*y));
//            break;
//        case "division":
//            window.console.log("First number divided by Second number = " + (x/y));
//            break;
//        default:
//            window.console.log("You did not avalid input, please try again");
//    }
//}
//
//calculate (x, y, op);


// Death by JavaScript 

// 1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

//function myFunction(word) {
//    var str = word;
//    var res = str.split("");
//    var sortWord = res.sort();
//    window.console.log(sortWord.join(""));
//}
//
//myFunction("frustrated");

// 2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.


//function toTitleUpperCase(str)
//{
//    return str.replace(/\b\w/g, function (txt) { return txt.toUpperCase(); });
//}
//window.console.log(toTitleUpperCase("the quick brown fox"));


// 3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

//function countVowels(stuff) {
//    window.console.log(stuff.match(/[aeiou]/gi).length);
//}
////window.console.log(countVowels("the quick brown fox"));
//countVowels("the quick brown fox");

// 4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

//function stringGen(length)
//{
//    var generatePW = " ";
//    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//    
//    var i;
//    for( i=0; i < length; i += 1 )
//        genPW += charset.charAt(Math.floor(Math.random() * charset.length));
//
//    return generatePW;
//}
//
//console.log(stringGen(8));

// 5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

//var Longest_Country_Name = ["Australia", "Germany", "United States of America"];
//
//var lowest = 0;
//var longest;
//var i;
//for(i = 0; i < Longest_Country_Name.length; i+= 1){
//    if(Longest_Country_Name[i].length > lowest){
//        var lowest = Longest_Country_Name[i].length;
//        longest = Longest_Country_Name[i];
//    }      
//} 
//
//window.console.log(longest);



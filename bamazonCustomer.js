var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon'
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    });

function start() {

connection.query('SELECT * FROM products', function (error, result){
	if(error) throw error;

    console.log('Products:');
    for (var i = 0; i < result.length; i++) {
        console.log("ID: " + result[i].item_id + " | " + "Product: " + result[i].product_name + " | " + "Department: " + result[i].department_name + " | " + "Price: " + result[i].price + " | " + "Quantity: " + result[i].stock_quantity);
    	}

    inquirer.prompt([
	    {
	      type: "input",
	      name: "id",
	      message: "What is the ID of the product you would like to purchase?",
	      validate: function(value){
	        if(isNaN(value) == false && parseInt(value) <= result.length && parseInt(value) > 0){
	          return true;
	        } else{
	          return false;
	        }
	      }
	    },
	    {
	      type: "input",
	      name: "qty",
	      message: "How many units of the product would you like to purchase?",
	      validate: function(value) {
            if (isNaN(value) == false && parseInt(value) > 0) {
                return true;
            } 
            else {
                return false;
            }
       	  }
    	}

    ]).then(function(select) {

        var grandTotal = ((result[(select.id) - 1].price) * parseInt(select.qty)).toFixed(2);

        if (result[(select.id) - 1].stock_quantity >= parseInt(select.qty)) {
            connection.query("UPDATE Products SET ? WHERE ?", [
                { stock_quantity: (result[(select.id) - 1].stock_quantity - parseInt(select.qty)) },
                { item_id: select.id }
            ], function(err, result) {
                if (err) throw err;
                console.log("\nYour total is $" + grandTotal + ".");
                buyMore();
            });
        } 
        else {
            console.log("Sorry! Not enough quantity.");
            buyMore();
            }
        });
    });
}

function buyMore() {
    inquirer.prompt([{
        name: "again",
        type: "confirm",
        message: "Would you like to buy another item?"
    }]).then(function(select) {
        if (select.again) {
            start();
        } else {
            console.log("\nThank you. Please come again.");
        }
    });
}

start();
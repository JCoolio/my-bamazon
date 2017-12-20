var mysql = require("mysql");
var prompt = require("prompt");
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "Bamazon"
});

connection.connect(function(err){
    if(err){
    console.log('Error connecting to Db');
    return;
    }
    console.log('Connection established');
    var schema = {
        properties: {
            ID: {
            message: "Please enter the ID number of the product you would like to purchase.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            howMany: {
            message: "Please enter how many you would like to purchase.",
            pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
            required: true
            }
        }
    };

    var schema2 = {
        properties: {
            AnotherPurchase: {
            message: "Would you like to buy another product?.",
            pattern: /(no|n|yes|y)/,
            required: true
            },
        }
    };

var stopApp = function(){
    return next(err);
}

var beginApp = function(){
    connection.query("SELECT * FROM Products", function(err, result) {
        if (err) throw err;
        return (getBamazonProducts(result));
      
      });
}

    
    var getBamazonProducts = function (products){
        console.log("Welcome customer this is Bamazon! Here are all of the products we sell including their costs and current inventory.");
        for (var i = 0; i < products.length; i++) {
            var productsResults = "\r\n"+
            "ItemID: " + products[i].ItemID+"\r\n"+
            "Product Description: " + products[i].ProductName+"\r\n"+
            "Department: " + products[i].DepartmentName+"\r\n"+
            "Price: $ "+ products[i].Price+"\r\n"+
            "Current Stock: " + products[i].StockQuantity;
            console.log(productsResults);
        }
        userSelectID();
    }

    
    var userSelectID = function(){
        prompt.start();
        console.log("Please enter the ID of the product you would like to purchase.");

        prompt.get(schema, function (err, result) {
            if (err){
                console.log(err)
            }
            var userChoiceID = parseInt(result.ID);
            var userChoiceHowMany = parseInt(result.howMany);

            var checkInventory = function(){
                connection.query('SELECT * FROM Products WHERE ItemID =' + userChoiceID, function(err, result) {
                    if (err) throw err;

                    var userWantsToBuy = userChoiceHowMany;
                    var productInventory = result[0].StockQuantity;
                    var productsPrice = result[0].Price;
                    var isInStock = productInventory - userWantsToBuy;
                    var totalCost= productsPrice * userWantsToBuy;

                    if (userWantsToBuy > productInventory || productInventory === 0){
                        console.log("Sorry we are unable to fulfill your order due to inventory. Please try again with a diffrent quantity or a new product."+"\r\n"+"\r\n");
                        userSelectID();
                    } else {
                        console.log("There are "+result[0].StockQuantity+" of "+result[0].ProductName);
                        console.log("You are purchasing "+ userWantsToBuy +" "+result[0].ProductName+"s at $"+ result[0].Price+" per item.");
                        console.log("Your total is $"+totalCost);
                        connection.query('UPDATE Products SET StockQuantity = '+isInStock+' WHERE ItemID ='+userChoiceID, function(err, result){
                        if (err) throw err;
                            connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID ='+userChoiceID, function(err, result){
                            }); 
                        });
                        prompt.get(schema2, function (err, result) {
                            if (err){
                                console.log(err)
                            }
                            console.log(result);
                            var userAnswer = result.AnotherPurchase;
                            if (userAnswer === "n" || userAnswer === "no"){
                                stopApp();
                            }else{
                                beginApp();
                            }   
                        });
                    }
                  });
            };
            checkInventory();
        });
    }

beginApp();
});
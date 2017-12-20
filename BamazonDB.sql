CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName varchar(50) NOT NULL, DepartmentName varchar(50) NOT NULL, Price varchar(30) NOT NULL, StockQuantity int NOT NULL, PRIMARY KEY(ItemID) );
describe Products;
select * from Products;
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Chemical Guys Foam Cannon", "Home, Garden & Tools", 42.49, 36);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Zero-G Kink Free Hose", "Home, Garden & Tools", 39.64, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("AeroGarden", "Home, Garden & Tools", 99.00, 150);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Clash Royale Card Game", "Toys, Kids & Baby", 15.99, 250);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Monopoly - The Last Jedi Edition", "Toys, Kids & Baby", 75.00, 25000);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Gucci Headband", "Clothing, Shoes & Jewelry", 175.25, 170);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Supreme x Bamazon Hat", "Clothing, Shoes & Jewelry", 225.00, 21);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Exfouliating Face Cleaner V2", "Beauty, Health & Grocery", 125.00, 2000);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Canon G7X Mark II", "Electronics & Computers", 499.99, 1500);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("Playstation 4 Pro", "Electronics & Computers", 399.99, 12000);

select * from Products;

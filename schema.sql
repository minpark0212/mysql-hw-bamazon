CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NULL,
	department_name VARCHAR(100) NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INTEGER NULL,
	PRIMARY KEY(item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Games", 14.29, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Electronics", 49.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super NES Classic", "Video Games", 119.89, 101);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Roku", "Electronics", 29.99, 705);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wonder", "Books", 10.69, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Greenies", "Pet Supplies", 33.99, 497);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pedigree", "Pet Supplies", 9.29, 375);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frozen", "Movies", 14.99, 666);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mulan", "Movies", 9.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NY Times", "Magazines", 7.99, 98);
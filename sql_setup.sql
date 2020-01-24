-- This file is an example for reference.
-- It is not actually used to generate the tables.

-- NOT USED
CREATE TABLE Recipe_Book (
	id integer PRIMARY KEY AUTOINCREMENT,
	recipe_id integer
);

-- OK
CREATE TABLE Recipe (
	id integer PRIMARY KEY AUTOINCREMENT,
	title varchar,
	description text,
	-- NO steps integer,
	-- NO ingredient_list integer
);

-- OK
CREATE TABLE Step (
	id integer PRIMARY KEY AUTOINCREMENT,
	recipe_id integer,
	step_number integer,
	description text
);

-- OK
CREATE TABLE Ingredient_Map (
	id integer PRIMARY KEY AUTOINCREMENT,
	recipe_id integer,
	ingredient_id integer,
	quantity integer
);

-- OK
CREATE TABLE Ingredient (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar
);

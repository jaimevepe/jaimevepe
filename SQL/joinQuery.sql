-- JOINS --
Select 
    p.productid, 
    p.description, 
    s.saledate, 
    s.amount AS "Amount"
FROM hr.sales s JOIN hr.products p
ON s.productid = p.productid; -- this is the relation
-- we use p. and s. as an alias or else we would need
-- to type hr.productionid.soAndSo

--Three way join
SELECT 
e.employee_id, -- e. short for employees/employee_id
e.first_name,
l.city, -- .l short for location
d.department_name
FROM hr.employees e
JOIN hr.departments d ON e.department_id = d.department_id
JOIN hr.locations l ON d.location_id = l.location_id
-- employees and department both have a department_id
-- locations and department have a location_id

------------------------
--     LEFT JOIN      --
SELECT department_id, department_name
FROM hr.departments;

SELECT 
    first_name,
    e.department_id,
    department_name
FROM hr.employees e LEFT JOIN hr.departments d
ON e.department_id = d.department_id;


-- RIGHT JOIN

SELECT
    first_name,
    department_name
FROM hr.employees e RIGHT JOIN hr.departments d
ON e.department_id = d.department_id;

--Need sales date, product name, sales amount
SELECT 
s.saledate AS "Date Sold",
p.description AS "Item Sold",
s.amount AS "Sale Amount"
FROM hr.sales s JOIN hr.products p
ON p.productid = s.productid;

-- To See saledate as a Regular date 
SELECT to_char(
s.saledate, 'MM/DD/YYYY') AS "Date Sold",
p.description AS "Item Sold",
s.amount AS "Sale Amount"
FROM hr.sales s JOIN hr.products p
ON p.productid = s.productid;

--provide first, last, height, weight, team
-- Alter above to include players who have not been drafted
SELECT *
FROM hr.players;

SELECT 
p.fname, 
p.lname, 
p.height,
p.weight,
t.name
FROM hr.players p LEFT JOIN hr.teams t
ON p.team_id = t.id;
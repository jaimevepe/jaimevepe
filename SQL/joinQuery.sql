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
--    INNER JOIN      --


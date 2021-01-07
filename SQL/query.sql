SELECT country_name,
country_id,
region_id
FROM countries; 

SELECT first_name, 
last_name,
-- to add space between the first and last name when Concat,
-- you need single '' and a space in the ' '
first_name ||' '|| last_name As "Full Name"
FROM employees;

SELECT first_name ||' '|| last_name As "Full Name",
    salary as "Before Salary",
    salary * 1.10 as "New salary"
FROM employees
WHERE salary * 1.10 > 9000;


SELECT * FROM employees
WHERE department_id = 60
ORDER BY employee_id;

-- DISTINCT = removes duplicates from the table

SELECT department_id FROM employees;
-- Does not return duplicates
SELECT DISTINCT department_id
 FROM employees;
--TODO:This will return duplicates but from manager_id
SELECT DISTINCT department_id, 
manager_id
FROM employees;

--Counts How many ROWS the table has
SELECT COUNT(department_id)
FROM employees;

--Filtering
SELECT employee_id, last_name, salary,
commission_pct
FROM employees 
WHERE commission_pct IS NOT NULL; --filter the nulls out

SELECT
    first_name,
    last_name,
    salary,
    commission_pct
FROM employees LIMIT 10;

--Those that make commission get a 10% boost
--COALESCE Changes the nulls with the 0 we added.
SELECT first_name || ' ' || last_name AS "Full Name",
    salary,
    commission_pct,
    COALESCE(commission_pct, 0) + .10 AS "10% Added to Commissions"
FROM employees LIMIT 10;

--EXTRACT = pull specific info from values
SELECT hire_date
FROM employees;
--
SELECT EXTRACT(year FROM hire_date) --Extracts only year
FROM employees
--
SELECT last_name, 
    EXTRACT(year FROM hire_date) AS "Year Hired"--Extracts only year
FROM employees
WHERE EXTRACT(year FROM hire_date) > 2010;

--Max Function
SELECT MAX(salary) AS "Max Salary"
FROM employees;

--MIN
SELECT MIN(salary) AS "Min Salary"
FROM employees;

-- Avarage
SELECT AVG(salary) AS "Avg Salary"
FROM employees;

SELECT last_name, salary
FROM employees
WHERE salary > 8504.5652173913043478;

-- SUB query
SELECT last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary)
                FROM employees);
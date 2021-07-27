1. What kind of programming language is SQL?
SQL is declarative language. This means that it's focuses
on higher level explanation on what should be executed but 
it doesn't reveal how the code is executed. As programmers we 
only need to specify what query we need SQL to perform and 
the languege itself will find the best way to perform this task. 

SQL is also a, what's called special purpose language. This means 
that it is used for a specific purpose, which is interacting with
relational databases. 

2. What are the three sublanguages of SQL?
The three sublanguages of SQL are: 
- DDL - Data Definition Langauge - is repsonsible for dealing with the defintion of data (structure or schema). Examples: DROP, CREATE, ALTER 
- DML - Data Manipulation Language - manipulates the data. Examples:
(INSERT, SELECT, UPDATE, DELETE) 
- DCL - Data Control Language = It's responsible for assigning roles and privilages to specific users (who uses the db and how). Examples: FRANT, REVOKE

3. Write the following values as quoted string values that could be used in a SQL query.
canoe
a long road
weren't
"No way!"

Answer:
'canoe'
'a long road'
'weren''t'
'"No Way!"'

4. What operator is used to concatenate strings?
||

5. What function returns a lowercased version of a string? Write a SQL statement using it.
SELECT LOWER('some string here);

6. How does the psql console display true and false values?
t, f 

7. The surface area of a sphere is calculated using the formula A = 4π r2, where A is the surface area and r is the radius of the sphere.

Use SQL to compute the surface area of a sphere with a radius of 26.3cm, truncated to return an integer.

SELECT CAST(4*PI()*POWER(26.3,2) AS integer);


1. Describe the difference between the varchar and text data types.
text is not data type that is a standard data types for all RDBMs. 
Text can contain any number of characters while varchar(n) limts the input to n number of characters. 

2. Describe the difference between the integer, decimal, and real data types.
Integer is data type characteriziing all integers. 
decimal usually takes two arguments, decimal and precision. the first corresponds to a number of total digits on both sides of the decimal point and the second the number of decimal point on the right side of decimal point.  
Real is also a numeric value, a floating-point number that can be any length.

3. What is the largest value that can be stored in an integer column?
2147483647

4. Describe the difference between the timestamp and date data types.
The timestamp type contains both a sumple date and time in YYYY-MM-DD HH:MM:SS format. 
WHile the date contains the date but no time.

Can a time with a time zone be stored in a column of type timestamp?

No. But there is a timestamp with time zone (or timestamptz) data type that will store a timestamp with a timezone.
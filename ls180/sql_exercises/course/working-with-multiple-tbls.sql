-- Write a query that determines how many tickets have been sold.

SELECT COUNT(id) FROM tickets;
SELECT COUNT(*) FROM tickets;

-- 3. Write a query that determines how many different customers purchased tickets to at least one event.

SELECT COUNT(DISTINCT customer_id) FROM tickets;

-- 4. Write a query that determines what percentage of the customers in the database have purchased a ticket to one or more of the events.

SELECT ROUND( (COUNT(DISTINCT t.customer_id) 
             / COUNT(DISTINCT c.id)::decimal * 100),2)
              AS percent
  FROM customers AS c
  LEFT OUTER JOIN tickets AS t
  ON (t.customer_id = c.id);

  SELECT DISTINCT tickets.customer_id, customers.id 
  FROM customers
  JOIN tickets
  ON (customers.id = tickets.customer_id);


-- 5. Write a query that returns the name of each event and how many tickets were sold for it, in order from most popular to least popular.

SELECT e.name, COUNT(t.id) as popularity
  FROM events as e
  LEFT OUTER JOIN tickets as t 
    ON (t.event_id = e.id)
    GROUP BY e.name
    ORDER BY popularity DESC;

    -- 6. Write a query that returns the user id, email address, and number of events for all customers that have purchased tickets to three events.

 SELECT c.id, c.email, COUNT(DISTINCT t.event_id)
  FROM customers as c
  JOIN tickets as t
    ON c.id = t.customer_id
      GROUP BY c.id
      HAVING COUNT(DISTINCT t.event_id) = 3;

    -- 7. Write a query to print out a report of all tickets purchased by the customer with the email address 'gennaro.rath@mcdermott.co'. The report should include the event name and starts_at and the seat's section name, row, and seat number.

SELECT e.name as event, 
       e.starts_at, 
       s.name as section,
       st.row,
       st.number as seat 
  FROM tickets as t
  JOIN  events as e
    ON t.event_id = e.id
  JOIN customers as c 
    ON c.id = t.customer_id
  JOIN seats as st 
    ON st.id = t.seat_id
  JOIN sections as s 
    ON s.id = st.section_id
  WHERE c.email = 'gennaro.rath@mcdermott.co';
  
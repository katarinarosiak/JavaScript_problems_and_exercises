--EXPLAIN:

EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

-- output:
                    QUERY PLAN 
--------------------------------------------------------------------------
 Hash Join  (cost=33.38..66.47 rows=635 width=32)
   Hash Cond: (bidders.id = bids.bidder_id)
   ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36)
   ->  Hash  (cost=30.88..30.88 rows=200 width=4)
         ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4)
               Group Key: bids.bidder_id
               ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4)
(7 rows)

--answer:
The EXPLAIN statement together with a query output a wgat's called a Query Plan. It doesn't actually executes the query, instead it just displays what is the chosen query plan, that quering engine determined to be the most efficient during the query path. The query plan consist of a chosen algorythm that (Hash Join in this case), the estimated cost of running the query (starting on  33.38 and ending on 66.47), number of rows and width. The output also shows the same  information about the subqueries. The most important information is the estimated cost of running the query as this is what we can use to compare two queries to each other and decide which one is more efficient. 

--ANALYZE


EXPLAIN ANALYZE SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

--output:

                                                     QUERY PLAN                                     
                 
----------------------------------------------------------------------------------------------------
-----------------
 Hash Join  (cost=33.38..66.47 rows=635 width=32) (actual time=4.296..4.307 rows=6 loops=1)
   Hash Cond: (bidders.id = bids.bidder_id)
   ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36) (actual time=3.904..3.908 rows=7 l
oops=1)
   ->  Hash  (cost=30.88..30.88 rows=200 width=4) (actual time=0.352..0.354 rows=6 loops=1)
         Buckets: 1024  Batches: 1  Memory Usage: 9kB
         ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4) (actual time=0.340..0.346 rows=6 loops=1)
               Group Key: bids.bidder_id
               ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.296..0.306 rows=26 loops=1)
 Planning Time: 0.325 ms
 Execution Time: 4.406 ms
(10 rows)


--answer:
Runnign ANALYZE together with EXPLAIN statement will both execute the query and output the query plan. Except for the information that running query with only EXPLAIN, running the query with both EXPLAIN and ANALYZE gives us also an actual time, actual number of rows and number of loops for every query and subquery. 
Moreover it provides us with planning and execution time as well. For our query it will be (Planning Time: 0.325 ms and Execution Time: 4.406 ms). 
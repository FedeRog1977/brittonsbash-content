-----
Lab 1
-----

* Fetch Table:

SELECT *
	FROM olym.olym_games;

* Add table:

CREATE TABLE student (
	StudentId VARCHAR(14),
	Surname VARCHAR(40) NOT NULL,
	StartYear NUMBER(4,0),
	EndYear NUMBER(4,0),
	Postcode VARCHAR(9),
	PRIMARY KEY (StudentId)
);

* View tables:
	- Left menu --> schema

* Populate table:

INSERT INTO student VALUES ('Y17_abc','Jones',2017,2019,'SE19 1AB');
INSERT INTO student VALUES ('Y17_def','Smith',2017,2020,'SE20 2DE');
INSERT INTO student VALUES ('Y15_xyz','Moray',2015,2018,'G61 3RD');

* Upload SQL files:
	- My scripts --> select file

---------------
Oracle Tutorial
---------------

Subqueries: Databases for Developers --> Execute Prerequisite SQL:

* Display table contents:

SELECT * FROM bricks;
SELECT * FROM colours;

* Display table contents (inline):

SELECT * FROM (
	SELECT * FROM bricks
)

* Count using inline view (number of bricks req. for ea. color):

SELECT * FROM (
	SELECT colour, COUNT(*) c
		FROM bricks
		GROUB BY colour
) brick_counts

* Join result to colors table:

SELECT * FROM (
	SELECT colour, COUNT(*) c
		FROM bricks
		GROUP BY colour
) brick_counts
JOIN colours
	ON brick_counts.colour = colours.colour_name
	AND brick_counts.c < colours.minimum_bricks_needed

* ASSESSMENT: Find min and max for each brick color using inline view:

SELECT * FROM (
        SELECT colour, MIN(brick_id), max(brick_id)
        	FROM bricks
        	GROUP BY colour
) brick_counts
JOIN colours
	ON brick_counts.colour = colours.colour_name
	...

* Nested Subqueries: all rows in colours where brics match:

SELECT * 
	FROM colours c
	WHERE c.colour_name IN (
		SELECT b.colour
			FROM bricks b
);

* Nested Subqueries: flter rows:

SELECT *
	FROM colours c
	WHERE c.colour_name IN (
  		SELECT b.colour
			FROM bricks b
  			WHERE b.brick_id < 5
);

* Correlated vs. Uncorrelated:
	- Corr.: when a query joins a table from a parent query
	- Therefore, difference between IN and EXISTS
		- EXISTS: returns rows from parent query, e.g.:

select *
	FROM colours
	WHERE EXISTS (
  		SELECT null
  			FROM bricks
);

* NOT IN vs. EXISTS:
	- E.g. find all rows from parent which don't match in the subquery:

SELECT *
	FROM colours c
	WHERE NOT EXISTS (
  		SELECT null from bricks b
  			WHERE b.colour = c.colour_name
);

	- Same w/ NOT IN:

SELECT *
	FROM colours c
	WHERE c.colour_name NOT IN (
  		SELECT b.colour
		FROM bricks b
);

	- Returns nothing, meaning it's like saying:

select *
	from colours c
	where c.colour_name not in (
  		'red', 'green', 'blue', 
  		'orange', 'yellow', 'purple',
  		null
);

	- Fix:

select *
	from colours c
	where c.colour_name not in (
		select b.colour from bricks b
  		where  b.colour is not null
);

* ASSESSMENT: Find all rows in bricks with colour where: colours.minimum_bricks_needed = 2:

SELECT *
	FROM bricks b
	WHERE b.colour IN (
		SELECT c.colour_name
			FROM colours c
			WHERE c.minimum_bricks_needed = 2
	);

* Scalar Subqueries: return 1 column and 1 row; e.g. count of number of bricks matching each color:

SELECT colour_name, (
	SELECT count(*) 
		FROM bricks b
         	WHERE b.colour = c.colour_name
         	GROUP BY b.colour
       ) brick_counts
	FROM colours c;
	
	- 0 in place of null values:

SELECT colour_name, nvl ( (
        SELECT count(*)
                FROM bricks b
                WHERE b.colour = c.colour_name
                GROUP BY b.colour
       ), 0) brick_counts
        FROM colours c;

	- Less than minimum needed:

SELECT colour, count(*) c
	FROM bricks b
	GROUP BY colour
	HAVING count(*) < (
  		SELECT c.minimum_bricks_needed 
  			FROM colours c
  			WHERE c.colour_name = b.colour
);

* ASSESSMENT: minimum brick_id for each color:

SELECT c.colour_name, (
	SELECT min(brick_id)
		FROM bricks b
		WHERE b.colour = c.colour_name
) min_brick_id
	FROM colours c
	WHERE c.colour_name IS NOT NULL;

* Common Table Expressions: naming subqueries:

WITH brick_colour_count AS (
	SELECT colour, count(*)
		FROM bricks
		GROUP BY colour
)
SELECT *
	FROM brick_colour_counts;

* Common Table Expressions: reusable subqueries:
	- Naming and reusing many times
	- Which colors have more bricks than the min req.?
	- Avg. number of bricks you have for ea. color?
		- Group bricks by color 
		- Filter colours table where this count is > min_bricks_needed for that color
		- Compute mean

SELECT c.colour_name, 
	c.minimum_bricks_needed, (
	SELECT avg ( count(*) )
        FROM bricks b
        GROUP BY b.colour
       ) mean_bricks_per_colour
	FROM colours c
	WHERE c.minimum_bricks_needed < (
  		SELECT count(*) c
  		FROM bricks b
  		WHERE b.colour = c.colour_name
  		GROUP BY b.colour
);

* Literate SQL by DONALD E. KNUTH
	- E.g. instead of:

SELECT brick_id
	FROM bricks
	WHERE colour IN ('red','blue');

	- To find which bricks you have less of than average:
		- Count bricks by color
		- Take avg. of counts
		- Return those rows where value in step 1 is > in step 2:

SELECT colour
	FROM bricks
 	GROUP BY colour  
	HAVING COUNT(*) < (
  		SELECT AVG(colour_count) 
  			FROM (
    				SELECT colour, COUNT(*) colour_count
    					FROM bricks
    					GROUP BY colour  
  			)
	);

	- Furthermore:

WITH brick_counts AS ( 
  	-- 1. Count the bricks by colour
  	SELECT b.colour, COUNT(*) c
  		FROM bricks b
  		GROUP BY b.colour
	), 
	average_bricks_per_colour AS ( 
  	-- 2. Take the average of these counts
  	SELECT AVG(c) average_count
  		FROM brick_counts
	)
  	SELECT *
		FROM brick_counts bc  
  		JOIN average_bricks_per_colour ac
	  	-- 3. Return those rows where the value in step 1 is less than in step 2
  		ON bc.c < average_count; 

* Testing subqueries:
	- Testing the above w/ different final FROM clause

WITH brick_counts AS (
        -- 1. Count the bricks by colour
        SELECT b.colour, COUNT(*) c
                FROM bricks b
                GROUP BY b.colour
        ),
        average_bricks_per_colour AS (
        -- 2. Take the average of these counts
        SELECT AVG(c) average_count
                FROM brick_counts
        )
        SELECT *
                FROM brick_counts bc;

* ASSESSMENT: count number of rows in colours:

WITH colour_count AS (
	SELECT COUNT(*)
		FROM colours
)
	SELECT *
		FROM colour_count;

-----
Lab 2
-----

1.

(a)

CREATE TABLE Lab2A (
	N1 INTEGER,
	N2 INTEGER,
	Comments VARCHAR2(1000)
);

INSERT INTO Lab2A VALUES(3,7,'First'); 
INSERT INTO Lab2A VALUES(13,6,'Second');
INSERT INTO Lab2A VALUES(9,17,'Third'); 
INSERT INTO Lab2A VALUES(23,9,'Fourth');
INSERT INTO Lab2A VALUES(14,12,'Fifth');
INSERT INTO Lab2A VALUES(19,14,'Sixth');

(b)

Add extra row to table where N1 and N2 are not in ascending order, and move them to ascending order.

DECLARE
	x NUMBER(10);
	y NUMBER(10);
	abc VARCHAR2(40);

BEGIN
	SELECT N1, N2, Comments
		INTO x, y, abc
		FROM Lab2A
		WHERE N1 > N2;
	INSERT INTO Lab2A 
		VALUES(y, x, CONCAT(abc,' - Altered Entry'));
END;

(c)

Add extra row to table where N1 and N2 are in ascending order, and move them to descending order. However, this return more than one row so must use a cursor.

DECLARE
        x NUMBER(10);
        y NUMBER(10);
        abc VARCHAR2(40);

BEGIN
        SELECT N1, N2, Comments
                INTO x, y, abc
                FROM Lab2A
                WHERE N2 > N1;
        INSERT INTO Lab2A
                VALUES(x, y, CONCAT(abc,' - Altered Entry'));
END;

(d)

DECLARE
        x NUMBER(10);
        y NUMBER(10);
        abc VARCHAR2(40);
	i NUMBER;

BEGIN
        SELECT N1, N2, Comments
                INTO x, y, abc
                FROM Lab2A
                WHERE N2 > N1;
        IF SQL%rowcount > 1
		THEN
			DBMS_OUTPUT.put_line('Too many rows');
		ELSE
			DBMS_OUTPUT.put_line('One row returned');
	END IF;
        INSERT INTO Lab2A
                VALUES(x, y, CONCAT(abc,' - Altered Entry'));
END;

...

2.

(a)

Cursors: alter multiple rows similtaneously.

The following could be considered poor code as just a simple UPDATE statement should usually be used for this purpose however, this demonstrates a CURSOR well.

* Switch rows to be (N2, N1, ...)
* By deleting out-of-order rows and inserting new correct order ones

DECLARE
	a Lab2A.N1%TYPE;
	b Lab2A.N2%TYPE;
	xyz Lab2A.Comments%TYPE;

	/* Declare Cursor */
	CURSOR Lab2ACursor IS
		SELECT N1, N2, Comments
			FROM Lab2A
			WHERE N1 > N2
			FOR UPDATE NOWAIT;
	
BEGIN
	OPEN Lab2ACursor;
	LOOP
		/* Get each row from cursor into the declared variables */
		FETCH Lab2ACursor
			INTO a, b, xyz;
		EXIT
			WHEN Lab2ACursor%NOTFOUND;
		/* If no exit, row to take action on */
		DELETE
			FROM Lab2A
			WHERE CURRENT OF Lab2ACursor;
		INSERT
			INTO Lab2A
			VALUES (b, a, CONCAT(xyz,' - now correct order'));
	END LOOP;
	CLOSE Lab2ACursor;
END;

(b)

* Added some new rows to table Lab2A where N1 > N2 and N1-N2 is sometimes <,=,> 5

(c)

* Do the same as above but not on rows where the amount by which N1 is greater than N2 is less than 5.

DECLARE
        a Lab2A.N1%TYPE;
        b Lab2A.N2%TYPE;
        xyz Lab2A.Comments%TYPE;

        CURSOR Lab2ACursor IS
                SELECT N1, N2, Comments
                        FROM Lab2A
                        WHERE N1 > N2
			AND N1 - N2 >= 5
                        FOR UPDATE NOWAIT;

BEGIN
        OPEN Lab2ACursor;
        LOOP
                FETCH Lab2ACursor
			INTO a, b, xyz;
                EXIT
			WHEN Lab2ACursor%NOTFOUND;
                DELETE
			FROM Lab2A
			WHERE CURRENT OF Lab2ACursor;
                INSERT
			INTO Lab2A
			VALUES (b, a, CONCAT(xyz,' - now correct order'));
        END LOOP;
        CLOSE Lab2ACursor;
END;

3.

(a)

* Create PROCEDURE to take value and insert row into Lab2A
* MODE is IN (read-only), TYPE is OUT (write-only) or INOUT (both)
* TYPE must be unconstrained , i.e. VARCHAR2 as opposed to VARCHAR(40)
* Only one parameter of NUMBER which is read only IN
* Use `CREATE OR REPLACE PROCEDURE' when re-writing to make amendments as already exists

CREATE PROCEDURE
	addRow(x IN NUMBER)
	AS
BEGIN
	INSERT INTO Lab2A VALUES (x, 99, 'Not a very useful row');
END addRow;

(b)

* Procedures are called
* E.g. adding 123 to N1 of new row

BEGIN addRow(123);
END;

(c)

CREATE OR REPLACE PROCEDURE
	addRow_to_Lab2A(x IN NUMBER, y IN NUMBER, z IN VARCHAR2)
	AS
BEGIN
        INSERT INTO Lab2A VALUES (x, y, z); 
END addRow_to_Lab2A;

BEGIN addRow_to_Lab2A(12, 9, 'This is a test');
END;

(d)

A procedure does not have to return a result; a function does. E.g. accept two parameters and return their sum. The `/' symbol runs the code once called.

CREATE OR REPLACE FUNCTION
	mySum (N1 IN NUMBER, N2 IN NUMBER)
	RETURN NUMBER AS
BEGIN
	RETURN N1 + N2;
END mySum;
/ 

DECLARE
	getResult NUMBER(10);

BEGIN
	getResult := mySum(5, 7);
	DBMS_OUTPUT.PUT_LINE('Result: ' || getResults);
END;

(e)

* View all procedures and functions created:

SELECT object_type, object_name
	FROM user_objects
	WHERE object_type = 'PROCEDURE'
	OR object_type = 'FUNCTION';

* And drop them like tables and views:

DROP PROCEDURE addRow_to_Lab2A;
DROP FUNCTION mySum;

4.

(a)

CREATE OR REPLACE FUNCTION
        Price_with_VAT (p IN NUMBER)
        RETURN NUMBER AS
BEGIN
        RETURN ROUND(p * 1.2, 2);
END Price_with_VAT;
/

SELECT Product_ID, Product_Name, Unit_Price, Price_with_VAT(Unit_Price) AS Price_Post_VAT
	FROM CO.Products;

(b)

CREATE OR REPLACE FUNCTION fLeapYear(yr IN NUMBER)
        RETURN BOOLEAN IS

BEGIN
        IF MOD(yr, 4) <> 0 THEN /* Is there a remainder when /4? */
                RETURN FALSE;
        ELSIF MOD(yr, 100) = 0 THEN
                IF MOD(yr, 400) = 0 THEN
                        RETURN TRUE;
                ELSE
                        RETURN FALSE;
                END IF;
        ELSE
                RETURN TRUE;
        END IF;
END fLeapYear;
/

/* As you can't use BOOLEAN in a SELECT statement */

CREATE OR REPLACE FUNCTION fLeapYear(yr IN NUMBER)
	RETURN NUMBER IS

BEGIN
	IF MOD(yr, 4) <> 0 THEN /* Is there a remainder when /4? */
		RETURN 0;
	ELSIF MOD(yr, 100) = 0 THEN
		IF MOD(yr, 400) = 0 THEN
			RETURN 1;
		ELSE
			RETURN 0;
		END IF;
	ELSE
		RETURN 1;
	END IF;
END fLeapYear;
/

SELECT *
	FROM OLYM.Olym_Games;
	WHERE fLeapYear(Year) = 1;

...

/* ----- */
/* Lab 3 */
/* ----- */

/* 1. */

/* (a) */

CREATE OR REPLACE FUNCTION
    inpRev(txtIn IN VARCHAR2)
    RETURN VARCHAR2 IS
    txtOut VARCHAR2(20);

BEGIN
    FOR i IN REVERSE 1.. LENGTH(txtIn) LOOP
        txtOut := txtOut || SUBSTR(txtIn, i, 1);
    END LOOP;
    
    RETURN txtOut;
END inpRev;
/

DECLARE
    rev VARCHAR(20);

BEGIN
    rev := inpRev('vimtutor');
    DBMS_OUTPUT.PUT_LINE('Text inverse: ' || rev);
END;

/* (b) */

/* For loop method: */

CREATE OR REPLACE FUNCTION
    calcFact(nIn IN NUMBER)
    RETURN NUMBER IS
    fact NUMBER;
    rec NUMBER;
    nOut NUMBER;
    
BEGIN
    fact := 1;
    rec := nIn;
    
    FOR i in 1..nIn LOOP
        fact := fact * rec;
        rec := rec - 1;
    END LOOP;
    
    RETURN fact;
END calcFact;
/

DECLARE
  fact NUMBER;

BEGIN
    fact := calcFact(5);
    DBMS_OUTPUT.PUT_LINE('Factorial = ' || fact);
END;

/* Recursive method: */

CREATE OR REPLACE FUNCTION
    calcFact(nIn IN NUMBER)
    RETURN NUMBER IS
    fact NUMBER;
    factBuff NUMBER;

BEGIN
    IF nIn = 0 THEN
        factBuff := 1;
    ELSE
        factBuff := nIn * calcFact(nIn - 1);
    END IF;
    
    fact := calcFact(nIn);
    
    RETURN fact;
END calcFact;
/

DECLARE
    fact NUMBER;

BEGIN
    fact := inpFact(5);
    DBMS_OUTPUT.PUT_LINE('Factorial = ' || fact);
END;

/* 2. */

/* Scripts run. */

/* 3. */

/* (a) */

CREATE OR REPLACE FUNCTION
    schStr(strIn IN VARCHAR2)
    RETURN VARCHAR2 IS
    strRes VARCHAR2(2000);
    strOut VARCHAR2(2000);
    out VARCHAR(20);
    matches INTEGER;

BEGIN
    matches := 0;

    FOR i IN (SELECT message
              FROM spamham
              WHERE message LIKE strIn) LOOP

        strRes := i.message;
        matches := matches + 1;
        
    END LOOP;

    IF matches = 0 THEN
        strOut := 'No Results';
    ELSE
        strOut := '`'||strRes||'`';
    END IF;

    RETURN strOut;
END schStr;
/

DECLARE
    str VARCHAR2(2000);

BEGIN
    str := schStr('%U still%');
    DBMS_OUTPUT.PUT_LINE('Found: ' || str);
END;

/* (b) */

CREATE OR REPLACE FUNCTION
    schStrMatches(optIn IN VARCHAR2, strIn IN VARCHAR2)
    RETURN VARCHAR2 IS
    matches INTEGER;

BEGIN
    matches := 0;

    FOR i IN (SELECT message
              FROM spamham
              WHERE target LIKE optIn
              AND message LIKE strIn) LOOP
        matches := matches + 1;
    END LOOP;

    RETURN matches;
END schStrMatches;
/

DECLARE
    matches NUMBER;

BEGIN
    matches := schStrMatches('ham', '%the%');
    DBMS_OUTPUT.PUT_LINE('Found ' || matches || ' Matches');
END;

/* (c) */

CREATE OR REPLACE FUNCTION
    schSpamMatches(optIn IN VARCHAR2)
    RETURN INTEGER IS
    matches INTEGER;

BEGIN
    matches := 0;

    FOR i IN (SELECT target
              FROM spamham
              WHERE sender LIKE optIn
              AND target LIKE 'spam') LOOP
        matches := matches + 1;
    END LOOP;

    RETURN matches;
END schSpamMatches;
/

CREATE OR REPLACE FUNCTION
    schHamMatches(optIn IN VARCHAR2)
    RETURN INTEGER IS
    matches INTEGER;

BEGIN
    matches := 0;

    FOR i IN (SELECT target
              FROM spamham
              WHERE sender LIKE optIn
              AND target LIKE 'ham') LOOP
        matches := matches + 1;
    END LOOP;

    RETURN matches;
END schHamMatches;
/

DECLARE
    targetName VARCHAR2(20);
    matchesSpam NUMBER;
    matchesHam NUMBER;

BEGIN
    targetName := 'Jones';
    matchesSpam := schSpamMatches(targetName);
    matchesHam := schHamMatches(targetName);
    DBMS_OUTPUT.PUT_LINE(
        'Found ' 
        || matchesSpam 
        || ' Spam Matches and ' 
        || matchesHam 
        || ' Ham Matches for ' 
        || '`' 
        || targetName 
        || '`'
    );
END;

/* (d) */

/* Table for spam or ham words */
CREATE TABLE spamHamWords (
    spamHamWord VARCHAR2(200)
);
/

/* Procedure to loop through messages and;
populate spamHamWords Table with individual words*/
CREATE OR REPLACE PROCEDURE
    spamHamWordsSeg(sentenceIn IN VARCHAR2) AS
    i NUMBER := 0;
    t VARCHAR2(50) := '';
    bfr VARCHAR2(50) := '';

BEGIN
    FOR i IN 1..LENGTH(sentenceIn) + 1 LOOP
        t := SUBSTR(sentenceIn, i, 1);
	/* Excluding punctuation, list could go on
	(could have its own table like `stopwords' if I could be bothered) */
	IF (
	    t != ' '
	    /* Some boomers still leave spaces between words and punctuation
	    where it often is not needed, some punctuation become words */
	    AND t != '.'
	    AND t != ','
	    AND t != '"'
	    AND t != '&'
	    AND t != '?'
            AND t != '('
            AND t != ')'
	    AND t != '-'
	    AND t != ':'
	) THEN
	    bfr := bfr || t;
	ELSE
	    INSERT INTO spamHamWords
		/* Add lower-cased word to spamHamWords table */
	        VALUES (LOWER(bfr));
	    bfr := '';
	    t := '';
	END IF;
    END LOOP;
END spamHamWordsSeg;
/

/* Cursor for determining a loop over messages from `spam' or `ham' type `target' */
DECLARE
    messageIn spamham.message%TYPE;

    CURSOR
        spamhamMsgCursor(targetIn IN VARCHAR2) IS
        SELECT message
        FROM spamham
	WHERE target = targetIn
        FOR UPDATE NOWAIT;

BEGIN
    /* Search `spam' or `ham' messages
    (simply change the targetIn value `spam' to `ham' to search under `ham' target) */
    OPEN spamhamMsgCursor('spam');
    LOOP
        FETCH spamhamMsgCursor
            INTO messageIn;
	    /* Run word capture procedure on message */
	    spamHamWordsSeg(messageIn);
        EXIT
            WHEN spamhamMsgCursor%NOTFOUND;
    END LOOP;
    IF spamhamMsgCursor%ISOPEN
	THEN CLOSE spamhamMsgCursor;
    END IF;
END;
/

/* Create table to store found words and associated word count spam */
CREATE TABLE spamHamResults AS
    SELECT spamHamWord, COUNT(spamHamWord) AS countSpamHam
        FROM spamHamWords
        /* Excluding stop-words from `stopwords' table*/
        WHERE spamHamWord NOT IN (
            SELECT stop_word
            FROM stopwords
        )
        GROUP BY spamHamWord
        ORDER BY countSpamHam DESC;

/* Create view to filter top 10 results */
CREATE OR REPLACE VIEW spamHamResultsTop10 AS
    SELECT *
        FROM spamHamResults
        WHERE rownum <= 10;

/* Query to display top 10 resuls view*/
SELECT * FROM spamHamResultsTop10;

/* Drop tables and ready up for next ROUND!!
(that's actually a munro meme, not a video game reference,
I'm not a zoomer coomer) */
DROP TABLE spamHamWords;
DROP TABLE spamHamResults;

/* ----- */
/* Lab 4 */
/* ----- */

/* Select population data */

SELECT country AS name, "2012" AS population_in_2012
    FROM world.world_population
    ORDER BY country;

/* Total world population in this sample
 This is an aggregation of data and therefore, requires no GROUP BY */

SELECT SUM("2012") AS world_population_in_2012
    FROM world.world_population;

/* Both country and world populations
 Use sub-queries - the bloated method */

 SELECT country AS country_name, "2012" AS country_population, world_pop.world_population
    FROM world.world_population,
    (    
        SELECT SUM("2012") AS world_population
	    FROM world.world_population
    ) world_pop
    ORDER BY country_population DESC;

/* Now try OVER to aggregate */

SELECT country AS country_name,
    "2012" AS country_population,
    SUM("2012") OVER() AS world_population
    FROM world.world_population
    ORDER BY country;

/* Now Window Function
 RANK which can only be used w/ OVER */

 SELECT country, "2012",
    RANK() OVER(ORDER BY "2012") AS population_rank_2012
    FROM world.world_population
    ORDER BY country;

/* --- SUBMISSION 5 (a) --- */

/* Above altered to display largest to smallest population rank */

 SELECT country, "2012",
    RANK() OVER(ORDER BY "2012" DESC) AS population_rank_2012
    FROM world.world_population
    ORDER BY country;

/* --- --- */

/* Order by population rank, rather than country */

SELECT country, "2012",
    RANK() OVER(ORDER BY "2012") AS population_rank_2012
    FROM world.world_population
    ORDER BY population_rank_2012;

/* Amend for descending order */

SELECT country, "2012",
    RANK() OVER(ORDER BY "2012" DESC) AS population_rank_2012
    FROM world.world_population
    ORDER BY population_rank_2012;

/* Amend to remove null rows */

SELECT country, "2012",
    RANK() OVER(ORDER BY "2012" DESC) AS population_rank_2012
    FROM world.world_population
    WHERE "2012" IS NOT NULL
    ORDER BY population_rank_2012;

/* --- SUBMISSION 5 (b) --- */

/* Top 20 countries of population in 2012
 Had not been in this grouping pre 1962 */

CREATE OR REPLACE VIEW top_20 AS
    SELECT country, "1962", "2012",
        RANK() OVER(ORDER BY "1962" DESC) AS pop_rank_1962,
        RANK() OVER(ORDER BY "2012" DESC) AS pop_rank_2012
        FROM world.world_population
        WHERE "2012" IS NOT NULL
        AND "1962" IS NOT NULL;

SELECT * FROM top_20
    WHERE pop_rank_2012 <= 20
    AND pop_rank_1962 > 20
    ORDER BY pop_rank_2012;

/* --- --- */

/* Manipulate preceding and succeeding rows using LEAD and LAG
 Limit output to top 15 */

 SELECT * 
    FROM (
        SELECT country, "2012",
	    RANK() OVER(ORDER BY "2012" DESC) AS country_pop_rank
	    FROM world.world_population
	    WHERE "2012" IS NOT NULL
	    ORDER BY country_pop_rank
    ) x
    WHERE country_pop_rank <= 15;

/* Difference between two ranked items
 E.g. revenue difference in top selling vs. 2nd top
 Start w/ figure formatting*/

SELECT *
    FROM (
        SELECT country, TO_CHAR("2012", '999G999G999G990') pop_2012,
	    RANK() OVER(ORDER BY "2012" DESC) AS pop_order
	    FROM world.world_population
	    WHERE "2012" IS NOT NULL
	    ORDER BY pop_order
    ) x
    WHERE pop_order <= 15;

/* Now row relativity
 E.g. how much a top 10 country is compared to next largest
 Use LEAD = 1 for 1 country above */

SELECT *
    FROM (
	SELECT RANK() OVER(ORDER BY "2012" DESC) AS pop_order,
	    country,
	    TO_CHAR("2012", '999G999G999G990'),
	    TO_CHAR(LEAD("2012", 1, 0) OVER(ORDER BY "2012") - 
		"2012", '999G999G999G999G999G990') DIFFERENCE
	    FROM world.world_population
	    WHERE "2012" IS NOT NULL
            ORDER BY pop_order
    ) x
    WHERE pop_order <= 10;

/* However, China is compared to 0 as there is no lead on it */

SELECT pop_order, country, pop_2012,
    DECODE(pop_order, 1, NULL, smaller_than) AS smaller_than_next_largest
    FROM (
        SELECT RANK() OVER(ORDER BY "2012" DESC) AS pop_order,
	    country,
	    TO_CHAR("2012", '999G999G999G990') pop_2012,
	    TO_CHAR(LEAD("2012", 1, 0) OVER(ORDER BY "2012") - 
	        "2012", '999G999G999G999G999G990') smaller_than
	    FROM world.world_population
	    WHERE "2012" IS NOT NULL
	    ORDER BY pop_order
    ) x
    WHERE pop_order <= 10;

/* --- SUBMISSION 5 (c) --- */

/* 5 smallest countries in the world using LAG */

SELECT pop_order, country, pop_2012,
   DECODE(pop_order, 1, NULL, larger_than) AS larger_than_next_smallest
   FROM (
        SELECT RANK() OVER(ORDER BY "2012" ASC) AS pop_order,
            country,
            TO_CHAR("2012", '999G999G999G990') pop_2012,
            TO_CHAR("2012" - LAG("2012", 1, 0) OVER(ORDER BY "2012"), 
                '999G999G999G999G999G990') larger_than
            FROM world.world_population
            WHERE "2012" IS NOT NULL
            ORDER BY pop_order
    ) x
    WHERE pop_order <= 5;

/* --- --- */

/* --- SUBMISSION 5 (d) --- */

/* The following `code' was written by group P */

/* Top 10 population changers and how average growth has differed
 on a time-series basis, also displayed against linear population change
 change increments over the last 10 years. */

/* Would have preferred to have done this over 50 years but there's
 a lot of null values after 10 years */

SELECT rank_aag,
    country,
    aag,
    DECODE(rank_aag, 0, NULL, lag1_aag) AS Δaag_lag1,
    DECODE(rank_aag, 0, NULL, lag2_aag) AS Δaag_lag2,
    DECODE(rank_aag, 0, NULL, lag3_aag) AS Δaag_lag3,
    DECODE(rank_aag, 0, NULL, lag4_aag) AS Δaag_lag4,
    DECODE(rank_aag, 0, NULL, lag5_aag) AS Δaag_lag5,
    "Latest Population (2012)",
    "Δ1yr", "Δ1yr (%)", "Δ5yr", "Δ5yr (%)", "Δ10yr", "Δ10yr (%)"
    FROM (
        SELECT
            /* Rank countries by average annual growth (AAG) rate */
            RANK() OVER(
                ORDER BY (
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ) DESC
            ) AS rank_aag,
            country,
            /* Calculating average annual growth - to output */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, '999G999D00'
            ) aag,
            /* Observing Δ in average annual growth with one lag from 2012--2002 */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10
                -
                LAG((
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, 1, 0)
                OVER(ORDER BY 
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ), '999G999D00'
            ) lag1_aag,
            /* Observing Δ in average annual growth with two lags from 2012--2002 */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10
                -
                LAG((
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, 2, 0)
                OVER(ORDER BY 
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ), '999G999D00'
            ) lag2_aag,
            /* Observing Δ in average annual growth with three lags from 2012--2002 */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10
                -
                LAG((
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, 3, 0)
                OVER(ORDER BY 
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ), '999G999D00'
            ) lag3_aag,
            /* Observing Δ in average annual growth with four lags from 2012--2002 */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10
                -
                LAG((
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, 4, 0)
                OVER(ORDER BY 
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ), '999G999D00'
            ) lag4_aag,
            /* Observing Δ in average annual growth with five lags from 2012--2002 */
            TO_CHAR(
                (
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10
                -
                LAG((
                    ((("2012" - "2011") / "2011") * 100) +
                    ((("2011" - "2010") / "2010") * 100) +
                    ((("2010" - "2009") / "2009") * 100) + 
                    ((("2009" - "2008") / "2008") * 100) +
                    ((("2008" - "2007") / "2007") * 100) +
                    ((("2007" - "2006") / "2006") * 100) +
                    ((("2006" - "2005") / "2005") * 100) +
                    ((("2005" - "2004") / "2004") * 100) +
                    ((("2004" - "2003") / "2003") * 100) +
                    ((("2003" - "2002") / "2002") * 100)
                ) / 10, 5, 0)
                OVER(ORDER BY 
                    (
                        ((("2012" - "2011") / "2011") * 100) +
                        ((("2011" - "2010") / "2010") * 100) +
                        ((("2010" - "2009") / "2009") * 100) + 
                        ((("2009" - "2008") / "2008") * 100) +
                        ((("2008" - "2007") / "2007") * 100) +
                        ((("2007" - "2006") / "2006") * 100) +
                        ((("2006" - "2005") / "2005") * 100) +
                        ((("2005" - "2004") / "2004") * 100) +
                        ((("2004" - "2003") / "2003") * 100) +
                        ((("2003" - "2002") / "2002") * 100)
                    ) / 10
                ), '999G999D00'
            ) lag5_aag,
            TO_CHAR("2012",'999G999G999G999G999G990') "Latest Population (2012)",  
            TO_CHAR("2012" - "2011", '999G999G999G990') "Δ1yr",  
            TO_CHAR((("2012" - "2011") / "2011") * 100, '999G999D00') "Δ1yr (%)",  
            TO_CHAR("2012" - "2007", '999G999G999G990') "Δ5yr", 
            TO_CHAR((("2012" - "2007") / "2007") * 100, '999G999D00') "Δ5yr (%)", 
            TO_CHAR("2012" - "2002", '999G999G999G990') "Δ10yr",  
            TO_CHAR((("2012" - "2002") / "2002") * 100, '999G999D00') "Δ10yr (%)"
            FROM world.world_population
            WHERE "2012" IS NOT NULL
            ORDER BY rank_aag
    )
    WHERE rownum <= 10;

/* As observed in the results table, Qatar holds the largest average annual
 rate across the ten year period of 2002--2012. It also majorly dominates in
 AAG change across the five lagged periods however, experiences a slowing in
 the rate of increase. On a more basic level, it also dominates across the linear
 5 year and 10 year changes with the largest percentage increases however, again
 is observed to slow at the 1 year change mark, in comparison to other countries.
 Its population is a lot smaller than those of other countries however, and is 
 subject to periodic spikes which may account for some of the high variance. */

/* --- --- */

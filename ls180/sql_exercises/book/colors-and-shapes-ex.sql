CREATE TABLE colors (
  id serial, 
  color varchar(100),
  PRIMARY KEY (id)
) ;

CREATE TABLE shapes (
  id serial, 
  color_id INT NOT NULL, 
  shape varchar(100),
  PRIMARY KEY (id),
  FOREIGN KEY (color_id)
    REFERENCES colors (id)
);


INSERT INTO colors (color)
  VALUES ('Red'), ('Blue'), ('Orange'), ('Green');

INSERT INTO shapes (color_id, shape) 
  VALUES (1, 'Square'), (1, 'Star'), (2, 'Traingle'),
    (4, 'Circle');

1. show all colors and which shapes are of those colors 
SELECT colors.color, shapes.shape
  FROM colors
  FULL JOIN shapes
  ON (colors.id = shapes.color_id);

2. Show what color is square 
SELECT shapes.shape, colors.color 
  FROM shapes 
  JOIN colors 
  ON (shapes.color_id = colors.id)
  WHERE shapes.shape = 'Square';

3. Show only red shapes
SELECT shapes.shape, colors.color
  FROM shapes
  JOIN colors
  ON (shapes.color_id = colors.id)
  WHERE colors.color='Red';

4. Show which color most of shapes are

SELECT colors.color, COUNT(shapes.shape)
  FROM colors
  JOIN shapes 
  ON (colors.id = shapes.color_id)
  GROUP BY colors.color
  LIMIT 1;

5. Show which color no shapes are

SELECT colors.color 
  FROM colors
  LEFT JOIN shapes 
  ON (shapes.color_id = colors.id)
  WHERE shapes.shape IS NULL;






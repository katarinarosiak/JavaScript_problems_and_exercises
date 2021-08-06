SELECT devices.name, COUNT(parts.id)
  FROM devices
  INNER JOIN parts
  ON devices.id = parts.device_id
  GROUP BY devices.name
  ORDER BY devices.name DESC;
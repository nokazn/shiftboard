CREATE DATABASE shiftboards;

CREATE TABLE staffs (
  staff_id CHAR(6) NOT NULL,
  nickname TEXT NOT NULL,
  PRIMARY KEY (staff_id)
);
CREATE TABLE shifts (
  day DATE NOT NULL,
  staff_id CHAR(6) NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  PRIMARY KEY (day, staff_id)
);
ALTER TABLE shifts ADD FOREIGN KEY (staff_id) REFERENCES staffs (staff_id);

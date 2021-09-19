-- Up
CREATE TABLE message (
    id  INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname    VARCHAR,
    email   VARCHAR,
    message TEXT
)

-- Down
DROP TABLE message;
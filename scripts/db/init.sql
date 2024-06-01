\c ratingdb

CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO ratings (rating, comment, created_at) VALUES (5, 'Excellent service!', '2024-05-01 10:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (4, 'Very good experience', '2024-05-02 11:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (3, 'Average, nothing special', '2024-05-03 12:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (2, 'Not up to the mark', '2024-05-04 13:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (1, 'Very poor experience', '2024-05-05 14:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (5, 'Fantastic!', '2024-05-06 15:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (4, 'Good overall', '2024-05-07 16:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (3, 'Could be better', '2024-05-08 17:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (2, 'Needs improvement', '2024-05-09 18:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (1, 'Bad experience', '2024-05-10 19:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (5, 'Outstanding!', '2024-05-11 20:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (4, 'Pretty good', '2024-05-12 21:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (3, 'Satisfactory', '2024-05-13 22:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (2, 'Not satisfactory', '2024-05-14 23:00:00');
INSERT INTO ratings (rating, comment, created_at) VALUES (1, 'Disappointing', '2024-05-15 09:00:00');

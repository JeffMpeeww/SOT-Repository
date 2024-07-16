-- Insert dummy data into Users table
INSERT INTO Users (FirstName, LastName, Email, Phone, User_Password, User_Type) VALUES
('John', 'Doe', 'john.doe@example.com', '123456789', 'password123', 1),
('Jane', 'Smith', 'jane.smith@example.com', '987654321', 'securepass', 2),
('Alice', 'Johnson', 'alice.johnson@example.com', '555666777', 'alicepass', 2),
('Bob', 'Brown', 'bob.brown@example.com', '444555666', 'bobpassword', 2);

-- Insert dummy data into Payments table
INSERT INTO Payments (Email, Amount, StartDate, EndDate) VALUES
('jane.smith@example.com', 10000.00, '2024-02-01', '2024-12-31'),
('alice.johnson@example.com', 9000.00, '2024-03-01', '2024-12-31'),
('bob.brown@example.com', 8000.00, '2024-04-01', '2024-12-31');

-- Insert dummy data into Sessions table
INSERT INTO Sessions (Email, Capacity, Session_Date) VALUES
('john.doe@example.com', 10, '2024-07-18');

-- Insert dummy data into SelectedSessions table
INSERT INTO SelectedSessions (Email, SessionID) VALUES
('jane.smith@example.com', 1),
('alice.johnson@example.com', 1),
('bob.brown@example.com', 1);
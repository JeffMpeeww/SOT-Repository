CREATE TABLE Users (
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) PRIMARY KEY,
    Phone VARCHAR(9) NOT NULL,
    User_Password VARCHAR(50) NOT NULL,
    User_Type INT NOT NULL
);

CREATE TABLE Payments (
    Email VARCHAR(100) PRIMARY KEY,
    Amount DOUBLE(6, 2) NOT NULL,
    StartDate DATE NOT NOT,
    EndDate DATE NOT NULL,
    FOREIGN KEY (Email) REFERENCES Users(Email)
);

CREATE TABLE Sessions (
    SesssionID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) PRIMARY KEY,
    Capacity INT NOT NULL,
    Session_Date DATE NOT NULL,
    FOREIGN KEY (Email) REFERENCES Users(Email)
);

CREATE TABLE SelectedSessions (
    Email VARCHAR(100),
    SessionID INT,
    FOREIGN KEY (Email) REFERENCES Users(Email),
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID),
    PRIMARY KEY (Email, SessionID)
);
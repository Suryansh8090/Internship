-- Create the file_sharing_platform database
CREATE DATABASE file_sharing_platform;

USE file_sharing_platform;

-- Create files table
CREATE TABLE files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255),
    file_path VARCHAR(255),
    password VARCHAR(255) DEFAULT NULL,
    expiry_date DATETIME DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Create schemas
# Create tables
CREATE TABLE IF NOT EXISTS app_db.location
(
    namel CHARACTER(100) NOT NULL,
    area_2m INT,
    parent CHARACTER(100),
    PRIMARY KEY(namel)
);

CREATE TABLE IF NOT EXISTS app_db.locationre
(
    id INT NOT NULL,
    namel CHARACTER(100),
    pname CHARACTER(100),
    PRIMARY KEY(id)
);


# Create FKs
ALTER TABLE app_db.location
    ADD    FOREIGN KEY (parent)
    REFERENCES location(namel);
    
ALTER TABLE app_db.locationre
    ADD    FOREIGN KEY (namel)
    REFERENCES location(namel);
    
ALTER TABLE app_db.locationre
    ADD    FOREIGN KEY (pname)
    REFERENCES location(namel);    

# Create Indexes

/*************************************************
 * DROP TABLES
 *************************************************/
 DROP TABLE IF EXISTS `ybr`.`ybr_application_rel`;
 DROP TABLE IF EXISTS `ybr`.`application`;
 DROP TABLE IF EXISTS `ybr`.`server`;
 DROP TABLE IF EXISTS `ybr`.`ybr`;
 DROP TABLE IF EXISTS `ybr`.`client`;
 DROP TABLE IF EXISTS `ybr`.`treatment`;
 DROP TABLE IF EXISTS `ybr`.`hosting`;
 DROP TABLE IF EXISTS `ybr`.`assesment_status`;



/**************************************************
 * CLIENT TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`client` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `client_name` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`))
ENGINE = InnoDB;
               
/**************************************************
 * YBR TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`ybr` (
  `ybr_id` INT NOT NULL AUTO_INCREMENT,
  `start_date` DATE,
  `end_date` DATE,
  `client_id` INT NULL,
  PRIMARY KEY (`ybr_id`),
  CONSTRAINT `client_id`
    FOREIGN KEY (`client_id`)
    REFERENCES `ybr`.`client` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
               
/**************************************************
 * TREATMENT TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`treatment` (
  `treatment_id` INT NOT NULL AUTO_INCREMENT,
  `treatment_name` VARCHAR(45) NULL,
  PRIMARY KEY (`treatment_id`))
ENGINE = InnoDB;

/**************************************************
 * HOSTING TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`hosting` (
  `hosting_id` INT NOT NULL AUTO_INCREMENT,
  `hosting_name` VARCHAR(45) NULL,
  PRIMARY KEY (`hosting_id`))
ENGINE = InnoDB;
               
/**************************************************
 * HOSTING TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`assesment_status` (
  `assesment_status_id` INT NOT NULL AUTO_INCREMENT,
  `assesment_status_name` VARCHAR(45) NULL,
  PRIMARY KEY (`assesment_status_id`))
ENGINE = InnoDB;

/**************************************************
 * APPLICATION TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`application` (
  `application_id` INT NOT NULL AUTO_INCREMENT,
  `application_code` VARCHAR(50) NULL,
  `application_name` VARCHAR(150) NULL,
  `default_treatment_id` INT NULL,
  PRIMARY KEY (`application_id`),
  CONSTRAINT `fk_default_treatment_id`
    FOREIGN KEY (`default_treatment_id`)
    REFERENCES `ybr`.`treatment` (`treatment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
               
/**************************************************
 * YBR APPLICATION REFERENCE TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`ybr_application_rel` (
  `ybr_id` INT NOT NULL,
  `application_id` INT NOT NULL,
  `version` VARCHAR(100) NULL,
  `vendor`  VARCHAR(100) NULL,
  `business_unit` VARCHAR(500) NULL,
  `hosting_id` INT NULL,
  `treatment_id` INT NULL,
  `reasoning` TEXT CHARACTER SET latin1 COLLATE latin1_general_cs NULL,
  `notes` TEXT CHARACTER SET latin1 COLLATE latin1_general_cs NULL,
  `assesment_status_id` INT NULL,
  `assignee` INT NULL,
  CONSTRAINT `fk_ybr_01`
    FOREIGN KEY (`ybr_id`)
    REFERENCES `ybr`.`ybr` (`ybr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_application_01`
    FOREIGN KEY (`application_id`)
    REFERENCES `ybr`.`application` (`application_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_treatment_01`
    FOREIGN KEY (`treatment_id`)
    REFERENCES `ybr`.`treatment` (`treatment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_hosting_01`
    FOREIGN KEY (`hosting_id`)
    REFERENCES `ybr`.`hosting` (`hosting_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assesment_status_01`
    FOREIGN KEY (`assesment_status_id`)
    REFERENCES `ybr`.`assesment_status` (`assesment_status_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION     
)
ENGINE = InnoDB;
               
/**************************************************
 * SERVER TABLE
 **************************************************/
CREATE TABLE IF NOT EXISTS `ybr`.`server` (
  `server_id` INT NOT NULL AUTO_INCREMENT,
  `ybr_id` INT NULL,
  `host_name` VARCHAR(50) NULL,
  `power_status` ENUM('Powered ON', 'Powered OFF', 'Unknown') NULL,
  `location` VARCHAR(50) NULL,
  `environment` ENUM('Production', 'Non Production', 'Unknown') NULL,
  `vm_count` INT NULL,
  `v_cpu_count` INT NULL,
  `peak_cpu_Utilization` DECIMAL(5,2) NULL,
  `v_ram_count` INT NULL,
  `peak_ram_utilization` DECIMAL(5,2) NULL,
  `provisioned_storage` INT NULL,
  `usable_storage` INT NULL,
  `guest_os` VARCHAR(200) NULL,
  `business_unit` VARCHAR(500) NULL,
  `treatment_id` INT NULL,
  `reasoning` TEXT CHARACTER SET latin1 COLLATE latin1_general_cs NULL,
  `notes` TEXT CHARACTER SET latin1 COLLATE latin1_general_cs NULL,
  `assesment_status_id` INT NULL,
  `assignee` INT NULL,
  PRIMARY KEY (`server_id`),
  CONSTRAINT `fk_ybr_02`
    FOREIGN KEY (`ybr_id`)
    REFERENCES `ybr`.`ybr` (`ybr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_treatment_02`
    FOREIGN KEY (`treatment_id`)
    REFERENCES `ybr`.`treatment` (`treatment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assesment_status_02`
    FOREIGN KEY (`assesment_status_id`)
    REFERENCES `ybr`.`assesment_status` (`assesment_status_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION     
)
ENGINE = InnoDB;              
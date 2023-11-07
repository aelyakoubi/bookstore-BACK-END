-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Record` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `available` BOOLEAN NOT NULL,
    `genre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Book` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `isbn` VARCHAR(191) NOT NULL,
    `pages` INTEGER NOT NULL,
    `available` BOOLEAN NOT NULL,
    `genre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `order_type` ENUM('BOOK', 'RECORD') NOT NULL,
    `book_id` VARCHAR(191) NULL,
    `record_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `delivery_date` DATETIME(3) NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NULL,

    INDEX `Order_book_id_idx`(`book_id`),
    INDEX `Order_record_id_idx`(`record_id`),
    INDEX `Order_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

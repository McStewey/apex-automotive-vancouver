CREATE TABLE `inquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`city` text NOT NULL,
	`experience` text NOT NULL,
	`timeline` text NOT NULL,
	`specialties` text DEFAULT '' NOT NULL,
	`message` text NOT NULL,
	`consent` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

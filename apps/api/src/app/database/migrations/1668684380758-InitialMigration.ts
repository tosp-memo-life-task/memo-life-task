import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1668684380758 implements MigrationInterface {
    name = 'InitialMigration1668684380758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workspace\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ownerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`priority\` enum ('LOW', 'MEDIUM', 'HIGH') NULL, \`status\` enum ('IN_PROGRESS', 'READY', 'READY_TO_START') NOT NULL DEFAULT 'READY_TO_START', \`registered_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`assigneeId\` int NULL, \`workspaceId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`salt\` varchar(255) NOT NULL, \`name_first\` varchar(255) NOT NULL, \`name_last\` varchar(255) NOT NULL, \`registered_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invitation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`receiverId\` int NULL, \`senderId\` int NULL, \`workspaceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`workspace_users_table\` (\`workspaceId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_8c8cee18d1760b3c270ba53433\` (\`workspaceId\`), INDEX \`IDX_52af573c654667d2833a813566\` (\`userId\`), PRIMARY KEY (\`workspaceId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`workspace\` ADD CONSTRAINT \`FK_51f2194e4a415202512807d2f63\` FOREIGN KEY (\`ownerId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_7384988f7eeb777e44802a0baca\` FOREIGN KEY (\`assigneeId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_ce8f24979af169c6cd19cc94e52\` FOREIGN KEY (\`workspaceId\`) REFERENCES \`workspace\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invitation\` ADD CONSTRAINT \`FK_3e56c55dc439399e7bb80ca3147\` FOREIGN KEY (\`receiverId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invitation\` ADD CONSTRAINT \`FK_4becefb4eb12f57d8a578d83946\` FOREIGN KEY (\`senderId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invitation\` ADD CONSTRAINT \`FK_9c6c084bcf65973479beb5cd632\` FOREIGN KEY (\`workspaceId\`) REFERENCES \`workspace\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`workspace_users_table\` ADD CONSTRAINT \`FK_8c8cee18d1760b3c270ba534330\` FOREIGN KEY (\`workspaceId\`) REFERENCES \`workspace\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`workspace_users_table\` ADD CONSTRAINT \`FK_52af573c654667d2833a8135665\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workspace_users_table\` DROP FOREIGN KEY \`FK_52af573c654667d2833a8135665\``);
        await queryRunner.query(`ALTER TABLE \`workspace_users_table\` DROP FOREIGN KEY \`FK_8c8cee18d1760b3c270ba534330\``);
        await queryRunner.query(`ALTER TABLE \`invitation\` DROP FOREIGN KEY \`FK_9c6c084bcf65973479beb5cd632\``);
        await queryRunner.query(`ALTER TABLE \`invitation\` DROP FOREIGN KEY \`FK_4becefb4eb12f57d8a578d83946\``);
        await queryRunner.query(`ALTER TABLE \`invitation\` DROP FOREIGN KEY \`FK_3e56c55dc439399e7bb80ca3147\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_ce8f24979af169c6cd19cc94e52\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_7384988f7eeb777e44802a0baca\``);
        await queryRunner.query(`ALTER TABLE \`workspace\` DROP FOREIGN KEY \`FK_51f2194e4a415202512807d2f63\``);
        await queryRunner.query(`DROP INDEX \`IDX_52af573c654667d2833a813566\` ON \`workspace_users_table\``);
        await queryRunner.query(`DROP INDEX \`IDX_8c8cee18d1760b3c270ba53433\` ON \`workspace_users_table\``);
        await queryRunner.query(`DROP TABLE \`workspace_users_table\``);
        await queryRunner.query(`DROP TABLE \`invitation\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`workspace\``);
    }

}

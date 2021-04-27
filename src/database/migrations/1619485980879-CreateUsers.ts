import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619485980879 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "users_id",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}

import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    Generated
} from "typeorm"

@Entity ("users")
class User {
    @PrimaryColumn({type: "uuid", name: "users_id"})
    @Generated("uuid")
    id: string;
    @Column()
    email: string;
    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
    @CreateDateColumn({name: "created_at"})
    createdAt: Date;
}

export { User }
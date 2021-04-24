import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    Generated
} from "typeorm"

@Entity ("settings")
class Setting {
    @PrimaryColumn({type: "uuid", name: "settings_id"})
    @Generated("uuid")
    id: string;
    @Column()
    username: string;
    @Column()
    chat: boolean;
    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
    @CreateDateColumn({name: "created_at"})
    createdAt: Date;
}

export { Setting }
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
    @PrimaryColumn({type: "uuid"})
    @Generated("uuid")
    id: string;
    @Column()
    username: string;
    @Column()
    chat: boolean;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;
}

export { Setting }
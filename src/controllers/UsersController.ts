import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(req: Request, res: Response) {
        const { email } = req.body;
        const usersService = new UsersService();
        try {
            const Users = await usersService.create(email);
            return res.json(Users);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

export { UsersController }
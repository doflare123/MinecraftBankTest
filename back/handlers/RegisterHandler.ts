import { Request, Response } from "express";
import Users from "../models/users";
import { hashPass } from "../utils/crypt";


exports.Register = async (req: Request, res: Response) => {
    try {
        const { MinecraftUser } = req.body;

        if (!MinecraftUser?.name || !MinecraftUser?.password) {
            return res.status(400).json({ message: "Неверные данные" });
        }

        let { hash: HashPass, salt: Salt } = await hashPass(MinecraftUser.password);
        try {
            Users.create({
                minecraftName: MinecraftUser.name,
                password: HashPass,
                salt: Salt
            })
        } catch (error) {
            res.status(500).json({message: "При создании аккаунта произошла ошибка"})
        }

        res.status(201).json({ message: "Пользователь зарегистрирован"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
}
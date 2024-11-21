import { Router, Request, Response } from "express";
export const router = Router();

import { pool } from "../db/config";

router.get("/", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).json({ users: result.rows });
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

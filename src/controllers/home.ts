import { Request, Response } from 'express'

export default function home(req:Request, res:Response) {
    return res.json({ message: "Oe mundão" });
}
import { Request, Response, NextFunction } from "express";

export type middlewareType = (
	req: Request,
	res: Response,
	next: NextFunction
) => void;

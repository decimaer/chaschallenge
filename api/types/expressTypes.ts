import { Request, Response, NextFunction } from 'express';
import { UserDocument } from './mongooseTypes';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
   decodedToken?: jwt.JwtPayload;
   /* 	decodedToken?: {
		id: string;
		iat: number;
		exp: number;
	}; */
   user?: UserDocument;
}

export type middlewareType = (
   req: CustomRequest,
   res: Response,
   next: NextFunction
) => void;

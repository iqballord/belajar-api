import express from 'express';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      shhh_secret?: string;
      user: JwtPayload | string;
    }
  }
}

import { RequestHandler } from "express";

export const validate: RequestHandler = (req, res, next) => {
  next()
}

export const authorize: RequestHandler = (req, res, next) => {
  next()
}
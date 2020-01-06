import { RequestHandler } from "express";

export const validar: RequestHandler = (req, res, next) => {
  next()
}

export const autorizar: RequestHandler = (req, res, next) => {
  next()
}
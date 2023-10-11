import { Request, Response } from 'express';
import User from '../models/User';
import { JsonStatus } from '../utils/json-status';

export async function getAllUsers(request: Request, response: Response) {
  try {
    const users = await User.find();
    response.status(200).json({
      status: JsonStatus.SUCCESS,
      results: users.length,
      data: users,
    });
  } catch (error) {
    response.status(500).json({
      status: JsonStatus.FAILURE,
      message: 'Something went wrong',
    });
  }
}

import { Request, Response } from 'express';
import { StudentService } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentService.createStudetInDB(student);
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
};

import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studenData: TStudent) => {
  const userData: Partial<TUser> = {};

  // If password is not given, use default password
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  userData.id = '2030100001';

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studenData.id = newUser.id;
    studenData.user = newUser._id;
    const newStudent = await Student.create(studenData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};

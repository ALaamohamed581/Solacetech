import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './models/usersInputs';
import { User } from './models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserArgs } from './models/args/userArgs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(createUserData: UserDto) {
    const newUser = await this.userModel.create(createUserData);
    if (!newUser) {
      throw new NotFoundException('faild to create user  ');
    }
    return newUser;
  }
  async edit(id: string, editData: UserDto) {
    const updatedUSer = await this.userModel.findByIdAndUpdate(id, editData, {
      new: true,
    });
    if (!updatedUSer) {
      throw new NotFoundException('User not found');
    }
    return updatedUSer;
  }
  getUserArgs(id: UserArgs) {
    const user = this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

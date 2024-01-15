import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository:Repository<User>,
  ){}
  
  
  async create(createUserDto: CreateUserDto) {
    console.log("hello");
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  
    // return this.userData;
  }

  findOne(id: number) {
    
    // var x = this.userData.find(x=>x.id==id);
    // return x;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
  //   var x = this.userData.find(x=>x.id==id);
  
  //   if (x) {
  //     x.name = updateUserDto.name;
  //     x.password=updateUserDto.password;
  //     return `user with ${id} info updated`;
  // }
  // else{
  //   return `user with ${id} not found`;
  // }
};


  remove(id: number) {
  // var x = this.userData.findIndex(x=>x.id==id);
 
  // if(x!=-1)
  //  {
  //     this.userData.splice(x,1);
  //     return `This action removes a #${id} user`;1
  //  }
  //  return `user #${id} not found`

   
};

};
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reason } from './entities/reason.entity';
import { CreateReasonDto } from './dto/create-reason.dto';
import { UpdateReasonDto } from './dto/update-reason.dto';

@Injectable()
export class ReasonsService {
 constructor(
         @Inject('TYPE_REPOSITORY')
         private reasonRepo: Repository<Reason>,
     ) { }

  create(dto: CreateReasonDto) {
    const reason = this.reasonRepo.create(dto);
    return this.reasonRepo.save(reason);
  }

  findAll() {
    return this.reasonRepo.find();
  }

  findOne(id: number) {
    return this.reasonRepo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateReasonDto) {
    return this.reasonRepo.update(id, dto);
  }

  remove(id: number) {
    return this.reasonRepo.delete(id);
  }
}

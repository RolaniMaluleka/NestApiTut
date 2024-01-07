import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
// import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  private products: Product[] = []; 

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto)
    return createProductDto;
    
  }

  findAll() {
    return [...this.products];
  }

  findOne(id: number) {
    return `${id}`;
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

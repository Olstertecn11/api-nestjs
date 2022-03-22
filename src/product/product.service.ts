import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductoDTO } from './dto/product.dto';

@Injectable()
export class ProductService { 
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>)    {}

    async getAllProducts(): Promise<Product[]>{
	const data = await this.productModel.find();
	return data;
    }

    async createProduct(new_product: CreateProductoDTO): Promise<Product>
    {
	const product = new this.productModel(new_product);
	return product.save();
    }

    async getProduct(ID: string): Promise<Product>
    {
	const product = await this.productModel.findById(ID);
	return product;
    }

    async deleteProduct(ID: string): Promise<any>
    {
	const deletedProduct = await this.productModel.findOneAndDelete({ID});
	return deletedProduct;
    }

    async updateProduct(new_version: CreateProductoDTO, ID:string): Promise<Product>
    {
	const updatedProduct = await this.productModel
	    .findOneAndUpdate({ID}, new_version, {new: true});
	return updatedProduct;
    }
}





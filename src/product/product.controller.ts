import 
    { 
	Controller,
	Post,
	Res,
	HttpStatus,
	Body,
	Get,
	Param,
	NotFoundException,
	Delete,
	Query,
	Put
    } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductoDTO, CreateProductoDTO } from './dto/product.dto';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('/')
    async getProducts(@Res() res: any){
	const products = await this.productService.getAllProducts();
	return res.status(HttpStatus.OK).json(products);
    }

    @Put('/create')
    async create(@Res() res, @Body() newProd: CreateProductoDTO){
	const product = await this.productService.createProduct(newProd);
	return res.status(HttpStatus.OK).json({message: 'created'});
    }
}








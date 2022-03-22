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
import { CreateProductoDTO } from './dto/product.dto';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('/')
    getMessage(@Res() res: any){
	return res.status(HttpStatus.OK).json("Hola jeje");
    }

}








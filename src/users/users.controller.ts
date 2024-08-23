import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        // return this.usersService.findAll(role)
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return { id }
    }

    @Post()
    create(@Body() user: {name: string, email: string, role:'INTERN' | 'ADMIN' | 'ENGINEER'}){
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return {id, ...userUpdate}
    }
    
    @Delete(':id')
    delete(@Param('id') id: string){
        return { id }
    }
    
}

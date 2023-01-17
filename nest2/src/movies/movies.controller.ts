import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return movies";
    }

    /** search가 id보다 밑이면 id로 판별됨. */
    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `This will return movie with the id: ${movieId}`
    }

    @Post()
    create(@Body() movieData) {
        let mention = '';
        
        mention = `This will create a movie \ 
        Made By: ${movieData.director} \
        Movie Name: ${movieData.name}`;
        
        return mention;
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}

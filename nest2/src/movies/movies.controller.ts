import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAll(): Movie[]{
        return this.movieService.getAll();
    }

    /** search가 id보다 밑이면 id로 판별됨. */
    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string): Movie{
        return this.movieService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData) {
        // let mention = '';
        
        // mention = `This will create a movie \ 
        // Made By: ${movieData.director} \
        // Movie Name: ${movieData.name}`;
        
        // return mention;
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}

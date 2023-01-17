import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly movieService;
    constructor(movieService: MoviesService);
    getAll(): Movie[];
    search(searchingYear: string): string;
    getOne(movieId: string): Movie;
    create(movieData: any): void;
    remove(movieId: string): boolean;
    patch(movieId: string, updateData: any): any;
}

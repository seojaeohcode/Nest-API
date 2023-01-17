export declare class MoviesController {
    getAll(): string;
    search(searchingYear: string): string;
    getOne(movieId: string): string;
    create(movieData: any): string;
    remove(movieId: string): string;
    patch(movieId: string, updateData: any): any;
}

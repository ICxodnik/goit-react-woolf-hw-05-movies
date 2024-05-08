import axios from "axios";

const filmFetcher = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZThjMTU4ZjgyYWIxNTYyZjFiZjZjNDU3OTU0M2M5MyIsInN1YiI6IjY2MzY3OTJkYzM5MjY2MDEyNjZlZTk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7cJeKzFI5ktXMflbsHwvvJwQAEggGTnSKeqO30xvww'
    }
});

export async function getTrending() {
    const response = await filmFetcher.get('trending/all/day');
    console.log(response);
    return response.data.results;
}

export async function getMovie(searchValue, page) {
    const response = await filmFetcher.get('search/movie', {
        params: {
            query: searchValue,
            page,
        }
    });
    console.log(response);
    return response.data.results;;
}

export async function getMovieDetails(id) {
    const response = await filmFetcher.get('/movie/?movie_id', {
        params: {
            movie_id: id,
        }
    });
    console.log(response);
    return response;
}

export async function getMovieCredits(id) {
    const response = await filmFetcher.get('/movie/?movie_id/credits', {
        params: {
            movie_id: id,
        }
    });
    console.log(response);
    return response;
}

export async function getMovieReviews(id) {
    const response = await filmFetcher.get('/movie/?movie_id/reviews', {
        params: {
            movie_id: id,
        }
    });
    console.log(response);
    return response;
}
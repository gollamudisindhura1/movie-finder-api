require ("dotenv").config()
const omdbClient = require ("../services/api-client")


//Get/api/search?title=batman

async function searchMovies(req, res) {
    try{

        const searchTerm = req.query.title;

        if(!searchTerm){
            return res.status(400).json({error:"Title query parameter is required"})
        }
        const response = await omdbClient.get("/",{
            params:{
                s: searchTerm,
                apiKey: process.env.OMDB_API_KEY
            }
        })
        res.json(response.data)

    }catch(error){
        console.error("Error searching movies:", error.message);
        res.status(500).json({ error: "Failed to search movies" });

    }
}

// GET /api/movies/:id

async function getMovieDetails(req, res) {
    try{

        const movieId = req.params.movieId
        const response = await omdbClient.get("/", {
            params: {
                i: movieId,
                apiKey: process.env.OMDB_API_KEY
            }
                
        })
        res.json(response.data)


    }catch(error){
        console.error("Error fetching movie details:", error.message);
        res.status(500).json({ error: "Failed to display movie details" });

    }
    
}

module.exports = {
    searchMovies,
    getMovieDetails
}
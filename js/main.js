$(document).ready(function(){
    $('#searchForm').on('submit', function(e){
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s='+searchText)
        .then(function(response){
            console.log(response);
            let movies = response.data.Search;
            let output = "";
            $.each(movies, (index, function(movie){
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                            <a onclick="movieSelected('${movie.imbdID}')" class="btn btn-primary" href="#">Movie Details</a>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-3"></div>
                `
            }))
        })
        .catch(function(err){
            console.log(err);
        })
}
import React from "react";

const MovieList =(props) => {
    
    // function handleClick(event){
    //     //console.log("Buton çalıştı.");
    //     console.log(event.pageX);
    // }

        return (
            <div className="row">

                {props.movies.map((movie) => (

                    <div className="col-lg-3 key" key={movie.id}> 
                        <div className="card nb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={event => props.deleteMovieprop(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h3><span className="bagde badge-info">{movie.rating}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>

                )

                )}
            </div>
        )
    
}
export default MovieList;
//key kullanmak zorundayız çünkü reactın map kullanırken elementleri birbirinden ayırması lazım.
//handleClick metoduna () koymadık çünkü istediğimiz zaman çalışmasını istiyoruz.
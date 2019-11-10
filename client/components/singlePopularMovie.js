import React from 'react'
import {Link} from 'react-router-dom'

export default function SinglePopularMovie(props) {
  return (
    <ul>
      <div className="contents">
        {props.popular.map(movie => (
          <li key={movie.id} className="childer">
            <div className="single-movie">
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                    className="poster"
                  />
                </Link>
              </div>
              <div className="pop-title">{`${
                movie.title
              } (${movie.release_date.slice(0, 4)})`}</div>

              <div className="pop-rankStar">
                <div>
                  <img
                    src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico "
                    height="25px"
                  />
                </div>
                <div>{movie.vote_average}</div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </div>
    </ul>
  )
}

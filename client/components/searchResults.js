import React from 'react'
import {Link} from 'react-router-dom'

export default function searchResults(props) {
  return (
    <React.Fragment>
      {props.popular.map(movie => (
        <tr key={movie.id.toString()}>
          <td>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                className="poster"
              />
            </Link>
          </td>
          <td>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</td>
          <td>
            <img
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico "
              className="rank-star"
            />
            {movie.vote_average}
          </td>
        </tr>
      ))}
    </React.Fragment>
  )
}

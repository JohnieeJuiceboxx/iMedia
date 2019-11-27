import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from './starRating'

function searchResults(props) {
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
          {/* <td>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</td>
          <td> */}
          <td>{`${movie.title} (${
            movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'
          })`}</td>
          <td>
            <img
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico "
              className="rank-star"
            />
            {movie.vote_average}
          </td>
          <td>
            {!props.isLoggedIn ? (
              <Link to="/login">
                <img
                  src="https://www.freeiconspng.com/uploads/white-star-icon-2.png"
                  width="25"
                  alt="Icon Free White Star"
                />
              </Link>
            ) : (
              <StarRating />
            )}
          </td>
        </tr>
      ))}
    </React.Fragment>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}
export default connect(mapState, null)(SearchResults)

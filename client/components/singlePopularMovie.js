import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import StarRating from './starRating'
import {useToasts} from 'react-toast-notifications'

const SinglePopularMovie = props => {
  const {addToast} = useToasts()

  const notify = () => {
    addToast('Login or Sign Up', {
      appearance: 'error',
      autoDismiss: true,
      autoDismissTimeout: 2500
    })
  }
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
          <td>
            {!props.isLoggedIn ? (
              <img
                src="https://www.freeiconspng.com/uploads/white-star-icon-2.png"
                width="25"
                alt="Icon Free White Star"
                onClick={notify}
                className="errorStar"
              />
            ) : (
              <StarRating movieId={movie.id} />
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
export default connect(mapState, null)(SinglePopularMovie)

;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    /***/ './client/components/singlePopularMovie.js':
      /*!*************************************************!*\
  !*** ./client/components/singlePopularMovie.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return SinglePopularMovie
          }
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ './node_modules/react-router-dom/esm/react-router-dom.js'
        )

        function SinglePopularMovie(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'ul',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'contents'
              },
              props.popular.map(function(movie) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'li',
                  {
                    key: movie.id,
                    className: 'childer'
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {
                      className: 'single-movie'
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
                        {
                          to: '/movie/'.concat(movie.id)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'img',
                          {
                            src: 'https://image.tmdb.org/t/p/w92/'.concat(
                              movie.poster_path
                            ),
                            className: 'poster'
                          }
                        )
                      )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        className: 'pop-title'
                      },
                      ''
                        .concat(movie.title, ' (')
                        .concat(movie.release_date.slice(0, 4), ')')
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        className: 'pop-rankStar'
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'img',
                          {
                            src:
                              'http://pngwebicons.com/uploads/star/ico/star_icon5425.ico ',
                            height: '25px'
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        null,
                        movie.vote_average
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'hr',
                    null
                  )
                )
              })
            )
          )
        }

        /***/
      }
  }
])
//# sourceMappingURL=0.bundle.js.map

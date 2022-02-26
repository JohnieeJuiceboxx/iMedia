;(this.webpackJsonpiMedia = this.webpackJsonpiMedia || []).push([
  [0],
  {
    138: function(e, t) {},
    141: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        s = a(20),
        c = a.n(s),
        i = a(7),
        o = a(6),
        l = a(24),
        d = a(12),
        u = Object(d.a)(),
        h = a(28),
        j = a(70),
        p = a(72),
        b = a(71),
        m = a(10),
        v = a(3),
        g = a.n(v),
        O = a(8),
        x = a.n(O),
        f = 'GET_USER',
        k = 'REMOVE_USER',
        w = {},
        y = function(e) {
          return {type: f, user: e}
        },
        N = a(11),
        S = 'TOGGLE_DARK_MODE',
        D = {darkmode: !1},
        I = 'ADD_RATING',
        _ = 'GOT_RATING',
        M = 'UPDATE_RATING',
        R = function(e) {
          return {type: I, rating: e}
        },
        T = function(e) {
          return {type: M, rating: e}
        },
        C = {rating: 0},
        L = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case I:
            case _:
              return Object(N.a)(Object(N.a)({}, e), {}, {rating: t.rating})
            case M:
              var a = t.rating
              return Object(N.a)(Object(N.a)({}, e), {}, {rating: a})
            default:
              return e
          }
        },
        E = Object(h.combineReducers)({
          user: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : w,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case f:
                return t.user
              case k:
                return w
              default:
                return e
            }
          },
          darkMode: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : D,
              t = arguments.length > 1 ? arguments[1] : void 0
            return t.type === S
              ? Object(N.a)(Object(N.a)({}, e), {}, {darkmode: !e.darkmode})
              : e
          },
          ratings: L
        }),
        U = Object(b.composeWithDevTools)(
          Object(h.applyMiddleware)(
            p.a,
            Object(j.createLogger)({collapsed: !0})
          )
        ),
        A = Object(h.createStore)(E, U),
        G = a(16),
        F = a(17),
        W = a(18),
        H = a(19),
        P = a(9),
        V = a(1),
        Y = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            return Object(G.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(F.a)(a, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return Object(V.jsx)('div', {
                    className: 'div-nav',
                    children: Object(V.jsx)('nav', {
                      id: 'navi',
                      children: this.props.isLoggedIn
                        ? Object(V.jsxs)('div', {
                            children: [
                              Object(V.jsxs)(P.a, {
                                to: '/splash',
                                className: 'nav-left',
                                children: [
                                  Object(V.jsx)('div', {
                                    className: 'nav-logo',
                                    children: 'MOVIE'
                                  }),
                                  Object(V.jsx)('div', {
                                    className: 'nav-logo',
                                    children: 'CENTRAL'
                                  })
                                ]
                              }),
                              Object(V.jsx)('div', {
                                className: 'dark-button-def',
                                children: Object(V.jsx)('i', {
                                  className: 'material-icons nav-right',
                                  onClick: function() {
                                    e.props.toggleDarkMode()
                                  },
                                  children: 'brightness_4'
                                })
                              }),
                              Object(V.jsx)('a', {
                                href: '#',
                                className: 'nav-right',
                                onClick: this.props.handleClick,
                                children: 'Logout'
                              })
                            ]
                          })
                        : Object(V.jsxs)('div', {
                            children: [
                              Object(V.jsxs)(P.a, {
                                to: '/splash',
                                className: 'nav-left',
                                children: [
                                  Object(V.jsx)('div', {
                                    className: 'nav-logo',
                                    children: 'MOVIE'
                                  }),
                                  Object(V.jsx)('div', {
                                    className: 'nav-logo',
                                    children: 'CENTRAL'
                                  })
                                ]
                              }),
                              Object(V.jsx)('div', {
                                className: 'dark-button-def',
                                children: Object(V.jsx)('i', {
                                  className: 'material-icons nav-right',
                                  onClick: function() {
                                    e.props.toggleDarkMode()
                                  },
                                  children: 'brightness_4'
                                })
                              }),
                              Object(V.jsx)(P.a, {
                                to: '/login',
                                className: 'nav-right',
                                children: 'Login'
                              }),
                              Object(V.jsx)(P.a, {
                                to: '/signup',
                                className: 'nav-right',
                                children: 'Sign Up'
                              })
                            ]
                          })
                    })
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        J = Object(i.b)(
          function(e) {
            return {isLoggedIn: !!e.user.id}
          },
          function(e) {
            return {
              toggleDarkMode: function() {
                console.log('darkness!'), e({type: S})
              },
              handleClick: function() {
                e(
                  (function() {
                    var e = Object(m.a)(
                      g.a.mark(function e(t) {
                        return g.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    x.a.post('/auth/logout')
                                  )
                                case 3:
                                  t({type: k}), u.push('/login'), (e.next = 10)
                                  break
                                case 7:
                                  ;(e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0)
                                case 10:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        )
                      })
                    )
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })()
                )
              }
            }
          }
        )(Y),
        q = Object(i.b)(function(e) {
          return {email: e.user.email}
        })(function(e) {
          var t = e.email
          return Object(
            V.jsxs
          )('div', {className: 'logged', children: [Object(V.jsxs)('h3', {className: 'welcome', children: ['Welcome, ', t]}), Object(V.jsx)('div', {children: Object(V.jsx)('h4', {children: 'make yourself at home'})}), Object(V.jsx)('div', {className: 'button_cont', id: 'logged-button', align: 'center', children: Object(V.jsx)(P.a, {to: '/splash', className: 'example_a', children: 'S T A R T'})})]})
        }),
        z = function(e) {
          var t = e.name,
            a = e.displayName,
            n = e.handleSubmit,
            r = e.error
          return Object(V.jsxs)('div', {
            className: 'auth-wrapper',
            children: [
              Object(V.jsx)('div', {}),
              Object(V.jsxs)('div', {
                className: 'auth-form',
                children: [
                  Object(V.jsxs)('form', {
                    onSubmit: n,
                    name: t,
                    children: [
                      Object(V.jsxs)('div', {
                        children: [
                          Object(V.jsx)('label', {
                            htmlFor: 'email',
                            children: Object(V.jsx)('small', {
                              children: 'Email'
                            })
                          }),
                          Object(V.jsx)('input', {name: 'email', type: 'text'})
                        ]
                      }),
                      Object(V.jsxs)('div', {
                        children: [
                          Object(V.jsx)('label', {
                            htmlFor: 'password',
                            children: Object(V.jsx)('small', {
                              children: 'Password'
                            })
                          }),
                          Object(V.jsx)('input', {
                            name: 'password',
                            type: 'password'
                          })
                        ]
                      }),
                      Object(V.jsx)('div', {
                        children: Object(V.jsx)('button', {
                          type: 'submit',
                          className: 'submit-button',
                          children: a
                        })
                      }),
                      r &&
                        r.response &&
                        Object(V.jsxs)('div', {
                          children: [' ', r.response.data, ' ']
                        })
                    ]
                  }),
                  Object(V.jsx)('div', {
                    children: Object(V.jsx)('a', {
                      href: '/auth/google',
                      children: Object(V.jsx)('img', {
                        src: 'googleLogin.png',
                        id: 'google-button',
                        alt: 'google login button'
                      })
                    })
                  })
                ]
              }),
              Object(V.jsx)('div', {})
            ]
          })
        },
        B = function(e) {
          return {
            handleSubmit: function(t) {
              t.preventDefault()
              var a = t.target.name,
                n = t.target.email.value,
                r = t.target.password.value
              e(
                (function(e, t, a) {
                  return (function() {
                    var n = Object(m.a)(
                      g.a.mark(function n(r) {
                        var s
                        return g.a.wrap(
                          function(n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (n.prev = 0),
                                    (n.next = 3),
                                    x.a.post('/auth/'.concat(a), {
                                      email: e,
                                      password: t
                                    })
                                  )
                                case 3:
                                  ;(s = n.sent), (n.next = 9)
                                  break
                                case 6:
                                  return (
                                    (n.prev = 6),
                                    (n.t0 = n.catch(0)),
                                    n.abrupt('return', r(y({error: n.t0})))
                                  )
                                case 9:
                                  try {
                                    r(y(s.data)), u.push('/home')
                                  } catch (c) {
                                    console.error(c)
                                  }
                                case 10:
                                case 'end':
                                  return n.stop()
                              }
                          },
                          n,
                          null,
                          [[0, 6]]
                        )
                      })
                    )
                    return function(e) {
                      return n.apply(this, arguments)
                    }
                  })()
                })(n, r, a)
              )
            }
          }
        },
        K = Object(i.b)(function(e) {
          return {name: 'login', displayName: 'Login', error: e.user.error}
        }, B)(z),
        Q = Object(i.b)(function(e) {
          return {name: 'signup', displayName: 'Sign Up', error: e.user.error}
        }, B)(z),
        X = a(25),
        Z = a(21),
        $ = a(74),
        ee = a.n($),
        te = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            var e
            return (
              Object(G.a)(this, a),
              ((e = t.call(this)).state = {showRank: !1, rating: 0}),
              (e.showStars = e.showStars.bind(Object(Z.a)(e))),
              (e.onStarClick = e.onStarClick.bind(Object(Z.a)(e))),
              e
            )
          }
          return (
            Object(F.a)(a, [
              {
                key: 'componentDidMount',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e() {
                      var t = this
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.props.isLoggedIn) {
                                  e.next = 5
                                  break
                                }
                                return (e.next = 3), x.a.get('api/ratings')
                              case 3:
                                e.sent.data.map(function(e) {
                                  if (
                                    t.props.movieId.toString() ===
                                      e.movieId.toString() &&
                                    t.props.user.toString() ===
                                      e.userId.toString()
                                  ) {
                                    var a = e
                                    t.setState({rating: a.rating})
                                  }
                                })
                              case 5:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'showStars',
                value: function() {
                  this.setState({showRank: !this.state.showRank})
                }
              },
              {
                key: 'onStarClick',
                value: function(e, t, a) {
                  this.setState({showRank: !this.state.showRank, rating: e})
                  var n = {
                    movieId: this.props.movieId,
                    rating: e,
                    userId: this.props.user
                  }
                  this.state.rating > 0
                    ? this.props.updateRating(n)
                    : this.props.addRating(n),
                    this.props.notify()
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.rating
                  return Object(V.jsxs)('div', {
                    children: [
                      Object(V.jsxs)('div', {
                        children: [
                          this.state.rating > 0
                            ? Object(V.jsx)('img', {
                                src:
                                  'http://pngwebicons.com/uploads/star/ico/star_icon5425.ico ',
                                className: 'rank-star',
                                width: 25,
                                onClick: function() {
                                  return e.showStars()
                                },
                                style: {
                                  display: this.state.showRank
                                    ? 'none'
                                    : 'inline'
                                }
                              })
                            : Object(V.jsx)('img', {
                                src:
                                  'https://www.freeiconspng.com/uploads/white-star-icon-2.png',
                                className: 'rank-star',
                                width: 25,
                                onClick: function() {
                                  return e.showStars()
                                },
                                alt: 'Icon Free White Star',
                                style: {
                                  display: this.state.showRank
                                    ? 'none'
                                    : 'block'
                                }
                              }),
                          this.state.rating > 0 ? this.state.rating : null
                        ]
                      }),
                      Object(V.jsx)('div', {
                        className: 'rank',
                        style: {
                          display: this.state.showRank ? 'block' : 'none'
                        },
                        children: Object(V.jsx)(ee.a, {
                          name: 'rate1',
                          starCount: 10,
                          value: t,
                          onStarClick: this.onStarClick
                        })
                      })
                    ]
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        ae = Object(i.b)(
          function(e) {
            return {user: e.user.id, isLoggedIn: !!e.user.id}
          },
          function(e) {
            return {
              addRating: function(t) {
                return e(
                  (function(e) {
                    return (function() {
                      var t = Object(m.a)(
                        g.a.mark(function t(a) {
                          var n, r
                          return g.a.wrap(
                            function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      (t.next = 3),
                                      x.a.post('/api/ratings', e)
                                    )
                                  case 3:
                                    ;(n = t.sent),
                                      (r = n.data),
                                      a(R(r)),
                                      (t.next = 11)
                                    break
                                  case 8:
                                    ;(t.prev = 8),
                                      (t.t0 = t.catch(0)),
                                      console.error(t.t0)
                                  case 11:
                                  case 'end':
                                    return t.stop()
                                }
                            },
                            t,
                            null,
                            [[0, 8]]
                          )
                        })
                      )
                      return function(e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  })(t)
                )
              },
              fetchRating: function() {
                return e(
                  (function() {
                    var e = Object(m.a)(
                      g.a.mark(function e(t) {
                        var a, n
                        return g.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    x.a.get('/api/ratings/')
                                  )
                                case 3:
                                  ;(a = e.sent),
                                    (n = a.data),
                                    t({type: _, rating: n}),
                                    (e.next = 11)
                                  break
                                case 8:
                                  ;(e.prev = 8),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0)
                                case 11:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        )
                      })
                    )
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })()
                )
              },
              updateRating: function(t) {
                return e(
                  ((a = t),
                  (function() {
                    var e = Object(m.a)(
                      g.a.mark(function e(t) {
                        return g.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    x.a.put('/api/ratings', a)
                                  )
                                case 3:
                                  t(T(a)), (e.next = 9)
                                  break
                                case 6:
                                  ;(e.prev = 6),
                                    (e.t0 = e.catch(0)),
                                    console.error(e.t0)
                                case 9:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 6]]
                        )
                      })
                    )
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })())
                )
                var a
              }
            }
          }
        )(te),
        ne = Object(i.b)(function(e) {
          return {isLoggedIn: !!e.user.id}
        }, null)(function(e) {
          var t = Object(l.useToasts)().addToast,
            a = function() {
              e.isLoggedIn
                ? t('Rating Saved!', {
                    appearance: 'success',
                    autoDismiss: !0,
                    autoDismissTimeout: 2500
                  })
                : t('Login or Sign Up', {
                    appearance: 'error',
                    autoDismiss: !0,
                    autoDismissTimeout: 2500
                  })
            }
          return Object(V.jsx)(r.a.Fragment, {
            children: e.popular.map(function(t) {
              return Object(V.jsxs)(
                'tr',
                {
                  children: [
                    Object(V.jsx)('td', {
                      children: Object(V.jsx)(P.a, {
                        to: '/movie/'.concat(t.id),
                        children: Object(V.jsx)('img', {
                          src: 'https://image.tmdb.org/t/p/w92/'.concat(
                            t.poster_path
                          ),
                          className: 'poster'
                        })
                      })
                    }),
                    Object(V.jsx)('td', {
                      children: ''
                        .concat(t.title, ' (')
                        .concat(t.release_date.slice(0, 4), ')')
                    }),
                    Object(V.jsxs)('td', {
                      children: [
                        Object(V.jsx)('img', {
                          src:
                            'http://pngwebicons.com/uploads/star/ico/star_icon5425.ico ',
                          className: 'rank-star'
                        }),
                        t.vote_average
                      ]
                    }),
                    Object(V.jsx)('td', {
                      children: e.isLoggedIn
                        ? Object(V.jsx)(ae, {
                            movieId: t.id,
                            notify: function() {
                              return a()
                            }
                          })
                        : Object(V.jsx)('img', {
                            src:
                              'https://www.freeiconspng.com/uploads/white-star-icon-2.png',
                            alt: 'Icon Free White Star',
                            onClick: a,
                            className: 'errorStar'
                          })
                    })
                  ]
                },
                t.id.toString()
              )
            })
          })
        })
      var re = Object(i.b)(function(e) {
          return {isLoggedIn: !!e.user.id}
        }, null)(function(e) {
          var t = Object(l.useToasts)().addToast,
            a = function() {
              e.isLoggedIn
                ? t('Rating Saved!', {
                    appearance: 'success',
                    autoDismiss: !0,
                    autoDismissTimeout: 2500
                  })
                : t('Login or Sign Up', {
                    appearance: 'error',
                    autoDismiss: !0,
                    autoDismissTimeout: 2500
                  })
            }
          return Object(V.jsx)(r.a.Fragment, {
            children: e.popular.map(function(t) {
              return Object(V.jsxs)(
                'tr',
                {
                  children: [
                    Object(V.jsx)('td', {
                      children: Object(V.jsx)(P.a, {
                        to: '/movie/'.concat(t.id),
                        children: Object(V.jsx)('img', {
                          src: 'https://image.tmdb.org/t/p/w92/'.concat(
                            t.poster_path
                          ),
                          className: 'poster'
                        })
                      })
                    }),
                    Object(V.jsx)('td', {
                      children: ''
                        .concat(t.title, ' (')
                        .concat(
                          t.release_date ? t.release_date.slice(0, 4) : 'N/A',
                          ')'
                        )
                    }),
                    Object(V.jsxs)('td', {
                      children: [
                        Object(V.jsx)('img', {
                          src:
                            'http://pngwebicons.com/uploads/star/ico/star_icon5425.ico ',
                          className: 'rank-star'
                        }),
                        t.vote_average
                      ]
                    }),
                    Object(V.jsx)('td', {
                      children: e.isLoggedIn
                        ? Object(V.jsx)(ae, {
                            movieId: t.id,
                            notify: function() {
                              return a()
                            }
                          })
                        : Object(V.jsx)('img', {
                            src:
                              'https://www.freeiconspng.com/uploads/white-star-icon-2.png',
                            alt: 'Icon Free White Star',
                            onClick: a,
                            className: 'errorStar'
                          })
                    })
                  ]
                },
                t.id.toString()
              )
            })
          })
        }),
        se = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            var e
            return (
              Object(G.a)(this, a),
              ((e = t.call(this)).state = {popular: [], search: []}),
              (e.searchMovie = e.searchMovie.bind(Object(Z.a)(e))),
              (e.searchMovieHandler = e.searchMovieHandler.bind(
                Object(Z.a)(e)
              )),
              e
            )
          }
          return (
            Object(F.a)(a, [
              {
                key: 'componentDidMount',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e() {
                      var t
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/popular?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1'
                                  )
                                )
                              case 2:
                                ;(t = e.sent),
                                  this.setState({
                                    popular: Object(X.a)(t.data.results)
                                  })
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'searchMovie',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e(t) {
                      var a
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1&include_adult=false&query=' +
                                      t
                                  )
                                )
                              case 2:
                                ;(a = e.sent),
                                  this.setState({
                                    search: Object(X.a)(a.data.results)
                                  })
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'searchMovieHandler',
                value: function(e) {
                  var t = e.target.value
                  this.searchMovie(t)
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = new Date().getFullYear()
                  return Object(V.jsxs)('div', {
                    className: 'wrapper',
                    children: [
                      Object(V.jsxs)('div', {
                        className: 'pop',
                        children: [
                          0 === this.state.search.length
                            ? Object(V.jsxs)('h1', {
                                children: ['Popular Movies ', e]
                              })
                            : Object(V.jsx)('h1', {children: 'Search Results'}),
                          Object(V.jsx)('h6', {
                            children: 'As determined by The Movie Database'
                          })
                        ]
                      }),
                      Object(V.jsxs)('div', {
                        id: 'search_input',
                        children: [
                          Object(V.jsx)('i', {
                            className: 'material-icons prefix',
                            id: 'magnifying',
                            children: 'search'
                          }),
                          Object(V.jsx)('input', {
                            id: 'icon_prefix',
                            type: 'text',
                            placeholder: 'Search a movie...',
                            onChange: this.searchMovieHandler
                          })
                        ]
                      }),
                      Object(V.jsxs)('table', {
                        className: 'striped',
                        children: [
                          Object(V.jsx)('thead', {
                            children: Object(V.jsxs)('tr', {
                              children: [
                                Object(V.jsx)('th', {}),
                                Object(V.jsx)('th', {children: 'TITLE'}),
                                Object(V.jsx)('th', {children: 'RATING'}),
                                Object(V.jsx)('th', {children: 'Your Rating'})
                              ]
                            })
                          }),
                          Object(V.jsx)('tbody', {
                            children:
                              0 === this.state.search.length
                                ? Object(V.jsx)(ne, {
                                    popular: this.state.popular
                                  })
                                : Object(V.jsx)(re, {
                                    popular: this.state.search
                                  })
                          })
                        ]
                      })
                    ]
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        ce = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            var e
            return (
              Object(G.a)(this, a),
              ((e = t.call(this)).state = {movieDetails: {}, similar: []}),
              e
            )
          }
          return (
            Object(F.a)(a, [
              {
                key: 'componentDidMount',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e() {
                      var t, a, n
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.props.match.params.movieId),
                                  (e.next = 3),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/'.concat(
                                      t,
                                      '?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US\n    '
                                    )
                                  )
                                )
                              case 3:
                                return (
                                  (a = e.sent),
                                  (e.next = 6),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/'.concat(
                                      t,
                                      '/recommendations?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1\n    '
                                    )
                                  )
                                )
                              case 6:
                                ;(n = e.sent),
                                  this.setState({
                                    movieDetails: Object(N.a)({}, a.data),
                                    similar: Object(X.a)(n.data.results)
                                  })
                              case 8:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'componentDidUpdate',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e(t, a) {
                      var n, r, s
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.props.match.params.movieId),
                                  a.movieDetails.id === Number(n))
                                ) {
                                  e.next = 9
                                  break
                                }
                                return (
                                  (e.next = 4),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/'.concat(
                                      n,
                                      '?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US\n      '
                                    )
                                  )
                                )
                              case 4:
                                return (
                                  (r = e.sent),
                                  (e.next = 7),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/'.concat(
                                      n,
                                      '/recommendations?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1\n      '
                                    )
                                  )
                                )
                              case 7:
                                ;(s = e.sent),
                                  this.setState({
                                    movieDetails: Object(N.a)({}, r.data),
                                    similar: Object(X.a)(s.data.results)
                                  })
                              case 9:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function(t, a) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'updater',
                value: (function() {
                  var e = Object(m.a)(
                    g.a.mark(function e(t) {
                      var a
                      return g.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  x.a.get(
                                    'https://api.themoviedb.org/3/movie/'.concat(
                                      t,
                                      '?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US\n    '
                                    )
                                  )
                                )
                              case 2:
                                ;(a = e.sent),
                                  this.setState({
                                    movieDetails: Object(N.a)({}, a.data)
                                  })
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'render',
                value: function() {
                  return Object(V.jsxs)('div', {
                    className: 'wrapper',
                    children: [
                      Object(V.jsx)('h1', {
                        className: 'detail-title',
                        children: ''.concat(this.state.movieDetails.title, ' ')
                      }),
                      Object(V.jsx)('h6', {
                        children: this.state.movieDetails.tagline
                          ? "'".concat(this.state.movieDetails.tagline, "'")
                          : null
                      }),
                      Object(V.jsxs)('div', {
                        className: 'single-detail',
                        children: [
                          Object(V.jsx)('div', {
                            children: Object(V.jsx)(P.a, {
                              to: '/popular',
                              children: Object(V.jsx)('img', {
                                src: 'https://image.tmdb.org/t/p/w300/'.concat(
                                  this.state.movieDetails.poster_path
                                ),
                                className: 'poster'
                              })
                            })
                          }),
                          Object(V.jsxs)('div', {
                            className: 'right-details z-depth-2',
                            children: [
                              Object(V.jsxs)('div', {
                                children: [
                                  Object(V.jsx)('strong', {
                                    children: 'Release Date: '
                                  }),
                                  this.state.movieDetails.release_date
                                ]
                              }),
                              Object(V.jsxs)('div', {
                                children: [
                                  Object(V.jsx)('strong', {
                                    children: 'Runtime: '
                                  }),
                                  this.state.movieDetails.runtime,
                                  ' min'
                                ]
                              }),
                              Object(V.jsxs)('div', {
                                children: [
                                  Object(V.jsx)('p', {
                                    children: this.state.movieDetails.overview
                                  }),
                                  Object(V.jsxs)('div', {
                                    className: 'also-like',
                                    children: [
                                      Object(V.jsx)('p', {
                                        className: 'padding-left',
                                        children: 'You might also like:'
                                      }),
                                      Object(V.jsx)('div', {
                                        className: 'recommended',
                                        children: this.state.similar
                                          .slice(0, 7)
                                          .map(function(e) {
                                            return Object(
                                              V.jsx
                                            )('div', {children: Object(V.jsx)(P.a, {to: '/movie/'.concat(e.id), children: Object(V.jsx)('img', {src: 'https://image.tmdb.org/t/p/w45/'.concat(e.poster_path), className: 'poster'})})}, e.id.toString())
                                          })
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        ie = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            return Object(G.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(F.a)(a, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.darkMode.darkmode !== this.props.darkMode.darkmode &&
                    this.spiderSelector()
                }
              },
              {
                key: 'spiderSelector',
                value: function() {
                  return this.props.darkMode.darkmode
                    ? Object(V.jsx)('img', {
                        src: '/black-suit-spider-man.png',
                        className: 'spidey2'
                      })
                    : Object(V.jsx)('img', {
                        src: '/spidey.png',
                        className: 'spidey'
                      })
                }
              },
              {
                key: 'render',
                value: function() {
                  return Object(V.jsxs)('div', {
                    className: 'splash',
                    children: [
                      Object(V.jsxs)('div', {
                        className: 'splash-left',
                        children: [
                          Object(V.jsx)('div', {
                            className: 'anton-text intro-text',
                            children: 'INTRO'
                          }),
                          Object(V.jsx)('div', {
                            className: 'anton-text intro-text',
                            children: 'DUCING'
                          }),
                          Object(V.jsx)('div', {
                            id: 'black-text',
                            className: 'anton-text',
                            children: 'MOVIE'
                          }),
                          Object(V.jsx)('div', {
                            id: 'black-text',
                            className: 'anton-text',
                            children: 'CENTRAL'
                          }),
                          Object(V.jsx)('div', {
                            className: 'overview',
                            children:
                              'The leading movie website for the lastest films.'
                          }),
                          Object(V.jsx)('div', {
                            className: 'button_cont',
                            align: 'center',
                            children: Object(V.jsx)(P.a, {
                              to: '/popular',
                              className: 'example_a',
                              children: 'E N T E R'
                            })
                          })
                        ]
                      }),
                      Object(V.jsx)('div', {
                        className: 'spidey-div',
                        children: this.spiderSelector()
                      })
                    ]
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        oe = Object(i.b)(function(e) {
          return {darkMode: e.darkMode}
        })(ie),
        le = (function(e) {
          Object(W.a)(a, e)
          var t = Object(H.a)(a)
          function a() {
            return Object(G.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(F.a)(a, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.loadInitialData()
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.isLoggedIn
                  return Object(V.jsxs)(o.c, {
                    children: [
                      Object(V.jsx)(o.a, {
                        exact: !0,
                        path: '/movie/:movieId',
                        component: ce
                      }),
                      Object(V.jsx)(o.a, {path: '/splash', component: oe}),
                      Object(V.jsx)(o.a, {path: '/login', component: K}),
                      Object(V.jsx)(o.a, {path: '/signup', component: Q}),
                      Object(V.jsx)(o.a, {path: '/popular', component: se}),
                      e &&
                        Object(V.jsx)(o.c, {
                          children: Object(V.jsx)(o.a, {
                            path: '/home',
                            component: q
                          })
                        }),
                      Object(V.jsx)(o.a, {component: oe})
                    ]
                  })
                }
              }
            ]),
            a
          )
        })(n.Component),
        de = Object(o.f)(
          Object(i.b)(
            function(e) {
              return {isLoggedIn: !!e.user.id}
            },
            function(e) {
              return {
                loadInitialData: function() {
                  e(
                    (function() {
                      var e = Object(m.a)(
                        g.a.mark(function e(t) {
                          var a
                          return g.a.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      x.a.get('/auth/me')
                                    )
                                  case 3:
                                    ;(a = e.sent),
                                      t(y(a.data || w)),
                                      (e.next = 10)
                                    break
                                  case 7:
                                    ;(e.prev = 7),
                                      (e.t0 = e.catch(0)),
                                      console.error(e.t0)
                                  case 10:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 7]]
                          )
                        })
                      )
                      return function(t) {
                        return e.apply(this, arguments)
                      }
                    })()
                  )
                }
              }
            }
          )(le)
        ),
        ue = Object(i.b)(function(e) {
          return {darkMode: e.darkMode}
        })(function(e) {
          return (
            console.log(e.darkMode.darkmode),
            Object(V.jsxs)('div', {
              id: 'app-main',
              className: e.darkMode.darkmode ? 'darkmode' : 'lightmode',
              children: [Object(V.jsx)(J, {}), Object(V.jsx)(de, {})]
            })
          )
        }),
        he = a(75),
        je = a.n(he)()(window.location.origin)
      je.on('connect', function() {
        console.log('Connected!')
      })
      c.a.render(
        Object(V.jsx)(i.a, {
          store: A,
          children: Object(V.jsx)(o.b, {
            history: u,
            children: Object(V.jsx)(l.ToastProvider, {
              children: Object(V.jsx)(ue, {})
            })
          })
        }),
        document.getElementById('app')
      )
    }
  },
  [[141, 1, 2]]
])
//# sourceMappingURL=main.c2a5a938.chunk.js.map

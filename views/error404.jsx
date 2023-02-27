const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src='./images/error404.jpg' alt='Error 404 Chain Image' />
                <div>
                  Photo by <a href='https://unsplash.com/@zulmaury'>Zulmaury Saavedra</a> on <a href='https://unsplash.com/photos/zh0J32MrJfA'>Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = error404

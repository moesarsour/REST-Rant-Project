const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/salmon-poke-bowl.jpg" alt="Salmon Poke Bowl" />
              <div>
                  Photo by <a href="https://unsplash.com/@jonathanborba">Johnathan Borba</a> on <a href="https://unsplash.com/photos/G6wx5j5-dR8">Unsplash</a>
                </div>
                </div>
              <a href="/places">
                <button className="bttn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }  

module.exports = home

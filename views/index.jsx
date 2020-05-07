const React = require("react");

class Index extends React.Component {
  render() {
    const { users } = this.props;
    console.log(this.props);
    console.log("somethings");

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          {/* Main StyleSheet */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* FontAwesome */}

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <title>Index Page</title>
        </head>
        <body>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="http://localhost:3001/users">
                  <i className="fas fa-home fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3001/users/new">
                  <i className="fas fa-plus fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="http://www.bruno-dasilva.com/">
                  <i className="fas fa-cookie-bite fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="container">
            {users.map((user, index) => {
              return (
                <div class="demo__div people">
                  <div class="people__div people__div--img">
                    <img
                      src="https://source.unsplash.com/mEZ3PoFGs_k"
                      alt={user.firstName}
                      class="people__img"
                    />
                  </div>
                  <div class="people__div people__div--info">
                    <h2 class="people__name">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p class="people__desc">
                      {user.description} Time waits for no man. Unless that man
                      is Chuck Norris. When Chuck Norris jumps into a pool, he
                      does not get wet, the water gets Chuck Norris.
                    </p>
                  </div>
                  <div class="people__div people__div--name">
                    <h2 class="people-name">{user.jobTitle}</h2>
                  </div>
                </div>
              );
            })}

            <div></div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;

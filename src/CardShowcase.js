import "./showcase.css";
export default function CardShowCase({ formData }) {
  return (
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp;
                          {formData.fullName}
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">
                        Connect with {formData.fullName.split(" ")[0]}
                      </h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href="https://github.com/adhanji8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href="https://www.twitter.com/bcit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {formData.twitterURL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to {formData.fullName.split(" ")[0]}'s corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">{formData.aboutMe}</div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      <span class="has-dflex-center bs-md" title="CSS">
                        <i class="fab fa-css3-alt"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="HTML">
                        <i class="fab fa-html5"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="JS">
                        <i class="fab fa-js"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="Sass">
                        <i class="fab fa-sass"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="Git">
                        <i class="fab fa-git-alt"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="Gulp">
                        <i class="fab fa-gulp"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="Node JS">
                        <i class="fab fa-node-js"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="NPM">
                        <i class="fab fa-npm"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="PHP">
                        <i class="fab fa-php"></i>
                      </span>
                      <span class="has-dflex-center bs-md" title="React">
                        <i class="fab fa-react"></i>
                      </span>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                      {/* <ol>
                        <li>
                          <p>
                            <b>The Lord of the Rings</b>&nbsp;- J. R. R. Tolkien
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Foundation series</b>&nbsp;- Isaac Asimov
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Cracking the Coding Interview</b>&nbsp;- Gayle
                            Laakmann
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Clean Code</b>&nbsp;- Rob Martin
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>A Brief History of Time</b>&nbsp;- Stephen
                            Hawking
                          </p>
                        </li>
                      </ol> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

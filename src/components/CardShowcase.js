import "../showcase.css";
import BookCoversSearch from "./BookCoversSearch";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faTwitter,
  faCss3,
  faHtml5,
  faJs,
  faGit,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faTerminal,
  faHandPointRight,
  faInfoCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

export default function CardShowCase({ formData }) {
  let firstName = formData.fullName.split(" ")[0];

  return (
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <Profile formData={formData} />

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with {firstName}</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href="https://github.com/adhanji8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGitAlt} size="4x" />
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href={formData.twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="4x" />
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
                      <FontAwesomeIcon icon={faInfoCircle} />
                      &nbsp;Welcome to {formData.fullName.split(" ")[0]}'s
                      corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <FontAwesomeIcon icon={faHandPointRight} />
                      &nbsp;About me
                    </h1>
                    <div class="text">{formData.aboutMe}</div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <FontAwesomeIcon icon={faTerminal} /> &nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      {formData.css ? (
                        <span class="has-dflex-center bs-md" title="CSS">
                          <FontAwesomeIcon icon={faCss3} size="3x" />
                        </span>
                      ) : null}
                      <span class="has-dflex-center bs-md" title="HTML">
                        <FontAwesomeIcon icon={faHtml5} size="3x" />
                      </span>
                      <span class="has-dflex-center bs-md" title="JS">
                        <FontAwesomeIcon icon={faJs} size="3x" />
                      </span>
                      <span class="has-dflex-center bs-md" title="Git">
                        <FontAwesomeIcon icon={faGit} size="3x" />
                      </span>
                      <span class="has-dflex-center bs-md" title="Node JS">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                      </span>
                      <span class="has-dflex-center bs-md" title="React">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                      </span>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <FontAwesomeIcon icon={faBook} />
                      &nbsp;My favorite books
                    </h1>
                    <div class="text">
                      <BookCoversSearch formData={formData} />
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function Profile({ formData }) {
  return (
    <div class="lx-card">
      <div class="lx-row">
        <div class="has-dflex-center bs-md pic">
          <img src="https://github.com/luxonauta.png" alt={formData.fullName} />
        </div>
        <div class="infos">
          <span>
            <FontAwesomeIcon icon={faUserCircle} />
            &nbsp;&nbsp;{formData.fullName}
          </span>
          <span>
            <FontAwesomeIcon icon={faBriefcase} />
            &nbsp;&nbsp;Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
}

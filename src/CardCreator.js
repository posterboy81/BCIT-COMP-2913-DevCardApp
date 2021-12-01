import "./App.css";
// import img1 from "../images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import { useNavigate } from "react-location";

export default function CardCreator({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    setFormData({ ...formData, [e.target.value]: isChecked });
  };

  // const addUser = () => {
  //   let userLength = user.length;
  //   let addId = userLength + 1;
  //   let stringId = addId.toString();

  //   user.push({
  //     id: stringId,
  //     fullName: formData.fullName,
  //     aboutMe: formData.aboutMe,
  //     githubUrl: formData.gitURL,
  //     twitterUrl: formData.twitURL,
  //     favoriteBooks: formData.favBook,
  //   });
  // };

  const handleClick = (e) => {
    e.preventDefault();
    // addUser();
    navigate({ to: "showcase", replace: true });
    console.log(formData.fullName + "full Name");
  };

  return (
    <div className="dev-container">

      <h1>Create Your Dev Card</h1>
      <div className="form-container">
        <form className="creator-form">
          <input
            className="text-box"
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => setFormData({ fullName: e.target.value })}
          />

          <input
            className="text-box"
            type="text"
            id="aboutMe"
            name="aboutMe"
            placeholder="About Me"
            onChange={(e) =>
              setFormData({ ...formData, aboutMe: e.target.value })
            }
          ></input>
          <p className="tech-know">Technologies You Know</p>
          <div className="checkbox-container">
            <label for="html">HTML</label>
            <input
              className="checkbox"
              type="checkbox"
              value="HTML"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="css">CSS</label>
            <input
              className="checkbox"
              type="checkbox"
              value="CSS"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="js">JS</label>
            <input
              className="checkbox"
              type="checkbox"
              value="JS"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="react">React</label>
            <input
              className="checkbox"
              type="checkbox"
              value="React"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="git">git</label>
            <input
              className="checkbox"
              type="checkbox"
              value="git"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="node">Node.js</label>
            <input
              className="checkbox"
              type="checkbox"
              value="NodeJS"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <input
            className="text-box"
            type="text"
            id="gitURL"
            placeholder="Github URL"
            onChange={(e) =>
              setFormData({ ...formData, gitURL: e.target.value })
            }
          ></input>
          <input
            className="text-box"
            type="text"
            id="twitURL"
            placeholder="Twitter URL"
            onChange={(e) =>
              setFormData({ ...formData, twitURL: e.target.value })
            }
          ></input>
          <input
            className="text-box"
            type="text"
            id="favoriteBooks"
            placeholder="Favorite Books(separate by comma)"
            onChange={(e) =>
              setFormData({ ...formData, favBook: e.target.value })
            }
          ></input>
          <input
            className="text-box"
            type="text"
            id="favoriteArtists"
            placeholder="Favorite Artists(separate by comma)"
            onChange={(e) =>
              setFormData({ ...formData, favArt: e.target.value })
            }
          ></input>
          <button className="submit" type="submit" onClick={handleClick}>
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}

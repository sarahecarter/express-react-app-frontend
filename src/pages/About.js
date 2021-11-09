import { useState, useEffect } from "react"

const About = (props) => {
    // create state to hold About data
    const [about, setAbout] = useState(null);

    // function to make API call
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
    };

    // make initial call for data with useEffect
    useEffect(() => getAboutData(), []);

    // function that returns JSX when we get the About data
    const loaded = () => (
        <div className="about">
          <div className="intro">
            <h2>{about.name}</h2>
            <img src={about.headshot}></img>
          </div>
          <h3>{about.email}</h3>
          <p>{about.bio}</p>
        </div>
      );

    // ternary operator
    // if data arrives return the result of loaded() if not an h1 says loading
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About
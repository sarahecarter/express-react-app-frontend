import { useState, useEffect } from "react";

const Projects = (props) => {
    // state to hold project data
    const [projects, setProjects] = useState(null);

    // function for API call
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    }

    // make initial call for data with useEffect()
    useEffect(() => getProjectsData(), []);

    // function that returns JSX when data is loaded
    const loaded = () => {
        return projects.map((project, index) => (
          <div key={index} className="project">
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>Live Site</button>
            </a>
          </div>
        ));
      };
    
      return projects ? <div className="projects">{loaded()}</div> : <h1>Loading...</h1>;
}

export default Projects
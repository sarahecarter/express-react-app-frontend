import { useState, useEffect } from "react"

const Projects = (props) => {
    // state to hold project data
    const [projects, setProjects] = useState()

    // function for API call
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects")
        const data = await response.json()
        setProjects(data)
    }

    // make initial call for data with useEffect()
    useEffect(() => getProjectsData(), []);

    // function that returns JSX when data is loaded
    const loaded = () => {
        return projects.map((project) => (
          <div>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
      };

      return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects
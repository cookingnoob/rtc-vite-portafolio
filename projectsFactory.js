//let newProject = project(img, proyecto, parrafo)
import { renderProjectsTemplateTags } from "./renderTags";

export const projects = [];

const createProject = (proyecto, layout, img) => {
  let project = {
    proyecto: proyecto,
    layout: layout,
    img: img,
  }
  projects.push(project)
}

const listOfProjects = () => {
  let project1 = createProject('Hamburguesas', 'layout1', './hamburguesa.jpg');
  let project2 = createProject('proyecto 2', 'layout2', './pastel.jpg');
  // let project3 = createProject('proyecto 3');
  // let project4 = createProject('proyecto 4');
  // let project5 = createProject('proyecto 5');
};
listOfProjects()






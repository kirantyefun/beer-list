import Beer from './beer';


// this file is intended to contain all other endpoint exports we add later in the project
const API = ($axios) => ({
  beer: Beer($axios)
})

export default API
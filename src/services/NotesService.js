import axios from "axios";
import {baseUrl, port, notesApp} from "./common"

const getAll = () => {
  return axios.get(`${baseUrl}:${port}${notesApp}/getAll`)
}

export default {
  getAll: getAll,
}

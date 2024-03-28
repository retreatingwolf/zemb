import axios from "axios";
import { baseUrl, port, audioApp } from "./common"
const getAll = () => {
    return axios.get(`${baseUrl}:${port}${audioApp}/getAll`)
}

const deleteAudio = (filename) => {

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
    deleteAudio: deleteAudio
}

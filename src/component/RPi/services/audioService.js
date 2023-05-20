import axios from "axios";
const baseUrl = 'http://47.100.107.53:10180/audio'

const getAll = () => {
    return axios.get(`${baseUrl}/getAll`)
}

const deleteAudio = (filename) => {

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
    deleteAudio: deleteAudio()
}

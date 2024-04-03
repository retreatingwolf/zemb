import axios from "axios";
import {config} from "../utils";

const uploadAPK = (username, apk_file_instance) => {
  // axios 会为FromData类型自动设置 Content-Type
  const form_data = new FormData();
  form_data.append("username", username);
  form_data.append("apk", apk_file_instance)  // Important
  return axios.post(`${config.baseURL}/api/upload/apk`, form_data);
}

const startAnalysis = (data) => {
  return axios.post(`${config.baseURL}/api/xfinder/start_analysis`, data)
}

const getIssue = (username) => {
  return axios.post(`${config.baseURL}/api/xfinder/get_issues`, {
    username: username
  });
}

const getStatistic = (username) => {
  return axios.post(`${config.baseURL}/api/xfinder/get_statistic`, {
    username: username
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uploadAPK: uploadAPK,
  startAnalysis: startAnalysis,
  getIssue: getIssue,
  getStatistic: getStatistic
};
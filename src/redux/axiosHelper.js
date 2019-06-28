import axios from "axios";

const BASE_URL = "http://localhost:8000";

const getHeaders = () => {
    let authToken = localStorage.auth_token ? localStorage.auth_token : null;

    let config = {
        headers: {
            Authorization: authToken
        }
    };
    return authToken ? config : {};
};

const checkError = error => {};

const axiosGet = async url => {
    try {
        return await axios.get(BASE_URL + url, getHeaders());
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};
const axiosPost = async (data, url) => {
    try {
        return await axios.post(BASE_URL + url, data, getHeaders());
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

const axiosPut = async (data, url) => {
    try {
        return await axios.put(BASE_URL + url, data, getHeaders());
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

const axiosSave = async (oldTask, newTask, url) => {
    try {
        await axios.put(
            BASE_URL + url,
            {
                id: oldTask.id,
                task: newTask
            },
            getHeaders()
        );
    } catch (error) {
        checkError(error);
        throw error.response.data;
    }
};

const axiosDelete = async (taskToDelete, url) => {
    return axios
        .delete(BASE_URL + url + taskToDelete.id, getHeaders())
        .then(function(response) {})
        .catch(function(error) {});
};

export {
    axiosGet,
    axiosPost,
    axiosDelete,
    axiosSave,
    axiosPut,
    getHeaders,
    checkError
};

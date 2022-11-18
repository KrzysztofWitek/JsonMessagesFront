import axios from "axios";

export default {

    // simplify axios request sending
    async sendApiRequest(link, method, data, apitoken) {
        if (method === "GET" || method === "DELETE") {
            let parameters = {};

            for (const [key, value] of Object.entries(data)) {
                parameters[key] = value;
            }

            return axios({
                method: method,
                url: link,
                headers: { token: apitoken },
                params: parameters,
            });
        }

        if (method === "POST" || method === "PUT" || method === "PATCH") {
            let parameters = new FormData();

            for (const [key, value] of Object.entries(data)) {
                parameters.append(key, value);
            }

            return axios({
                method: method,
                url: link,
                data: parameters,
                headers: { token: apitoken },
            });
        }
    }

};

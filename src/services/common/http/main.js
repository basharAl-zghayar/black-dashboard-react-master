import axios from "axios";
import { getCurrentUser } from '../authentication/index';
import AppConsts from '../../../app-consts';
import { notification } from 'antd';
const qs = require("qs");
class httpClientFactory {

        create(baseUrl) {
                const http = axios.create({
                        baseURL: baseUrl,
                        timeout: 30000,
                        paramsSerializer: function (params) {
                                return qs.stringify(params, {
                                        encode: false,
                                });
                        },
                });

                http.interceptors.request.use(
                        function (config) {
                                if (getCurrentUser()) {
                                        config.headers.common['Authorization'] = 'Bearer ' + getCurrentUser();
                                }
                                return config;
                        },

                        function (error) {
                                return Promise.reject(error);
                        }
                );

                http.interceptors.response.use(
                        (response) => {
                                return response;
                        },

                        (error) => {
                                if (error.response.status === 401 /* Unauthorized */) {
                                        window.location.href = `${AppConsts.baseUrl}/user/login`;
                                } else if (error.response.status === 404) {
                                        notification['error']({
                                                duration: 5,
                                                message: 'Unknown Error',
                                                description: error.response.data.message,
                                                style: 'z-index: 5000',
                                        });
                                }
                                setTimeout(() => { }, 1000);

                                return Promise.reject(error);
                        }
                );
                return http;
        }
}

export default new httpClientFactory();

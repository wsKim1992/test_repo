import axios, { AxiosError, AxiosInstance } from 'axios';

import { APIErrorResponse, APIResponseData } from '@type/api-response';

const axiosJSONInstance = (): AxiosInstance => {
	const axiosJSONInstance: AxiosInstance = axios.create({
		baseURL: 'http://localhost:3030',
		timeout: 1000,
		headers: { 'Content-type': 'application/json' },
		responseType: 'json', //default
		withCredentials: true,
		responseEncoding: 'utf-8', //default
	});

	axiosJSONInstance.interceptors.request.use(
		(config) => {
			return config;
		},
		(err) => {
			return Promise.reject(err);
		}
	);

	axiosJSONInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		async (
			error: AxiosError<
				APIErrorResponse<APIResponseData>,
				APIResponseData
			>
		) => {
			if (error.response && error.response.data) {
				//예외처리 코드
				const { status } = error.response;
				if (400 <= status && status <= 500) {
					console.log('http 400 에러');
				} else if (500 <= status) {
					console.log('http 500 에러');
				}
			}
		}
	);

	return axiosJSONInstance;
};

export default axiosJSONInstance;

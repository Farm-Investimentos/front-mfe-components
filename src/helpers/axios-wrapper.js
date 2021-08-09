export default (httpClient, notification, baseURL) => {
	const fullfilledRequest = config => {
		notification('LOADING_START');
		const token = localStorage.getItem('Token');
		config.headers.authorization = `Bearer ${token}`;
		return config;
	};

	const fullfilledResponse = response => {
		notification('LOADING_END');
		return response;
	};

	const errorResponse = err => {
		notification('LOADING_END');
		if (err.response && err.response.status === 401) {
			notification('UNAUTHORIZED', { err });
			throw err;
		}
		throw err;
	};

	const buildInstance = _httpClient => {
		const instancia = _httpClient.create({
			baseURL,
			timeout: 20 * 1000,
		});

		instancia.interceptors.request.use(
			c => fullfilledRequest(c),
			err => Promise.reject(err)
		);

		instancia.interceptors.response.use(fullfilledResponse, errorResponse);
		return instancia;
	};

	return buildInstance(httpClient);
};

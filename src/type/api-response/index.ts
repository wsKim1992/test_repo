type APIStatus = 'SUCCESS' | 'ERROR';

export interface APIResponseData {
	message: string;
}

export interface APIError {
	message: string;
	reason: string;
	value: string;
}

export interface APIResponse<T = unknown> {
	status: APIStatus;
	code: string;
	message: string;
	data: T;
}

export interface APIErrorResponse<D> extends APIResponse<D> {
	errors: APIError[];
}

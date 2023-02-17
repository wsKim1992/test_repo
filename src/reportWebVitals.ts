import { ReportHandler } from 'web-vitals';

/**
 * eslint 에서 import/named : "off" 로 설정해야 error 이 안남...
 */

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(
			({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);
				getFID(onPerfEntry);
				getFCP(onPerfEntry);
				getLCP(onPerfEntry);
				getTTFB(onPerfEntry);
			}
		);
	}
};

export default reportWebVitals;

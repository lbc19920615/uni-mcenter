import { Logger } from '@jerryc/mini-logger';
const _requestLogger = new Logger({
	prefix: 'net_request'
});

export function getRequestLogger() {
	return _requestLogger;
}

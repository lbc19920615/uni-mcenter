import { localStorage } from "mp-storage";

const TokenKey = 'Admin-Token'

/**
 * getToken
 * @return {*}
 */
export function getToken() {
	return localStorage.getItem(TokenKey)
}

/**
 * setToken
 * @param {string} token
 * @return {*}
 */
export function setToken(token) {
	return localStorage.setItem(TokenKey, token)
}

/**
 * removeToken
 * @return {*}
 */
export function removeToken() {
	return localStorage.removeItem(TokenKey)
}

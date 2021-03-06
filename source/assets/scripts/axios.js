﻿/*
1. setting
1-1. push file.js to gitgub
return {
	functionKey() {}
}

1-2. change to cdn path at https://raw.githack.com

1-3. import axios from "@/assets/scripts/axios"

2. usage
const getUrlFunction = async () => {
	const response = await axios.getUrlFunction("cdn path")
	response.functionKey()
}
*/

import axios from "axios"

export default {
	async form(method, url, params) {
		try {
			const setParams = {}
			setParams.method = method
			setParams.url = url
			setParams.params = method
			return await axios(setParams)
		} catch (error) {
			console.error(error + "\n\t at axios.js")
		}
	},
	async get(url, params) {
		return await this.form("get", url, params)
	},
	async getUrlFunction(url) {
		const response = await this.form("get", url, undefined)
		return new Function(response.data)()
	},
}

export let API = {
  BaseUrl: `http://localhost:3000`,
  Endpoint: `account`,
  async GetData(url, Endpoint) {
    try {
      let response = await fetch(`${url}/${Endpoint}`)
      response = await response.json()
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async SetData(url, Endpoint, item) {
    try {
      let response = await fetch(`${url}/${Endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      response = await response.json()
      return response
    } catch (error) {
      console.log(error)
    }
  },
}

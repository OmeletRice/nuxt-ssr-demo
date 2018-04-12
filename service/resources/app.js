export default function (instance) {
  const path = 'app'

  return {
    fetch (id) {
      return instance
        .get(`${path}`)
        .then(response => response.data)
    },

    fetchMaster () {
      return instance
        .get(`${path}/master`)
        .then(res => res.data)
    },

    fetchCarousel () {
      return instance
        .get(`${path}/carousel`)
        .then(res => res.data)
    }
  }
}

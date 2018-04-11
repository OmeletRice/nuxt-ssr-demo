export default function (instance) {
  const path = 'app'

  return {
    fetch (id) {
      return instance
        .get(`${path}`)
        .then(response => response.data)
    },

    fetchCarousel () {
      return instance
        .get(`${path}/carousel`)
        .then(res => res.data)
    }
  }
}

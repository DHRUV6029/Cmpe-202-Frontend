const prod = {
  url: {
    API_BASE_URL: 'http://44.201.105.20:8080',
  }
}

const dev = {
  url: {
    API_BASE_URL: 'http://44.201.105.20:8080'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod

const axios = require('axios');

export const fetchQuote = async (category) => {

    const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=' + category

    const config = {
        headers: {
          'X-Api-Key': "TqGUsuD0iZixed/3/t4xSw==pP0lXiQ9uLs0TEVr"
        },
      }
    
      const response =  await axios.get(API_URL, config)
    
      console.log(response.data[0])
      return response.data[0]
   
  }

 




  



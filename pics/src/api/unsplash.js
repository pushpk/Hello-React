import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID 3zNQ3iB8aVhsuseO0r9MpFGP0_1sXy6v_6fK9-pmmzE",
      },
    
});

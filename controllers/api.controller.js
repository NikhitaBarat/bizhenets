const axios = require('axios')

const Converter = async (req, res) => {
    const encodedParams = new URLSearchParams();

    encodedParams.append("text", req.body.text);
    encodedParams.append("tl", "uk"); // translation language Ukrainian
    encodedParams.append("sl", "en"); // source language English

    const options = {
        method: 'POST',
        url: 'https://google-translate20.p.rapidapi.com/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST
        },
        data: encodedParams
    };

    axios.request(options)
    .then((response) => res.status(201).send(response.data))
    .catch((error) => console.error(error))
}

module.exports = Converter;
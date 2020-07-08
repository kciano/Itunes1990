let expect = require("chai").expect;
let fetch = require("node-fetch");



describe('Get data', () => {
    const term = "rihanna";
    const query = "musicTrack";

    it('should test if data is an array', async() => {
        const api_call = await fetch(`http://localhost:8080/api/search/${term}/${query}`);
        const data = await api_call.json();

        expect(data).to.be.an('array').to.not.be.null
        
    })
})

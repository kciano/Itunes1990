import React from "react";
import ReactDOM from "react-dom";
import Result from '../../Component/Result';
import { expect } from "chai";



test('we should get data', async() => {
    const term = "rihanna";
    const query = "musicTrack";

    const api_call = await fetch(`http://localhost:8080/api/search/${term}/${query}`);
    const data = await api_call.json();

    expect(data).to.be.an('array').to.not.be.null
})
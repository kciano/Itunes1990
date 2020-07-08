import React from 'react';
import Favorite from '../../Component/Favorite';
import renderer from 'react-test-renderer';


test("Main snapshot test", () => {
    const component = renderer.create(
        <Favorite />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
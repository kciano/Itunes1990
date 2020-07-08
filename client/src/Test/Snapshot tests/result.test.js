import React from 'react';
import Result from '../../Component/Result';
import renderer from 'react-test-renderer';


test("Main snapshot test", () => {
    const component = renderer.create(
        <Result />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
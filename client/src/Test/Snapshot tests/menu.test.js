import React from 'react';
import Menu from '../../Component/Menu';
import renderer from 'react-test-renderer';


test("Main snapshot test", () => {
    const component = renderer.create(
        <Menu />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
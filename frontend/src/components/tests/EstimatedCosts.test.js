import renderer from 'react-test-renderer';
import EstimatedCosts from "../EstimatedCosts";

it('Testing Estimated Costs', () => {
    const component = renderer.create(
        <EstimatedCosts value={10}/>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children["0"].children[1]).toBe("10");
});
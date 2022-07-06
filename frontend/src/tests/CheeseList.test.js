import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router-dom";
import CheeseList from "../CheeseList";

it('Test Cheese List', () => {
    const component = renderer.create(
        <MemoryRouter>
            <CheeseList />
        </MemoryRouter>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
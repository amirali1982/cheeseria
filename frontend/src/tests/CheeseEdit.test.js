import renderer from 'react-test-renderer';
import CheeseEdit from "../CheeseEdit";
import {MemoryRouter} from "react-router-dom";

it('Test Cheese Edit', () => {
    const component = renderer.create(
        <MemoryRouter>
            <CheeseEdit match={{params: {id: 1}, isExact: true}}/>
        </MemoryRouter>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
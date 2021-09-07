import { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import UserContext from "../../../components/09-useContext/UserContext";

describe('AppRouter tests', () => {

    const user = {
        id: 1,
        name: 'John',
        email: 'john@example.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should show the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
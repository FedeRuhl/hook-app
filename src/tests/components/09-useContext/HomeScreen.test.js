import { shallow, mount } from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import UserContext from "../../../components/09-useContext/UserContext";

describe('HomeScreen tests', () => {

    const user = {
        name: 'fede',
        email: 'fede@example.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user      
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should show the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
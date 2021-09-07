import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import UserContext from "../../../components/09-useContext/UserContext";

describe('LoginScreen tests', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('should show the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should run setUser with correct arguments', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Pepe',
            email: 'pepe@example.com'
        });
    });
    
});
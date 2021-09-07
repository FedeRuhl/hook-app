import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('useForm tests', () => {

    const initialForm = {
        name: 'Federico',
        email: 'federico@gmail.com',
    };

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm());
        const [ form ] = result.current;

        expect(form).toEqual({});
    });

    test('should has 2 functions', () => {
        const { result } = renderHook(() => useForm());
        const [, handleInputChange, reset ] = result.current;

        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    

    test('should change the name value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        let [ form, handleInputChange ] = result.current;
        const newName = 'Marcos';

        act(() => handleInputChange({
            target: {
                name: 'name',
                value: newName
            }
        }));

        [ form ] = result.current;

        // expect(form.name).toBe(newName);
        expect(form).toEqual({...initialForm, name: newName});

    });
    
    test('should reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        let [ form, handleInputChange, reset ] = result.current;
        const newName = 'Marcos';

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });
        }); 

        act(reset);

        [ form ] = result.current;

        expect(form).toEqual(initialForm);
    });
    
    
});
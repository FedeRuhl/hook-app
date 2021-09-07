import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from "../../hooks/useCounter";

describe('useCounter tests', () => {

    test('should return correct default value', () => {
        const defaultValue = 0;
        const { result: {current} } = renderHook(() => useCounter());

        expect(current.state).toBe(defaultValue);
        expect(typeof current.increment).toBe('function');
        expect(typeof current.decrement).toBe('function');
        expect(typeof current.reset).toBe('function');
    });

    test('should return correct value if exists', () => {
        const initialValue = 100;
        const { result: {current} } = renderHook(() => useCounter(initialValue));

        expect(current.state).toBe(initialValue);
    });

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current; 
        const expected = result.current.state + 1;
        act(() => increment());
        const { state } = result.current;

        expect(state).toBe(expected);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current; 
        const expected = result.current.state - 1;
        act(() => decrement());
        const { state } = result.current;

        expect(state).toBe(expected);
    });

    test('should reset counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current; 
        const expected = 0;
        act(() => {
            decrement();
            reset();
        });
        const { state } = result.current;

        expect(state).toBe(expected);
    });
    
    
});
import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('useFetch tests', () => {

    const url = `https://www.breakingbadapi.com/api/quotes/1`; 

    test('should return default object', () => {

        const { result } = renderHook(() => useFetch(url));
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });
    
    test('should return data successfully', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate({ timeout: 5000});

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    
    test('should catch error', async() => {

        const url = 'https://reqres.in/apid/users?page=2';
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate({ timeout: 5000});

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('Data could not be fetched');
    });

});
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiService } from '@/services/api';

export const useApiStore = defineStore('api', () => {
    const loading = ref(false);
    const error = ref<string | null>(null);

    const setLoading = (value: boolean): void => {
        loading.value = value;
    }

    const setError = (message: string | null): void => {
        error.value = message;
    }

    const clearError = (): void => {
        error.value = null;
    }

    const get = async (url: string, params?: any): Promise<any> => {
        setLoading(true);
        clearError();
        try {
            const response = await apiService.get(url, params);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }
    
    const post = async (url: string, data?: any): Promise<any> => {
        setLoading(true);
        clearError();
        try {
            const response = await apiService.post(url, data);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const put = async (url: string, data?: any): Promise<any> => {
        setLoading(true);
        clearError();
        try {
            const response = await apiService.put(url, data);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const del = async (url: string): Promise<any> => {
        setLoading(true);
        clearError();
        try {
            const response = await apiService.delete(url);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, get, post, put, delete: del, setError, clearError };
});
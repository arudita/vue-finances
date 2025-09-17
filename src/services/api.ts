import axios from "axios";
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

class ApiService {
    private api: AxiosInstance;
    
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL || 'http://laravel-api-finances.test/',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.api.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.api.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    localStorage.removeItem('auth_token');
                    window.location.href = '/login';
                }
                return Promise.reject(error);
            }
        );
    }

    async getCsrfToken(): Promise<void> {
        await this.api.get('/sanctum/csrf-cookie');
    }

    // Authentication methods
    async login(credentials: { email: string; password: string }): Promise<AxiosResponse> {
        await this.getCsrfToken();
        return this.api.post('/api/auth/login', credentials);
    }

    async logout(): Promise<AxiosResponse> {
        return this.api.post('/api/auth/logout');
    }

    async register(userData: { name: string; email: string; password: string; password_confirmation: string, level: number }): Promise<AxiosResponse> {
        await this.getCsrfToken();
        return this.api.post('/api/auth/register', userData);
    }
    
    async getUser(): Promise<AxiosResponse> {
        return this.api.get('/api/user');
    }

    // Generic methods
    get(url: string, params?: any): Promise<AxiosResponse> {
        return this.api.get(url, { params });
    }

    post(url: string, data?: any): Promise<AxiosResponse> {
        return this.api.post(url, data);
    }

    put(url: string, data?: any): Promise<AxiosResponse> {
        return this.api.put(url, data);
    }

    delete(url: string): Promise<AxiosResponse> {
        return this.api.delete(url);
    }
}

export const apiService = new ApiService();
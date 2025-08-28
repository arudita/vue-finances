import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiService } from '@/services/api';
import type { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loading = ref(false);

  const login = async (email: string, password: string): Promise<void> => {
    loading.value = true;
    try {
      const response = await apiService.login({ email, password });
      const token = response.data.access_token;
      console.log('Login response: ', response);

      if (token) {
        localStorage.setItem('auth_token', token);
        await fetchUser();
      }
    } catch (error) {
      console.error('Login failed: ', error);
      throw error;
    } finally {
      loading.value = false;
    }
  }
  
  const logout = async (): Promise<void> => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error('Logout failed: ', error);
    } finally {
      user.value = null;
      isAuthenticated.value = false;
      localStorage.removeItem('auth_token');
    }
  }

  const fetchUser = async (): Promise<void> => {
    try {
      const response = await apiService.getUser();
      user.value = response.data;
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Fetch user failed: ', error);
      isAuthenticated.value = false;
      user.value = null;
    }
  }

  const checkAuth = async (): Promise<void> => {
    const token = localStorage.getItem('auth_token');
    if (token && !isAuthenticated.value) {
      try {
        await fetchUser();
      } catch (error) {
        console.error('Auth check eror: ', error);
      }
    }
  }

  return { user, isAuthenticated, loading, login, logout, fetchUser, checkAuth };
});
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { title: '',  requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: { requiresGuest: true },
    children: [
      {
        path: '',
        name: 'Project List',
        component: () => import('@/views/projects/ProjectsView.vue'),
      },
      {
        path: ':id',
        name: 'Project Details',
        component: () => import('@/views/projects/ProjectDetailsView.vue'),
      },
    ]
  },
  {
    path: '/finance',
    name: 'Financial',
    meta: { requiresGuest: true },
    children: [
      {
        path: 'incomes',
        name: 'Incomes List',
        component: () => import('@/views/financial/IncomesView.vue'),
      },
      {
        path: 'incomes/:id',
        name: 'Income Details',
        component: () => import('@/views/financial/IncomeDetailsView.vue'),
      },
      {
        path: 'expenses',
        name: 'Expenses List',
        component: () => import('@/views/financial/ExpensesView.vue'),
      },
      {
        path: 'expenses/:id',
        name: 'Expense Details',
        component: () => import('@/views/financial/ExpenseDetailsView.vue'),
      },
      {
        path: 'credits',
        name: 'Credits List',
        component: () => import('@/views/financial/CreditsView.vue'),
      },
      {
        path: 'credits/:id',
        name: 'Credit Details',
        component: () => import('@/views/financial/CreditDetailsView.vue'),
      },
    ]
  },
  {
    path: '/stocks',
    name: 'Stocks',
    meta: { requiresGuest: true },
    children: [
      {
        path: 'furniture',
        name: 'Stock Furniture List',
        component: () => import('@/views/stocks/FurnitureView.vue'),
      },
      {
        path: 'machine',
        name: 'Stock Machine List',
        component: () => import('@/views/stocks/MachineView.vue'),
      },
      {
        path: 'wood',
        name: 'Stock Wood List',
        component: () => import('@/views/stocks/WoodView.vue'),
      },
    ]
  },
  {
    path: '/inventory',
    name: 'Invetory Management',
    component: () => import('@/views/inventory/InventoryView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/others/SettingsView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/others/ProfileView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not-Found',
    component: () => import('@/views/NotFoundView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { lfet: 0, top: 0 };
  },
  routes: routes,
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized,) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && localStorage.getItem('auth_token')) {
    try {
      await authStore.fetchUser();
    } catch (error) {
      console.error('Auth check failed: ', error);
      localStorage.removeItem('auth_token');
    }
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { 
      name: 'login', 
      query: { redirect: to.fullPath } 
    };
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return { name: 'dashboard' };
  }

  return true;
});

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.log(`Navigated from ${from.fullPath} to ${to.fullPath}`);
});

export default router

<template>
  <AdminLayout>
    <div class="grid grid-cols-3 gap-4 md:gap-6">
      <div class="col-span-3">
        <TransactionMetrics />
      </div>
      <div class="col-span-3">
        <StatisticsChart />
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../components/layout/AdminLayout.vue'
import StatisticsChart from '../components/ecommerce/StatisticsChart.vue'
import TransactionMetrics from '@/components/ecommerce/TransactionMetrics.vue';
</script>

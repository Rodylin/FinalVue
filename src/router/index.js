import { createRouter, createWebHistory } from 'vue-router';
import Instructor from '../components/Instructor.vue';
import Assignment from '../components/Assignment.vue';
import Salary from '../components/Salary.vue';

const routes = [
  {
    path: '/instructors',
    name: 'Instructor',
    component: Instructor,
  },
  {
    path: '/assignments',
    name: 'Assignment',
    component: Assignment,
  },
  {
    path: '/salaries',
    name: 'Salary',
    component: Salary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

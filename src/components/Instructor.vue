<template>
    <div>
      <h1>Power Strength Gym's Instructors</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="instructor in instructors" :key="instructor.id">
            <td>{{ instructor.id }}</td>
            <td>{{ instructor.full_name }}</td>
            <td>{{ instructor.email }}</td>
            <td>{{ instructor.position }}</td>
            <td>{{ instructor.department }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const instructors = ref([]);
const loading = ref(true); // Set to true if you want to show "Loading..." initially

onMounted(async () => {
  try {
    const response = await axios.get('instructor.json'); // Replace with the actual path
    instructors.value = response.data.instructors;
  } catch (error) {
    console.error('Error fetching instructors:', error);
  } finally {
    loading.value = false; // Hide loading state after data is fetched
  }
});
</script>

<style scoped>
h1{
  color: white;
}
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  td{
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  th {
    color: white;
    background-color: rgba(0, 0, 0, 1);
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Optional: Add some additional styling for responsiveness */
  @media (max-width: 768px) {
    table {
      overflow-x: auto;
      display: block;
    }

    thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
</style>

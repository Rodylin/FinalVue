<template>
    <div>
      <h1>Instructor's Assignments</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="assignment in assignments" :key="assignment.id">
            <td>{{ assignment.id }}</td>
            <td>{{ assignment.title }}</td>
            <td>{{ assignment.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  export default {
    setup() {
      const assignments = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('assignment.json'); // Replace with the actual path
          assignments.value = response.data.assignments;
        } catch (error) {
          console.error('Error fetching assignments:', error);
        }
      });

      return {
        assignments,
      };
    },
  };
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

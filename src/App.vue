<template>
  <div id="app">
    <!-- <div class="header">
      <h1>Human Resource Manager</h1>
    </div> -->
    <div class="logo">
      <img src="https://www.logolynx.com/images/logolynx/3f/3fe209d213f1e1924a5349cf14a64e33.png" alt="logo">
    </div>
    <div class="nav-links">
      <router-link class="nav-link" to="/instructors">Instructors</router-link>
      <router-link class="nav-link" to="/assignments">Assignments</router-link>
      <router-link class="nav-link" to="/salaries">Salary</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
img {
        height: 100px;
    }
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url('https://wallsdesk.com/wp-content/uploads/2016/10/Gym-for-desktop.jpg');
  background-size: cover;
}

.header {
  margin-bottom: 20px;
  text-align: center;
  color: whitesmoke;
}

.nav-links {
  display: flex;
}

.nav-link {
  text-decoration: none;
  color: white;
  background-color: rgba(175, 14, 14, 0.619);
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin-right: 15px;
  margin-top: 35px;
  font-size: 20px;
}

.nav-link:hover {
  background-color: #97a1a8;
  color: #fff;
  transform: scale(1.05);
}

.content {
  background-color: rgba(220, 20, 60, 0.788);
  padding: 30px;
  margin-top: 20px;
  width: 98%;
}
</style>

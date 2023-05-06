<template>
  <v-main>
    <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.active ? 'Yes' : 'No' }}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary mr-2" @click="toggleItem(item)">
              {{ item.active ? 'Disable' : 'Enable' }}
            </button>
            <button class="btn btn-sm btn-outline-secondary mr-2" @click="editItem(item)">
              Edit
            </button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteItem(item)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <v-btn color="primary" @click="navigate('contestnew')" >Add New Contest</v-btn>
  </v-main>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigate = (name: string) => {
  router.push({
    name: name
  });
};
const items =   [
        { id: 1, name: 'John', email: 'john@example.com', active: true },
        { id: 2, name: 'Jane', email: 'jane@example.com', active: false },
        { id: 3, name: 'Bob', email: 'bob@example.com', active: true },
        { id: 4, name: 'Alice', email: 'alice@example.com', active: false },
      ];
  

</script>

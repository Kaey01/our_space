<template>
  <div style="width: 100%">
    <div class="layout-header">
      <div class="menu">
        <div class="menu-item" v-for="(item, index) in workMenu" :key="index" @click="handleClick(item.path)">{{ item.name }}</div>
      </div>
      <div class="menu-search">
        <el-input
            v-model="search"
            placeholder="Type here to search"
            :prefix-icon="Search"
        />
      </div>
    </div>
    <div class="layout-container">
      <router-view/>
    </div>
    <div class="layout-bottom"></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const workMenu = [
  {
    name: '记录',
    path: '/record'
  },
  {
    name: '相册',
    path: '/community'
  },
  {
    name: '笔记',
    path: '/file'
  },
  {
    name: '我的',
    path: '/my'
  }
]
const search = ref('')

const router = useRouter()
const handleClick = (path: string) => {
  console.log(path)
  router.push(path)
}
</script>

<style scoped lang="scss">
.layout-header {
  width: 100%;
  height: 74px;
  background-color: black;
  display: flex;
  align-items: center;
  .menu {
    width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 230px;
    .menu-item {
      color: white;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #00a0e9;
      }
    }
  }
  .menu-search {
    width: 250px;
    height: 30px;
    border-radius: 15px;
    background-color: #2c2c2c;
    border: none;
    margin-left: 250px;
  }
}
.layout-container {
  height: calc(100vh - 74px - 100px);
  background-color: #fff;
}
.layout-bottom {
  height: 100px;
  background-color: black;
}

</style>
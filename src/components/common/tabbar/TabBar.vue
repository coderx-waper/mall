<template>
  <div class="tabBar">
    <TabBarItem class="tabBar-item" path="/home">
      <template v-slot:ions>
        <img src="~assets/img/tabbar/home.png" mode="" />
      </template>

      <template v-slot:ions-active>
        <img src="~assets/img/tabbar/home_active.png" mode="" />
      </template>

      <template v-slot:text>
        <div >首页</div>
      </template>
      
    </TabBarItem>

    <TabBarItem class="tabBar-item" path="/discover"  >
      <template v-slot:ions>
        <img src="~assets/img/tabbar/discover.png" mode="" />
      </template>

      <template v-slot:ions-active>
        <img src="~assets/img/tabbar/discover_active.png" mode="" />
      </template>

       <template v-slot:text>
        <div >分类</div>
      </template>
    </TabBarItem>

    <TabBarItem class="tabBar-item" path="/cart" >

      <template v-slot:ions>
        <img src="~assets/img/tabbar/shopcat.png" mode="" />
      </template>

      <template v-slot:ions-active>
        <img src="~assets/img/tabbar/shopcat_active.png" mode="" />
      </template>

       <template v-slot:text>
        <div>购物车</div>
      </template>
    </TabBarItem>

    <TabBarItem class="tabBar-item" path="/profile">

      <template v-slot:ions>
        <img src="~assets/img/tabbar/profile.png" mode="" />
      </template>

      <template v-slot:ions-active>
        <img src="~assets/img/tabbar/profile_active.png" mode="" />
      </template>
      
       <template v-slot:text>
        <div >档案</div>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
.tabBar {
  display: flex;
  flex-direction: row;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /**阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}

.tabBar-item {
  flex: 1;
  text-align: center;
}

img{
    width: 24px; 
    height: 24px;
}

</style>

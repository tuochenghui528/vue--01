<template>
  <div>
    <tabbar-box>
      <tabbar-item path="/home">
        <div slot="img">
          <img src="../../assets/img/tabBar/home.svg" alt="" />
        </div>
        <div slot="img-active">
          <img src="../../assets/img/tabBar/home_active.svg" alt="">
        </div>
        <p slot="title">首页</p>
      </tabbar-item>
      <tabbar-item path="/categroy">
         <div slot="img">
          <img src="../../assets/img/tabBar/categroy.svg" alt="" />
        </div>
        <div slot="img-active">
          <img src="../../assets/img/tabBar/categroy_active.svg" alt="">
        </div>
        <p slot="title">类别</p>
      </tabbar-item>
      <tabbar-item path="/car">
        <div slot="img">
          <img src="../../assets/img/tabBar/shopping-cart.svg" alt="" />
        </div>
        <div slot="img-active">
          <img src="../../assets/img/tabBar/shopping-cart_active.svg" alt="">
        </div>
        <p slot="title">购物车</p>
      </tabbar-item>
      <tabbar-item path="/profile">
         <div slot="img">
          <img src="../../assets/img/tabBar/profile.svg" alt="" />
        </div>
        <div slot="img-active">
          <img src="../../assets/img/tabBar/profile_active.svg" alt="">
        </div>
        <p slot="title">我的</p>
      </tabbar-item>
    </tabbar-box>
  </div>
</template>

<script>
import TabbarBox from '../../components/tabBar/tabBarBox';
import TabbarItem from '../../components/tabBar/tabBarItem';
export default {
    components: {
        TabbarBox,
        TabbarItem
    }

}
</script>

<style>

</style>
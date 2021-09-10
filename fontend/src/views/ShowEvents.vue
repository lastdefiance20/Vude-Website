<template>
  <div>
      <div>Home>Event</div>
      <div>이벤트 홍보</div>
      <ol>
          <li><router-link to= '/event/details'>이벤트 1</router-link></li>
          <li><router-link to= '/event/details'>이벤트 1</router-link></li>
          <li><router-link to= '/event/details'>이벤트 1</router-link></li>
          <li><router-link to= '/event/details'>이벤트 1</router-link></li>
      </ol>
      <router-view></router-view>
      <ol>
          <li><router-link to='/events/list1'>1</router-link></li>
          <li><router-link to=' '>2</router-link></li>
      </ol>
  </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>

</style>
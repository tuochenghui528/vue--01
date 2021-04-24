<template>
    <div>
        <p>我是用户页面</p>
        <p>我是{{userId}}</p>
    </div>
</template>
<script>
export default {
    name: 'User',
    data() {
        return {
            
        }
    },
    computed: {
        userId() {
            return this.$route.params.userId;
        }
    }
}
</script>
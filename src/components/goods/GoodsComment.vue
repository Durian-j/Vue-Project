<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox><!-- 编程式导航 -->
    </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue"; //评论

export default {
  components: {
    cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>

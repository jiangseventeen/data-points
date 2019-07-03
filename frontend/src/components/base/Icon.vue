<template>
  <i :class="['fa', `fa-${type}`]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: ['type']
}
</script>

<style scope src="font-awesome/css/font-awesome.css">
<template>
  <i :class="['fas', type]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: ['type']
}
</script>

<style scope src="@fortawesome/fontawesome-free/css/all.css">
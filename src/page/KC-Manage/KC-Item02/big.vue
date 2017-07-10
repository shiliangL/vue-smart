<template>
	<div class="">
		父组件中的值{{bigval}}
		<inputTest v-model="bigval"></inputTest>
	</div>
</template>

<script>
	import inputTest from './inputTest.vue'
	export default {
		name: 'big',
		components:{
			inputTest
		},
		data () {
			return {
				bigval:""
			};
		}
	};
</script>

<style lang="css" scoped>
</style>
<template>
	<div class="">
		<h1>子组建</h1>
		<input type="text" v-model="val" @input="input">
	</div>
</template>

<script>
	export default {
		name: 'inputTest',
		data () {
			return {
				val:''
			};
		},
		methods:{
			input(){
				console.log('输入了');
				this.$emit('input',this.val)
			}
		}
	};
</script>
<style lang="css" scoped>
</style>
<template>
	<div class="mint-scroll" :style="'height:' + height"><slot></slot></div>
</template>

<script>
	import scroll from '../units/scroll'

	export default {
		props: {
			speed: {
				type: String,
				default: '20'
			},
			height: {
				type: String,
				default: '300px'
			}
		},
		computed: {
			numberSpeed () {
				return parseInt(this.speed)
			}
		},
		mounted () {
			// 启动滚动
			scroll('.mint-scroll', {
				speed : this.numberSpeed,
				height: this.height
			})
		}
	}
</script>

<style scoped>
	.mint-scroll {
		overflow: hidden;
	}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<h2>mint-scroll with vue2.0.x</h2>
				<div class="box">
					<h4>文章列表</h4>
					<mint-scroll speed="50">
						<ul>
					      <li>要是能变成数组多好啊</li>
					      <li>类数组是不一定全部支持的</li>
					      <li>所以其后面可以直接调用数组具有的方法</li>
					      <li>表示数组的原型中的slice方法。注意</li>
					      <li>能调用call的只有方法，所以</li>
					      <li>参数表示真正调用slice的环境变</li>
					      <li>连接两个或更多的数组，并返回结果</li>
					      <li>删除并返回数组的第一个元素</li>
					      <li>从某个已有的数组返回选定的元素</li>
					      <li>把数组转换为字符串，并返回结果。</li>
					    </ul>
					</mint-scroll>
				</div>
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
</template>
<script>
	import MintScroll from '../components/mint-scroll'
	export default {
		data () {
			return {
				isHandle: false
			}
		},
		methods: {
			handlerSomething () {
				console.log('handling something....')
			}
		},
		components: {
			MintScroll
		}
	}
</script>

<style scoped>
.container {
	margin-top: 50px;
}

.box {
	background: #fff;
	border: 1px solid #aaa;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.box ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.box ul li {
	line-height: 3;
	border-bottom: 1px solid #aaa;
	padding-left: 10px;
}

.box ul li:hover {
	background: #f8f8f8;
}

.box ul li:last-child {
	border-bottom: none;
}

.box h4 {
	background: #f8f8f8;
	padding: 10px;
	margin: 0;
	border-bottom: 1px solid #eee;
}
</style>
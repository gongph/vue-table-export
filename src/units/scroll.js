/**
 * 无缝滚动
 * @param  {String} element       元素的 `class` 名字。例如： '.mint-scroll'
 * @param  {Number} options.speed 滚动速度。默认是20，数字越大滚动越慢。
 */
export default (element, { speed = 20, height } ) => {
	const scrollNode = document.querySelector(element)
	const items = scrollNode.children[0]
	const itemsHeight = items.children.length * items.children[0].offsetHeight
	// 偏移量
	var _margin_top_index = 0
	// 计时器
	var mqrqueeTimer

	/**
	* 列表滚动函数
	*/
	function mintScroll () {
		// 修改items所在元素的 `margin-top` 样式
		setMarginTopStyle(items)
		// 获取 `margin-top` 偏移量绝对值
		const offset = Math.abs(parseInt(items.style.marginTop))
		// 如果滚动的偏移量大于一个 item 的高度时
		if (offset >= items.children[0].offsetHeight ) {
			// 把第一个 item 放到最后
			items.appendChild(Array.prototype.slice.call(items.children).slice(0, 1)[0])
			// `margin-top` 归零，从新计算
			_margin_top_index = 0
			setMarginTopStyle(items)
		}
	}

	/**
	 * 设置 `margin-top` 样式
	 * @param  {Node} node 	Dom元素
	 */
	function setMarginTopStyle ( node ) {
		node.style.cssText = `margin-top: ${ _margin_top_index -- }px`
	}

	/**
	 * 启动计时器
	 */
	mqrqueeTimer = setInterval(function () {
		if ( height >= innerHeight ) {
			clearInterval(mqrqueeTimer)
		} else {
			mintScroll()
		}
	}, speed)

	/**
	 * 监听 `mouseover` 
	 */
	scrollNode.onmouseover = function () {
	  	clearInterval(mqrqueeTimer);
	}

	/**
	 * 监听 `mouseout` 
	 */
	scrollNode.onmouseout = function () {
	  	mqrqueeTimer = setInterval(function () {
			if ( height >= innerHeight ) {
				clearInterval(mqrqueeTimer)
			} else {
				mintScroll()
			}
		}, speed);
	}
}

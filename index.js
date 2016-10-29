import mintScroll from './src/components/mint-scroll'

const components = {
	'mint-scroll' : mintScroll
}

export default {
	install (Vue) {
		Object.keys(components).forEach( (key) => Vue.component(key, components[key]) )
	}
}
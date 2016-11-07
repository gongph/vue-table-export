<template>
	<button id="table-export" :class="'btn ' + className" @click="toggle" v-cloak>
		{{buttonText}}
	</button>
</template>

<script>
	import handleExport from '../units/export'

	export default {
		props: {
			columns: {
				type: Array
			},
			className: {
				type: String,
				default: 'btn-success'
			},
			buttonText: {
				type: String,
				default: '导出Excel'
			},
			data: {
				type: Array,
				required: true
			},
			filename: String,
			type: {
				type: String,
				default: 'xlsx'
			}
		},
		computed: {
			newFilename () {
				if (!this.filename) {
					return Date.parse(new Date())
				} else {
					return this.filename
				}
			},
			newData () {
				if (this.columns) {
					this.data.unshift(this.columns)
				} 
				return this.data
			}
		},
		methods: {
			toggle () {
				handleExport({
					data: this.newData,
					type: this.type,
					filename: this.newFilename
				})
			}
		}
	}
</script>

<style scoped>
	[v-cloak] {
	  display: none;
	}
</style>
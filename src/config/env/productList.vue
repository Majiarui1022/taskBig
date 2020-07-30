<template>
	<view class="product-list-fat">
		<axios-loading  
			:show="loading">
		</axios-loading>
		
		<nav-bar 
			:titleName="titleName" 
			:showIcn="showIcn">
		</nav-bar>
		
		<product-search 
			@openLoading="SearchChiledopenLoading"
			@searchList="SearchChiledSeardchList">
		</product-search>
		
		<product-list  
			:style="{'height':BarHeight == 0 ?'calc(100% - ' + 94  + 'px)': 'calc(100% - ' + (94 + BarHeight) + 'px)'}">
		</product-list>
	</view>
</template>

<script>
	import axiosLoading from '../../components/axios-loading/axios-loading.vue'
	import navBar from '@/components/NavBar/NavBar.vue'
	import productSearch from '@/components/product-view/product-search.vue'
	import productList from '@/components/product-view/product-list.vue'
	export default {
		components :{
			navBar,
			productSearch,
			productList,
			axiosLoading
		},
		data(){
			return{
				titleName:'项目报备',
				BarHeight:0,
				showIcn: 'add',
				loading : false,
				selectList : {
					endTimer :'',
					examineStatus:'',
					productType:'',
					startTimer:''
				}
			}
		},
		methods:{
			
			
			/**
			 *  search module callback function
			 * 	    function start
			 */
		
			//筛选回调
			SearchChiledopenLoading(params){
				console.log(params);
				this.selectList = params;
				this.loading = true
				this.getProList()
				setTimeout(()=>{
					this.loading = false;
				},2000)
			},
			
			//搜索回调
			SearchChiledSeardchList(params){
				console.log(params)
			},
			/**
			 * search module callback function
			 *     function end
			 */
			
			
			getProList(){
				console.log('p/v1/project/?' + `create_day_gt=${this.selectList.startTimer}${this.selectList.examineStatus}${this.selectList.productType}&create_day_lt=${this.selectList.endTimer}`)
			}
			
			
		},
		created() {
			// requireurl.getData('p/v1/wx/today/',this.tasklist,this.errtask)
			var _that = this
			wx.getSystemInfo({
				success: function(res) {
					_that.BarHeight = res.statusBarHeight
					console.log(_that.BarHeight)
				}
			});
			
			
			/**
			 * 获取报备项目列表
			 * 
			 */
			this.getProList()
			// this.$requireHttp.getData('p/v1/project/?' + `create_day_gt=${this.selectList.startTimer}result=${this.selectList.examineStatus}category=${this.selectList.productType}&create_day_lt=${this.selectList.endTimer}`,this.getProList,this.loginfail)
			
		},
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.product-list-fat{
		width: 100%;
		height: 100%;
		background-color: #F2F2F2;
		display: flex;
		flex-direction: column;
	}
</style>

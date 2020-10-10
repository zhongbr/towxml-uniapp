<template>
<uni-shadow-root><view :class="'h2w h2w-'+(nodes.theme)">
	<view class="h2w__main text-black" style="font-size: 20rpx;">
		<decode :nodes="nodes" @click.stop="__event($event)" @change.stop="__event($event)" @load="load"></decode>
	</view>
</view></uni-shadow-root>
</template>

<script>
import Decode from './decode.vue'

export default {
  name:'Towxml',
  components:{
	  Decode,
  },
  props:{
    nodes:{
      type:Object,
      value:{}
    }
  },
  data(){
    return {
		someData:{
		  
		}
	}
  },
	mounted(){this.ready()},
	onReady(){this.ready()},
	methods:{
	  ready(){
	  },
	  __event(e){
		  this.$emit('click', e);
	  },
	  load(){
		  console.log('富文本渲染完成');
	  }
  }
}
</script>
<style scoped>
</style>
<template>
	<div>
		<el-submenu v-if="item.children" :index="subIndex">
			<template slot="title">
				<i class="fa" :class="item.icon"></i>	
				<span>{{item.text}} </span>
			</template>
			<el-menu-item-group>
				<el-menu-item v-for="(child,childIndex) in item.children"  :key="child.text" :index="child.basePath" @click="toPage(child.basePath)" >{{child.text}}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item v-else :index="index"  @click="toPage(item.basePath)">
			<i class="fa" :class="item.icon"></i>
			<span slot="title">{{item.text}}</span>
		</el-menu-item>
 	</div>
</template>
<script>
	export default{
		props:{
			item:{},
			index:{},
			subIndex:{}
		},
		data(){
			return {
				
			}
		},
		methods:{
			toPage: function(path){
				this.$router.push(path);
			}
		}
	};
</script>


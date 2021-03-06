const formRouter = {
	path:'/',
	component:resolve => require(['@/pages/main'],resolve),
	children: [
		{
			path:'/zform/index',
			name:'zform',
			component:resolve => require(['@/pages/form/index'],resolve),
			children:[
				{
					path:'/zform/first',
					name:'first',
					component:resolve => require(['@/pages/form/components/first'],resolve)
				},
				{
					path:'/zform/second',
					name:'second',
					component:resolve => require(['@/pages/form/components/second'],resolve)
				},
				{
					path:'/zform/third',
					name:'second',
					component:resolve => require(['@/pages/form/components/third'],resolve)
				},
				{
					path:'/zform/complete',
					name:'complete',
					component:resolve => require(['@/pages/form/components/complete'],resolve)
				}
			]
		}
	]
}; 

export default formRouter;
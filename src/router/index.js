import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/form'
import Editor from '@/components/editor'
import Upload from '@/components/upload'
import Table from '@/components/table'
import Charts from '@/components/charts'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home,
		children:[
			{
				path: '/form',
				name: 'Form',
				component: Form
				},
			{
				path: '/editor',
				name: 'Editor',
				component: Editor
			},
			{
				path: '/upload',
				name: 'Upload',
				component: Upload
			},
			{
				path: '/table',
				name: 'Table',
				component: Table
			},
			{
				path: '/charts',
				name: 'Charts',
				component: Charts
			},
		]
	},
	
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	
  ]
})

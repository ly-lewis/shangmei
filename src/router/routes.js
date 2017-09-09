
const home = r => require.ensure([], () => r(require('../views/contacts/index')), 'home')
const myProfile = r => require.ensure([], () => r(require('../views/contacts/myProfile')), 'myProfile')
const framework = r => require.ensure([], () => r(require('../views/contacts/framework')), 'framework')
const profileDetail = r => require.ensure([], () => r(require('../views/contacts/profileDetail')), 'profileDetail')
const contactDetail = r => require.ensure([], () => r(require('../views/contacts/contactDetail')), 'contactDetail')
const apartment = r => require.ensure([], () => r(require('../views/contacts/framework-apartment')), 'framework-apartment')

export default [
    {path: '', redirect: '/home'},  
    {
    path:'/home',
    meta:{
        title:'上美'
    },
    component:home
},{
    path:'/myProfile',
    meta:{
        title:'我的资料'
    },
    component:myProfile,
},{
    path:'/framework',
    meta:{
        title:'组织架构'
    },
    component:framework
},
{
    path:'/profileDetail',
    meta:{
        title:'资料详情'
    },
    component:profileDetail
},
{
    path:'/contactDetail',
    meta:{
        title:'联系人资料'
    },
    component:contactDetail
},
{
    path:'/apartment',
    meta:{
        title:'部门信息'
    },
    component:apartment
},
]
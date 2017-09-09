//通讯录
const home = r => require.ensure([], () => r(require('../views/contacts/index')), 'home')
const myProfile = r => require.ensure([], () => r(require('../views/contacts/myProfile')), 'myProfile')
const framework = r => require.ensure([], () => r(require('../views/contacts/framework')), 'framework')
const profileDetail = r => require.ensure([], () => r(require('../views/contacts/profileDetail')), 'profileDetail')
const contactDetail = r => require.ensure([], () => r(require('../views/contacts/contactDetail')), 'contactDetail')
const apartment = r => require.ensure([], () => r(require('../views/contacts/framework-apartment')), 'framework-apartment')

//调研
const mySurvey = r => require.ensure([], () => r(require('../views/survey/mysurvey')), 'mysurvey')
const surveyDetail = r => require.ensure([], () => r(require('../views/survey/detail')), 'surveyDetail')
const surveyMessage = r => require.ensure([], () => r(require('../views/survey/message')), 'surveyMessage')
const surveyResult = r => require.ensure([], () => r(require('../views/survey/result')), 'surveyResult')

//投票
const addQuestion = r => require.ensure([], () => r(require('../views/votes/addQuestion')), 'addQuestion')
const myVotes = r => require.ensure([], () => r(require('../views/votes/myVotes')), 'myVotes')
const startVote = r => require.ensure([], () => r(require('../views/votes/startVote')), 'startVote')
const votesDetail = r => require.ensure([], () => r(require('../views/votes/votesDetail')), 'votesDetail')
const votesMessage = r => require.ensure([], () => r(require('../views/votes/votesMessage')), 'votesMessage')
const votesResult = r => require.ensure([], () => r(require('../views/votes/votesResult')), 'votesResult')


export default [
    {path: '', redirect: '/myVotes'},  
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
//调研
{
    path:'/',
    meta:{
        title:'我的调研'
    },
    component:mySurvey
},
{
    path:'/mySurvey',
    meta:{
        title:'我的调研'
    },
    component:mySurvey
},
{
    path:'/surveyDetail',
    meta:{
        title:'调研详情'
    },
    component:surveyDetail
},
{
    path:'/surveyMessage',
    meta:{
        title:'调研信息'
    },
    component:surveyMessage
},
{
    path:'/surveyResult',
    meta:{
        title:'调研结果'
    },
    component:surveyResult
},
//投票
{
    path:'/myVotes',
    meta:{
        title:'我的投票'
    },
    component:myVotes
},
{
    path:'/startVote',
    meta:{
        title:'开始投票'
    },
    component:startVote
},
{
    path:'/addQuestion',
    meta:{
        title:'添加问题'
    },
    component:addQuestion
},
{
    path:'/votesDetail',
    meta:{
        title:'投票详情'
    },
    component:votesDetail
},
{
    path:'/votesMessage',
    meta:{
        title:'投票信息'
    },
    component:votesMessage
},
{
    path:'/votesResult',
    meta:{
        title:'投票结果'
    },
    component:votesResult
},
]
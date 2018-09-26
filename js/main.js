/*
const foo = {template:`<div>foo</div>`}
const bar = {template:`<div>bar</div>`}

//定义实例化的参数，由数组对象构成，每个对象中有指向link的path和要显示的组件
const routes= [
    {
        path:'/foo',
        component:foo
    },{
        path:'/bar',
        component:bar
    }
]
//实例化组件，new Vue
const rout = new VueRouter({
    routes
})
//挂载组件
const app = new Vue({
    el:"#app",
    router:rout
})


const userprofile ={template:`<div>profile</div>`}
const userposts ={template:`<div>posts</div>`}
const use = {template:`<div>home</div>`}


const user = {
    //template里面可以潜逃router-view
    template:`
            <div>
            <div>{{$route.params.id}}</div>
            <router-view></router-view>
            </div>
    `

}


const routes = new VueRouter({
    routes:[
        {
            path:"/user/:id",
            component:user,
            //嵌套的参数为children,chridren和外层一样，没有math时会显示空的子路由
            children:[
                {
                    path:'profile',
                    component:userprofile
                },{
                    path:"posts",
                    component:userposts
                },
                {
                    path:'',
                    component:use
                }
            ]
        },
    ],
    
})

new Vue({
    el:"#app",
    router:routes
})
*/

const setnav = {
   
    template:`
    <div>
        <router-link to="/settings/emails">emails</router-link>
   
        <router-link to="/settings/profile">profile</router-link>
    </div>
    `
}

const usersetting = {
    
    template:`
    <div>
        <h2>user setting</h2>
        <setnav/>
        <router-view></router-view>
        <router-view name="helper"></router-view>    
    </div>
    `
    ,
    components:{setnav}

}

const email = {
    template:
    `
    <div>
        <h3>email mm</h3>
    </div>
    `
}

const Nprofile = {
    template:
    `
    <div>
        <h3>profile useererere</h3>
    </div>
    `
}


const proview ={
    template:
    `
    <div>
        <h3>Preview of your profile</h3>
    </div>
    `
}

const router = new VueRouter({
    //mode:'history',
    routes:[
        {
            path:'/settings',
            component:usersetting,
            children:[
                {
                    path:"emails",
                    component:email
                },{
                    path:"profile",
                    components:{
                        default:Nprofile,
                        helper:proview
                    }
                }
            ]
        }
    ]
})

router.push('/settings/emails')

new Vue({
    router,
    el: '#app'
})

/*********


******* */
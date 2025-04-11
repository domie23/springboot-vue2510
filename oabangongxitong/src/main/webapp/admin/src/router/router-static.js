import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gerenbianqian from '@/views/modules/gerenbianqian/list'
    import huiyi from '@/views/modules/huiyi/list'
    import huiyishi from '@/views/modules/huiyishi/list'
    import huiyishiyuyue from '@/views/modules/huiyishiyuyue/list'
    import kaoqin from '@/views/modules/kaoqin/list'
    import news from '@/views/modules/news/list'
    import qingjiajilu from '@/views/modules/qingjiajilu/list'
    import richeng from '@/views/modules/richeng/list'
    import tongxunlu from '@/views/modules/tongxunlu/list'
    import wenjian from '@/views/modules/wenjian/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryGangwei from '@/views/modules/dictionaryGangwei/list'
    import dictionaryGerenbianqian from '@/views/modules/dictionaryGerenbianqian/list'
    import dictionaryHuiyi from '@/views/modules/dictionaryHuiyi/list'
    import dictionaryHuiyishi from '@/views/modules/dictionaryHuiyishi/list'
    import dictionaryHuiyishiyuyueYesno from '@/views/modules/dictionaryHuiyishiyuyueYesno/list'
    import dictionaryKaoqin from '@/views/modules/dictionaryKaoqin/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQingjiajilu from '@/views/modules/dictionaryQingjiajilu/list'
    import dictionaryRicheng from '@/views/modules/dictionaryRicheng/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryTongxunlu from '@/views/modules/dictionaryTongxunlu/list'
    import dictionaryWenjian from '@/views/modules/dictionaryWenjian/list'
    import dictionaryWenjianYesno from '@/views/modules/dictionaryWenjianYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBumen',
        name: '部门信息',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryGangwei',
        name: '岗位信息',
        component: dictionaryGangwei
    }
    ,{
        path: '/dictionaryGerenbianqian',
        name: '便签类型',
        component: dictionaryGerenbianqian
    }
    ,{
        path: '/dictionaryHuiyi',
        name: '会议类型',
        component: dictionaryHuiyi
    }
    ,{
        path: '/dictionaryHuiyishi',
        name: '会议室类型',
        component: dictionaryHuiyishi
    }
    ,{
        path: '/dictionaryHuiyishiyuyueYesno',
        name: '预约状态',
        component: dictionaryHuiyishiyuyueYesno
    }
    ,{
        path: '/dictionaryKaoqin',
        name: '打卡类型',
        component: dictionaryKaoqin
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQingjiajilu',
        name: '请假结果',
        component: dictionaryQingjiajilu
    }
    ,{
        path: '/dictionaryRicheng',
        name: '日程类型',
        component: dictionaryRicheng
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTongxunlu',
        name: '联系人类型',
        component: dictionaryTongxunlu
    }
    ,{
        path: '/dictionaryWenjian',
        name: '文件类型',
        component: dictionaryWenjian
    }
    ,{
        path: '/dictionaryWenjianYesno',
        name: '文件审批状态',
        component: dictionaryWenjianYesno
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/gerenbianqian',
        name: '个人便签',
        component: gerenbianqian
      }
    ,{
        path: '/huiyi',
        name: '会议信息',
        component: huiyi
      }
    ,{
        path: '/huiyishi',
        name: '会议室',
        component: huiyishi
      }
    ,{
        path: '/huiyishiyuyue',
        name: '会议室预约',
        component: huiyishiyuyue
      }
    ,{
        path: '/kaoqin',
        name: '考勤',
        component: kaoqin
      }
    ,{
        path: '/news',
        name: '公告',
        component: news
      }
    ,{
        path: '/qingjiajilu',
        name: '请假记录',
        component: qingjiajilu
      }
    ,{
        path: '/richeng',
        name: '日程信息',
        component: richeng
      }
    ,{
        path: '/tongxunlu',
        name: '通讯录',
        component: tongxunlu
      }
    ,{
        path: '/wenjian',
        name: '文件信息',
        component: wenjian
      }
    ,{
        path: '/yonghu',
        name: '员工',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

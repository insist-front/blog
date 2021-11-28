module.exports = {
  "title": "西门小狼狗",
  "description": "跬步千里, 积微成著",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
   plugins: [
      //[
      //   'ribbon', //丝带
      //   {
      //      size: 90, // width of the ribbon, default: 90
      //      opacity: 0.8, // opacity of the ribbon, default: 0.3
      //      zIndex: -1, // z-index property of the background, default: -1
      //   },
      //],
	  [
         'dynamic-title', //动态标题
         {
            showIcon: '/favicon.ico',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: '/failure.ico',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
         },
      ],
	  [
         'cursor-effects',
         {
            size: 2, // size of the particle, default: 2
            shape: ['star'], // 'star' | 'circle' shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
         },
      ]
   ],
  "theme": "reco",
  "themeConfig": {
	 /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'solarizedlight', // default 'tomorrow'
	subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "nav": require("./nav.js"),
    "sidebar": require("./sidebar.js"),
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Damoncai",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}
define({ "api": [
  {
    "type": "get",
    "url": "/channel",
    "title": "频道首页",
    "description": "<p>频道首页  PING</p>",
    "group": "Channel",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "industry_code",
            "description": "<p>行业类型code(必传  eg: IND0021)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码(非必传，不传默认为15)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页几条数据(非必传，不传默认为5)</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n  {\n      \"statusCode\": 200,\n      \"statusMessage\": \"获取数据成功\",\n      \"responseData\": {\n          \"current_page\": 1,\n          \"last_page\": 1,\n          \"data\": [\n              {\n                  \"keyword_code\": \"QujrFl7lIYOxssWM\",\n                  \"keyword_name\": \"FOVE\",\n                  \"industry_code\": \"IND0022\",\n                  \"industry_fullname\": \"虚拟现实 / 头戴式显示器\",\n                  \"draft_id\": 4,\n                  \"title\": \"能追踪眼球的VR头盔面世\",\n                  \"subtitle\": \"局部变焦或将引变革\",\n                  \"img\": \"https://uploads2.b0.upaiyun.com///news/news1496654252.jpg!news.logo.500.270\",\n                  \"intro\": null\n              }\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/HomeController.php",
    "groupTitle": "Channel",
    "name": "GetChannel"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "首页",
    "description": "<p>首页  PING</p>",
    "group": "Home",
    "permission": [
      {
        "name": "需要"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码(非必传，不传默认为15)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页几条数据(非必传，不传默认为5)</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\": 200,\n    \"statusMessage\": \"获取数据成功\",\n    \"responseData\": {\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"data\": [\n            {\n                \"keyword_code\": \"UBDp4pOVRKf0q2wW\",\n                \"keyword_name\": \"NextVR\",\n                \"industry_code\": \"IND0020\",\n                \"industry_fullname\": \"虚拟现实 / 虚拟现实直播\",\n                \"draft_id\": 1,\n                \"title\": \"NextVR领衔\",\n                \"subtitle\": \"虚拟现实VR直播来袭\",\n                \"img\": \"https://uploads2.b0.upaiyun.com///news/news1490344133.jpg!news.logo.500.270\",\n                \"intro\": \"根据汕头市人民政府工作安排，Nanospun纳米黄金笼子污水处理项目由徐凯副市长牵头，汕头大学、李嘉诚基金会、市环保局负责配合做好此项工作，由汕头市环境保护研究所抽调精干专业技术力量协调配合开展科研项目调查采样，协助Nanospun科技有限公司开展科研项目初步研究、资料收集和地点选择等一系列工作；凤凰科技讯9月29日消息，根据台湾媒体报道，一iPhone 8 Plus女性用户在充电过程中发生意外，该苹果手机的前面板明显开裂；凤凰科技讯9月29日消息，根据台湾媒体报道，一iPhone 8 Plus女性用户在充电过程中发生意外，该苹果手机的前面板明显开裂\"\n            },\n            {\n                \"keyword_code\": \"svC6eXb8uKQoWULI\",\n                \"keyword_name\": \"UrtheCast\",\n                \"industry_code\": \"IND0031\",\n                \"industry_fullname\": \"卫星技术 / 应用卫星\",\n                \"draft_id\": 2,\n                \"title\": \"这家公司把摄像头安到了国际空间站\",\n                \"subtitle\": \"想要从太空中直播地球\",\n                \"img\": \"https://uploads2.b0.upaiyun.com///news/news1496653995.jpg!news.logo.500.270\",\n                \"intro\": null\n            },\n            {\n                \"keyword_code\": \"QujrFl7lIYOxssWM\",\n                \"keyword_name\": \"FOVE\",\n                \"industry_code\": \"IND0022\",\n                \"industry_fullname\": \"虚拟现实 / 头戴式显示器\",\n                \"draft_id\": 4,\n                \"title\": \"能追踪眼球的VR头盔面世\",\n                \"subtitle\": \"局部变焦或将引变革\",\n                \"img\": \"https://uploads2.b0.upaiyun.com///news/news1496654252.jpg!news.logo.500.270\",\n                \"intro\": null\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/HomeController.php",
    "groupTitle": "Home",
    "name": "GetHome"
  },
  {
    "type": "get",
    "url": "/keyword/achievement/{keyword_code}",
    "title": "关键词：进展",
    "description": "<p>关键词：进展 ———— 朱朔男</p>",
    "group": "Keyword",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n {\n\t  \"statusCode\": 4000,\n\t  \"statusMessage\": \"获取数据成功\",\n\t  \"responseData\": {\n\t    \"project\": [\n\t      {\n\t        \"name\": \"卫星平台型谱方案\",\n\t        \"id\": 1040,\n\t        \"name_en\": \"Family of Satellite Buses\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///pj/pj1506313482.jpg!ptpe.img\",\n\t        \"content\": [\n\t          \"洛克希德·马丁推出卫星平台型谱方案，是为了让不同型号的卫星能够共用某些通用部件，以便更快、更低成本地完成不同 *用户对于卫星大小、任务及其轨道选项等个性化需求的订单。\",\n\t          \"卫星平台型谱方案一共纳入4种卫星平台，它们分别是LM 50系列平台、LM 400系列平台、LM 1000系列平台和LM 2100系列平台。\",\n\t          \"LM 50系列平台：该平台生产10-100公斤的纳米卫星，主要供美国空军或商业用户开展空间实验。\",\n\t          \"LM 400系列平台：该平台生产140-800公斤的小卫星，且在推进系统上有所改进，以用来执行低地轨道、近地轨道以及星际任务，其成本可比以前降低20%-30%，交货速度则能提高3倍。\",\n\t          \"LM 1000系列平台：该平台生产275-2200公斤的中、大卫星，可以携带较多载荷来执行多种轨道和星际任务。\",\n\t          \"LM 2100系列平台：该平台生产2300公斤左右的大卫星，是在洛克希德·马丁此前的通信卫星系列A 2100的基础上的改进型号，主要以提高功率和灵活性为原则，对包括太阳能电池阵和霍尔推进器在内的26项技术进行了改进。\"\n\t        ]\n\t      },\n\t      {\n\t        \"name\": \"小型核聚变反应堆\",\n\t        \"id\": 969,\n\t        \"name_en\": \"\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///pj/pj1500271792.jpg!ptpe.img\",\n\t        \"content\": []\n\t      },\n\t      {\n\t        \"name\": \"USC-洛克希德·马丁公司量子计算中心\",\n\t        \"id\": 970,\n\t        \"name_en\": \"\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///pj/pj1500272107.jpg!ptpe.img\",\n\t        \"content\": []\n\t      }\n\t    ],\n\t    \"product\": [\n\t      {\n\t        \"name\": \"超音速喷气式客机\",\n\t        \"id\": 509,\n\t        \"name_en\": \"X-Plane\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///prod/prod1500271562.jpg!ptpe.img\",\n\t        \"content\": []\n\t      },\n\t      {\n\t        \"name\": \"商用超音速喷气式客机\",\n\t        \"id\": 510,\n\t        \"name_en\": \"N+2\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///prod/prod1500271490.jpg!ptpe.img\",\n\t        \"content\": []\n\t      }\n\t    ],\n\t    \"tech\": [\n\t      {\n\t        \"name\": \"3D打印军用卫星部件\",\n\t        \"id\": 820,\n\t        \"name_en\": \"\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///tech/tech1500271690.jpg!ptpe.img\",\n\t        \"content\": []\n\t      }\n\t    ]\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/KeywordController.php",
    "groupTitle": "Keyword",
    "name": "GetKeywordAchievementKeyword_code"
  },
  {
    "type": "get",
    "url": "/keyword/block/{keyword_code}",
    "title": "关键词：信息块",
    "description": "<p>关键词信息块 ———— 朱朔男</p>",
    "group": "Keyword",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\": 4000,\n    \"statusMessage\": \"获取数据成功\",\n    \"responseData\": {\n        \"keywords\": {\n            \"name\": \"索尼\",\n            \"name_en\": \"SONY\",\n            \"oneword\": \"消费类电子产品设计研发商\",\n            \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1496817338.jpg!initial\",\n            \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1491554149.jpg!initial\",\n            \"geo_code_province\": \"104342715810USA0GA013\",\n            \"geo_code_city\": \"\",\n            \"desc\": \"索尼于1946年5月在日本东京成立，是日本最大的消费类电子产品设计制造商，创始人为井深大、盛田昭夫。现任CEO为平井一夫。\",\n            \"region\": {\n                \"city\": \"\",\n                \"sheng\": \"东京\",\n                \"guo\": \"佐治亚\"\n            }\n        },\n        \"blocks\": [\n            {\n                \"id\": 299,\n                \"title\": \"业务方向\",\n                \"content\": [\n                    {\n                        \"id\": 667,\n                        \"content\": \"索尼前身为“东京通信工业株式会社”，是全球唯一一家跨越电子、游戏、娱乐三大核心业务的全方位集团。\",\n                        \"order\": 0\n                    }\n                ]\n            },\n            {\n                \"id\": 300,\n                \"title\": \"创立过程\",\n                \"content\": [\n                    {\n                        \"id\": 671,\n                        \"content\": \"1994年12月，索尼推出PlayStation家用游戏主机；2004年，索尼推出PlayStation Portable（PSP）掌上游戏机，奠定其在游戏产业的地位。截至2007年3月，PS系列游戏机销量达到2亿3000万，成为继“Walkman”之后索尼第二大热销产品。\",\n                        \"order\": 1\n                    },\n                    {\n                        \"id\": 670,\n                        \"content\": \"1979年3月，索尼推出随身听“Walkman”。截至1998年，该产品全球销量达到2亿5000万部。\",\n                        \"order\": 2\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/KeywordController.php",
    "groupTitle": "Keyword",
    "name": "GetKeywordBlockKeyword_code"
  },
  {
    "type": "get",
    "url": "/keyword/core/{core_id}",
    "title": "关键词：产科项单独介绍",
    "description": "<p>关键词：产科项单独介绍 ———— 朱朔男</p>",
    "group": "Keyword",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "core_id",
            "description": "<p>产科项id</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n {\n\t  \"statusCode\": 4000,\n\t  \"statusMessage\": \"获取数据成功\",\n\t  \"responseData\": {\n\t    \"keywords\": {\n\t        \"name\": \"卫星平台型谱方案\",\n\t        \"id\": 1040,\n\t        \"name_en\": \"Family of Satellite Buses\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///pj/pj1506313482.jpg!ptpe.img\",\n\t        \n\t    },\n\t    \"core\": {\n\t        \"name\": \"超音速喷气式客机\",\n\t        \"id\": 509,\n\t        \"name_en\": \"X-Plane\",\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///prod/prod1500271562.jpg!ptpe.img\",\n\t        \"contents\": [\n\t          \"洛克希德·马丁推出卫星平台型谱方案，是为了让不同型号的卫星能够共用某些通用部件，以便更快、更低成本地完成不同 *用户对于卫星大小、任务及其轨道选项等个性化需求的订单。\",\n\t          \"卫星平台型谱方案一共纳入4种卫星平台，它们分别是LM 50系列平台、LM 400系列平台、LM 1000系列平台和LM 2100系列平台。\",\n\t          \"LM 50系列平台：该平台生产10-100公斤的纳米卫星，主要供美国空军或商业用户开展空间实验。\",\n\t          \"LM 400系列平台：该平台生产140-800公斤的小卫星，且在推进系统上有所改进，以用来执行低地轨道、近地轨道以及星际任务，其成本可比以前降低20%-30%，交货速度则能提高3倍。\",\n\t          \"LM 1000系列平台：该平台生产275-2200公斤的中、大卫星，可以携带较多载荷来执行多种轨道和星际任务。\",\n\t          \"LM 2100系列平台：该平台生产2300公斤左右的大卫星，是在洛克希德·马丁此前的通信卫星系列A 2100的基础上的改进型号，主要以提高功率和灵活性为原则，对包括太阳能电池阵和霍尔推进器在内的26项技术进行了改进。\"\n\t        ]\n\t    }\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/KeywordController.php",
    "groupTitle": "Keyword",
    "name": "GetKeywordCoreCore_id"
  },
  {
    "type": "get",
    "url": "/keyword/gallery/{keyword_code}",
    "title": "关键词:图库列表",
    "description": "<p>关键词:图库列表 ———— 朱朔男</p>",
    "group": "Keyword",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n\t{\n\t  \"statusCode\": 4000,\n\t  \"statusMessage\": \"获取数据成功\",\n\t  \"responseData\": {\n\t    \"keywordInfo\": {\t\t\t\t\t// 关键词相关信息\n\t      \"name\": \"Makeblock\",\t\t\t\t// 中文名\n\t      \"name_en\": \"Makeblock\",\t\t\t// 英文名\n\t      \"oneword\": \"编程机器人设计研发商\",\t// 一句话\n\t      \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1496651778.jpg!initial\",\t// 缩略图\n\t      \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1496651781.jpg!initial\",\t// 头图\n\t      \"desc\": \"Makekblock于2011年在深圳成立，是一家编程机器人设计研发企业，创始人为王建军。现任CEO为王建军。\", //简述\n\t      \"city\": \"广东中国\"\t\t\t\t\t// 城市\n\t    },\n\t    \"gallerys\": [\t\t\t\t\t\t// 图库相关信息\n\t      {\n\t        \"gallery_id\": 24,\t\t\t\t// 图库id\n\t        \"title\": \"Makeblock产品\",\t\t// 标题\n\t        \"picture\": [\t\t\t\t\t// 图库下面的图片\n\t          {\n\t            \"desc\": \"\",\t\t\t\t// 图片描述\n\t        \t\"thumb_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery1496651891.jpg!news.logo.500.270\",\t// 缩略图\n\t        \t\"original_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery1496651891.jpg!news.logo.500.270\",\t// 原图\n\t        \t\"is_cover\": 1\t\t\t// 是否为封面（0-否，1-是）\n\t          }\n\t        ],\n\t\t\t\"num\": 10\t\t\t\t\t// 图片数量\n\t      }\n\t    ]\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/KeywordController.php",
    "groupTitle": "Keyword",
    "name": "GetKeywordGalleryKeyword_code"
  },
  {
    "type": "get",
    "url": "/navigation",
    "title": "频道导航",
    "description": "<p>频道导航</p>",
    "group": "News",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "null",
            "description": "<p>无</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n   {\n       \"statusCode\": 4000,\n       \"statusMessage\": \"获取数据成功\",\n       \"responseData\": [\n           {\n               \"code\": \"IND0002\",\n               \"name\": \"基础物理\",\n               \"name_en\": \"Fundamental Physics\",\n               \"second_industry\": [\n                   {\n                       \"code\": \"IND0097\",\n                       \"name\": \"热力学\",\n                       \"name_en\": \"\"\n                   },\n                   {\n                       \"code\": \"IND0098\",\n                       \"name\": \"量子力学\",\n                       \"name_en\": \"\"\n                   },\n                   {\n                       \"code\": \"IND0099\",\n                       \"name\": \"电磁力学\",\n                       \"name_en\": \"\"\n                   }\n               ]\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/IndustryController.php",
    "groupTitle": "News",
    "name": "GetNavigation"
  },
  {
    "type": "get",
    "url": "/news/details",
    "title": "新闻详情",
    "description": "<p>新闻详情</p>",
    "group": "News",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "draft_id",
            "description": "<p>新闻ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n   {\n       \"statusCode\": 4000,\n       \"statusMessage\": \"获取数据成功\",\n       \"responseData\": {\n           \"keywordData\": {（主关键词信息）\n               \"name\": \"拉里·佩奇\",\n               \"name_en\": \"Larry Page\",\n               \"code\": \"qZ7i5UH1hMS5prC8\",\n               \"oneword\": \"Google联合创始人\",\n               \"desc\": \"Google公司创始人之一，2011年4月4日任谷歌CEO ，现任Alphabet公司CEO。\",\n               \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1496801733.jpg!initial\",\n               \"head_path\": \"\"\n           },\n           \"newsData\": {（新闻信息）\n               \"id\": 1,\n               \"title\": \"NextVR领衔\",\n               \"subtitle\": \"虚拟现实VR直播来袭\",\n               \"author\": \"柳威\",\n               \"email\": \"13611086916@xincheng.tv\"\n           },\n           \"newsintro\": （新闻概要）\"根据汕头市人民政府工作安排，Nanospun纳米黄金笼子污水处理项目由徐凯副市长牵头，汕头大学、李嘉诚基金会、市环保局负责配合做好此项工作，由汕头市环境保护研究所抽调精干专业技术力量协调配合开展科研项目调查采样，协助Nanospun科技有限公司开展科研项目初步研究、资料收集和地点选择等一系列工作；凤凰科技讯9月29日消息，根据台湾媒体报道，一iPhone 8 Plus女性用户在充电过程中发生意外，该苹果手机的前面板明显开裂；凤凰科技讯9月29日消息，根据台湾媒体报道，一iPhone 8 Plus女性用户在充电过程中发生意外，该苹果手机的前面板明显开裂\",\n           \"newscontentData\": [（新闻内容，\"picture\"-图片,\"gallery\"-图库,\"video\"-视频, 其他全是文字）\n               {\n                   \"id\": 15724,\n                   \"element_type\": \"gallery\",\n                   \"element_id\": 1,\n                   \"element_content\": {\n                       \"id\": 1,\n                       \"title\": \"Solar Probe Plus太阳探测器\",\n                       \"picture\": [\n                           {\n                               \"desc\": \"\",\n                               \"original_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery1496484946.jpg!news.logo.500.270\"\n                           },\n                           {\n                               \"desc\": \"\",\n                               \"original_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery_p1496485065.jpg\"\n                           }\n                       ]\n                   }\n               },\n               {\n                   \"id\": 15725,\n                   \"element_type\": \"video\",\n                   \"element_id\": 3,\n                   \"element_content\": {\n                       \"title\": \"顺丰视频\",\n                       \"type_code_website\": \"ST00002\",\n                       \"url\": \"XMzA3NDg4NTc2MA\"\n                   }\n               },\n               {\n                   \"id\": 366,\n                   \"element_type\": \"text\",\n                   \"element_id\": 0,\n                   \"element_content\": \"与FACEBOOK旗下的Oculus公司和HTC的VIVE等专注于硬件发展不同的是，来自美国加利福尼亚拉古娜海滩的VR公司 NextVR ，是一家专注于虚拟现实内容产生和制作的公司，准确的来说，就是VR直播。而NextVR的这种定位，与其两位公司创始人的经历是密不可分的。\"\n               },\n               {\n                   \"id\": 12543,\n                   \"element_type\": \"picture\",\n                   \"element_id\": 2550,\n                   \"element_content\": {\n                       \"desc\": \"\",\n                       \"original_path\": \"http://uploads2.b0.upaiyun.com///news/news1506477562.jpg\"\n                   }\n               }\n           ],\n           \"keyData\": [（相关关键词信息）\n               {\n                   \"name\": \"NextVR\",\n                   \"name_en\": \"NextVR\",\n                   \"code\": \"UBDp4pOVRKf0q2wW\",\n                   \"oneword\": \"VR直播服务商\",\n                   \"desc\": \"NextVR于2009年在加州创立，是一家VR直播服务商，创始人为David Cole、DJ Roller。现任CEO为Dave Cole。\"\n               }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/NewsController.php",
    "groupTitle": "News",
    "name": "GetNewsDetails"
  },
  {
    "type": "get",
    "url": "/keyword/people",
    "title": "人物列表",
    "description": "<p>人物列表</p>",
    "group": "People",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n   {\n       \"statusCode\": \"501\",\n       \"statusMessage\": \"非法数据请求\",\n       \"responseData\": {\n           \"keywordData\": {\n               \"code\": \"W1UN4YbN4pKnuvR6\",\n               \"name_cn\": \"太空探索技术公司\",\n               \"name_en\": \"SpaceX\",\n               \"category_code\": \"KC002\",\n               \"oneword\": \"太空运输服务商\",\n               \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495701352.jpg!initial\",\n               \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1495701352.jpg!news.logo.500.270\",\n               \"country_name\": \"美国\",\n               \"province_name\": null,\n               \"city_name\": null\n           },\n           \"people\": [\n               {\n                   \"code\": \"NvXUKMnqdD2FVol6\",\n                   \"name_cn\": \"伊隆·马斯克\",\n                   \"name_en\": \"Elon Musk\",\n                   \"head_path\": \"\",\n                   \"role\": \"CEO\"\n               }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/PeopleController.php",
    "groupTitle": "People",
    "name": "GetKeywordPeople"
  },
  {
    "type": "get",
    "url": "/keyword/peopleinfo",
    "title": "人物关键词信息",
    "description": "<p>人物关键词信息</p>",
    "group": "People",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyword_code",
            "description": "<p>关键词code</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n   {\n       \"statusCode\": \"501\",\n       \"statusMessage\": \"非法数据请求\",\n       \"responseData\": {\n           \"desc\": \"NASA于1958年成立于美国，是直属于联邦政府的航空航天研究发展机构，现任局长为Norman R. Augustine 。\",\n           \"gallery\": [\n               {\n                   \"id\": 1,\n                   \"title\": \"Solar Probe Plus太阳探测器\",\n                   \"picture\": [\n                       {\n                           \"desc\": \"\",\n                           \"thumb_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery1496484946.jpg!news.logo.500.270\",\n                           \"original_path\": \"http://uploads2.b0.upaiyun.com//gallery/gallery1496484946.jpg!news.logo.500.270\"\n                       }\n                   ]\n               },\n           ],\n           \"block\": [\n               {\n                   \"block_id\": 904,\n                   \"title\": \"业务方向\",\n                   \"info\": [\n                       {\n                           \"content\": \"从1958年始，美国宇航局负责了美国的太空探索，例如登月的阿波罗计划，太空实验室，以及随后的航天飞机。\"\n                       },\n                       {\n                           \"content\": \"自2006年2月，NASA的愿景是“开拓未来的太空探索，科学发现及航空研究”；使命是“理解并保护我们依赖生存的行星；探索宇宙，找到地球外的生命；启示我们的下一代去探索宇宙”。\"\n                       }\n                   ]\n               }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/PeopleController.php",
    "groupTitle": "People",
    "name": "GetKeywordPeopleinfo"
  },
  {
    "type": "get",
    "url": "/corevalue",
    "title": "获取产品、科技、项目、公司、人物、机构列表",
    "description": "<p>获取产品、科技、项目、公司、人物、机构列表</p>",
    "group": "classifyList",
    "permission": [
      {
        "name": "需要"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry_code",
            "description": "<p>所属行业类型编码  [注意:非必传但需要修改时必传]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1:产品;2:科技;3:项目;4:公司;5:人物;6:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"statusCode\": 4000,\n     \"statusMessage\": \"获取数据成功\",\n     \"responseData\": {\n         \"total\": 37,\n         \"per_page\": 5,\n         \"current_page\": 1,\n         \"last_page\": 8,\n         \"next_page_url\": \"http://api.xc.serverapi.cn:8282/v1/corevalue?type=1&industryCode=IND0023&page=2\",\n         \"prev_page_url\": null,\n         \"from\": 1,\n         \"to\": 5,\n         \"data\": [\n             { // 产品返回示例\n                 \"thumb_path\": \"http://uploads2.b0.upaiyun.com///prod/prod1499822420.jpg!ptpe.img\",\n                 \"name_cn\": \"龙飞船\",\n                 \"name_en\": \"SpaceX Dragon\",\n                 \"keywords_name_cn\": \"太空探索技术公司\",\n                 \"keywords_name_en\": \"SpaceX\",\n                 \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1495701352.jpg!news.logo.500.270\",\n                 \"oneword\": \"太空运输服务商\",\n                 \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495701352.jpg!initial\",\n                 \"keywords_id\": 7,\n                 \"keywords_code\": \"W1UN4YbN4pKnuvR6\",\n                 \"product_id\": 28 // 当type = 1显示产品\n             },\n             { // 科技返回示例\n                 \"thumb_path\": \"http://uploads2.b0.upaiyun.com///tech/tech1499852029.jpg!ptpe.img\",\n                 \"name_cn\": \"药柱3D打印技术\",\n                 \"name_en\": \"3D Printed Fuel Grains\",\n                 \"keywords_name_cn\": \"Rocket Crafters\",\n                 \"keywords_name_en\": \"Rocket Crafters\",\n                 \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1496887479.jpg!initial\",\n                 \"oneword\": \"火箭技术研发商\",\n                 \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495158214.jpg!initial\",\n                 \"keywords_id\": 355,\n                 \"keywords_code\": \"cs8dBG4I9jSz7tj5\",\n                 \"tech_id\": 793 // 当type = 2显示科技\n             },\n             { // 项目返回示例\n                 \"thumb_path\": \"http://uploads2.b0.upaiyun.com///pj/pj1499824683.jpg!ptpe.img\",\n                 \"name_cn\": \"行星际运输系统\",\n                 \"name_en\": \"Interplanetary Transport System\",\n                 \"keywords_name_cn\": null,\n                 \"keywords_name_en\": null,\n                 \"head_path\": null,\n                 \"oneword\": null,\n                 \"logo_path\": null,\n                 \"keywords_id\": null,\n                 \"keywords_code\": null,\n                 \"project_id\": 908 // 当type = 3显示项目\n             },\n             { // 公司返回示例 公司logo使用logo_path字段\n                 \"thumb_path\": null,\n                 \"name_cn\": null,\n                 \"name_en\": null,\n                 \"keywords_name_cn\": \"Rocket Crafters\",\n                 \"keywords_name_en\": \"Rocket Crafters\",\n                 \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1496887479.jpg!initial\",\n                 \"oneword\": \"火箭技术研发商\",\n                 \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495158214.jpg!initial\",\n                 \"keywords_id\": 355,\n                 \"keywords_code\": \"cs8dBG4I9jSz7tj5\",\n                 \"keyword_category_code\": \"KC002\" // KC002 = 公司\n             },\n             { // 人物返回示例 公司logo使用head_path字段\n                 \"thumb_path\": null,\n                 \"name_cn\": null,\n                 \"name_en\": null,\n                 \"keywords_name_cn\": \"Rocket Crafters\",\n                 \"keywords_name_en\": \"Rocket Crafters\",\n                 \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1496887479.jpg!initial\",\n                 \"oneword\": \"火箭技术研发商\",\n                 \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495158214.jpg!initial\",\n                 \"keywords_id\": 355,\n                 \"keywords_code\": \"cs8dBG4I9jSz7tj5\",\n                 \"keyword_category_code\": \"KC003\" // KC003 = 人物\n             },\n             { // 机构返回示例\n                 \"thumb_path\": null,\n                 \"name_cn\": null,\n                 \"name_en\": null,\n                 \"keywords_name_cn\": \"Rocket Crafters\",\n                 \"keywords_name_en\": \"Rocket Crafters\",\n                 \"head_path\": \"http://uploads2.b0.upaiyun.com//keywords2/key1496887479.jpg!initial\",\n                 \"oneword\": \"火箭技术研发商\",\n                 \"logo_path\": \"http://uploads2.b0.upaiyun.com//keywords1/key1495158214.jpg!initial\",\n                 \"keywords_id\": 355,\n                 \"keywords_code\": \"cs8dBG4I9jSz7tj5\",\n                 \"keyword_category_code\": \"KC004\" // KC004 = 机构\n             },\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/CorevalueController.php",
    "groupTitle": "classifyList",
    "name": "GetCorevalue"
  },
  {
    "type": "get",
    "url": "/program",
    "title": "节目",
    "description": "<p>节目 ———— 朱朔男</p>",
    "group": "program",
    "permission": [
      {
        "name": "需要验证"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "program_type",
            "description": "<p>节目类型:2-新城商业(默认),1-像素科技</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>每页显示数量</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n {\n\t  \"statusCode\": 200,\n\t  \"statusMessage\": \"获取数据成功\",\n\t  \"responseData\": {\n\t    \"total\": 118,\n\t    \"per_page\": \"1\",\n\t    \"current_page\": 1,\n\t    \"last_page\": 118,\n\t    \"next_page_url\": \"http://www.xcapp.com/v1/program?page=2\",\n\t    \"prev_page_url\": null,\n\t    \"from\": 1,\n\t    \"to\": 1,\n\t    \"data\": [\n\t      {\n\t        \"title\": \"打针竟然改在肠道中进行\",\t// 视频标题\n\t        \"issue\": \"第118期\",\t\t\t\t\t// 期数\n\t        \"thumb_path\": \"http://uploads2.b0.upaiyun.com///vb/vb1506045098.jpg\",\t// 图片路径\n\t        \"type_code_website\": null,\t\t\t// 来自网站\n\t        \"link\": \"XMzAzODM0NzczNg\"\t\t\t// 视频连接\n\t      }\n\t    ]\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V2/ProgramController.php",
    "groupTitle": "program",
    "name": "GetProgram"
  }
] });

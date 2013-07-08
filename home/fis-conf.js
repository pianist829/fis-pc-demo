fis.config.merge({
    namespace : 'home',
    modules : {
        //编译器插件配置节点
        parser : {
            //使用fis-parser-marked插件编译md后缀文件
            md : 'marked'
        }
    }
});
//增加对md文件的roadmap.path配置
fis.config.get('roadmap.path').unshift({
    //md文件
    reg : '**.md',
    //发布到/template/目录下
    release : '/template/${namespace}$&'
});

//增加对md文件的roadmap.ext配置
fis.config.get('roadmap.ext')['md'] = 'html';

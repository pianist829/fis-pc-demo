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
//取出对roadmap.path的配置，返回值为数组
fis.config.get('roadmap.path').unshift({
    //md文件
    reg : '**.md',
    //发布到/template/目录下
    release : '/template/${namespace}$&'
});
//如想新增某条配置，则对roadmapPath进行操作,如增加配置对md后缀文件的产出路径处理

fis.config.get('roadmap.ext')['md'] = 'html';

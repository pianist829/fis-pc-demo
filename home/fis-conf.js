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
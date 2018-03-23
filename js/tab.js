//使用单例模式
var tabRender = (function () {
    var $tabBox = $('#tabBox'),
        $tabList = $tabBox.find('.tab>li'),
        $conList = $tabBox.children('.con'),
        _default = {
            initIndex : 0,
            eventType : 'click'
        };

    function initDeafult() {
        console.log(1);
        $tabList.removeClass('select');
        $conList.removeClass('select');
        $tabList.eq(_default.initIndex).addClass('select');
        $conList.eq(_default.initIndex).addClass('select');
    }

    //=>给所有的Li绑定点击事件
    function bindEvent(){
        /*$tabList.click(function () {
        });*/
        $tabList.on(_default.eventType,function () {
            //=>this：当前点击的这个Li 链式写法
            var $this = $(this),
                _index = $this.index();
            $this.addClass('select')
                .siblings().removeClass('select');
           /* $conList.each(function (index,item) {
                //=>this:item
                var $item = $(item)
                if(_index === index){
                    $item.addClass('select');
                }else{
                    $item.remove('select');
                }
            });*/
           $conList.eq(_index).addClass('select')
               .siblings().removeClass('select');
        })
    }
    return {
        init:function (options) {
            //=>init parameters
            if(typeof options !== 'undefined'){
                $.each(options,function (key,value) {
                    if(options.hasOwnProperty(key)){
                        _default[key] = value;
                    }
                });
            }
            initDeafult();
            bindEvent();
        }
    }
})();
tabRender.init({
    initIndex:1
});
~function ($) {
    function pluginTab(options) {
        //=>this:当前你想让哪个选项卡实现切换，this就是当前选项卡的容器
        var $tabBox = this,
            $tabList = $tabBox.find('.tab>li'),
            $conList = $tabBox.children('.con'),
            //init parameters
            _default = {
                initIndex : 0,
                eventType : 'click'
            };
        options && $.each(options,function (key,value) {
            if(options.hasOwnProperty(key)){
                _default[key] = value;
            }
        });
        //=>show default
          change(_default.initIndex);
          //=>bind event
        $tabList.on(_default.eventType,function () {

            var $this = $(this),
               _index = $this.index();
            change(_index);
        });

        function change(index) {
            $tabList.eq(index).addClass('select')
                .siblings().removeClass('select');
            $conList.eq(index).addClass('select')
                .siblings().removeClass('select')
        }
        //扩展到JQ的原型上供实例使用
    }
    $.fn.extend({
        pluginTab:pluginTab
    });
}(jQuery);

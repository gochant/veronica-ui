(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        root.ver_ajaxUtil = factory(jQuery);
    }
}(this, function ($) {
    return function (app) {

        var ajaxUtil = {};

        // ��ĳ����ͼ�µ���������ת��ΪAjax��������
        ajaxUtil.ajaxifyLink = function (context) {
            var $el = context.$el;
            $el.find('[href]').on('click', function (e) {
                var $this = $(this);
                if ($this.data('noajaxify')) {
                    return;
                } else {
                    e.preventDefault();
                    var url = $this.attr('href');
                    var method = $this.data('ajaxify');
                    method = method || '_linkHandler';
                    context[method](url);
                }
            });
        }

        return ajaxUtil;
    };
}));

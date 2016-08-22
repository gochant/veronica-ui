define(function () {

    return function (app) {
        app.uiKit.add('keboacy', {
            init: function (view, $el) {

            },
            destroy: function (view) {
                // ���ٸ�����µ�kendo�ؼ�
                if (window.kendo) {
                    _.each(view.$('[data-role]'), function (el) {
                        var inst = kendo.widgetInstance($(el));
                        inst && inst.destroy();
                    });
                }
            },
            getInstance: function (view, $el) {
                return kendo.widgetInstance($el);
            }
        });
    };
});

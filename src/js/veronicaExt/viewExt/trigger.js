define([
], function () {
    return function (base, app) {
        var _ = app.core._;
        var $ = app.core.$;

        base._extendMethod('_rendered', function () {
            this.options.autoST && this.setTriggers();
        });

        base._extend({
            options: {
                autoST: false,
                toolbar: 'toolbar',
                defaultToolbarTpl: '.tpl-toolbar'
            },
            methods: {
                /**
                 * 设置触发器
                 * @param {string} [toolbarTpl=options.defaultToolbarTpl] - 工具条选择器
                 * @returns void
                 * @fires View#setTriggers
                 */
                setTriggers: function (toolbarTpl) {
                    toolbarTpl || (toolbarTpl = this.options.defaultToolbarTpl);

                    /**
                     * **消息：** 设置触发器
                     * @event View#setTriggers
                     * @param {string} html - 工具条模板
                     * @param {string} name - 目标名称
                     * @param {View} view - 当前视图
                     */
                    this.pub('setTriggers', this.$(toolbarTpl).html(),
                        this.options.toolbar || this._name, this);
                }
            }
        });
    }
});

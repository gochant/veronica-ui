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
                 * ���ô�����
                 * @param {string} [toolbarTpl=options.defaultToolbarTpl] - ������ѡ����
                 * @returns void
                 * @fires View#setTriggers
                 */
                setTriggers: function (toolbarTpl) {
                    toolbarTpl || (toolbarTpl = this.options.defaultToolbarTpl);

                    /**
                     * **��Ϣ��** ���ô�����
                     * @event View#setTriggers
                     * @param {string} html - ������ģ��
                     * @param {string} name - Ŀ������
                     * @param {View} view - ��ǰ��ͼ
                     */
                    this.pub('setTriggers', this.$(toolbarTpl).html(),
                        this.options.toolbar || this._name, this);
                }
            }
        });
    }
});

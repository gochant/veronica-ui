define([
], function () {
    return function (base, app) {
        var _ = app.core._;
        var $ = app.core.$;

        var ext = {
            options: {
                autoResize: false
            },
            methods: {
                /**
                 * **`��д`** ��д�÷�����ʹ��ͼ����Ӧ���֣������� `autoResize` �󣬴��ڴ�С�仯ʱ���÷����ᱻ���ã�
                 * ����б�Ҫ���ڸ÷�����Ӧ��д���ڴ�С�仯ʱ������ͼ��Ӧ�Ĵ����߼�
                 * @type {function}
                 */
                resize: function () {

                }
            }
        }

        base._extendMethod('_setup', function () {
            if (this.options.autoResize) {
                $(window).on('resize', this.resize);
            }
        });

        base._extendMethod('_rendered', function () {
            if (this.options.autoResize) {
                _.defer(this.resize);
            }
        });

        base._extendMethod('_destroy', function () {
            // ������ȫ��ע����¼�������
            this.options.autoResize && $(window).off('resize', this.resize);
        });

        base._extend(ext);
    }
});

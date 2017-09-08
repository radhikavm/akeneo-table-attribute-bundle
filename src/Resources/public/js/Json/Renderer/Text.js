define(
    [
        'flagbit/JsonGenerator/Observer'
    ],
    function(JsonGeneratorObserver) {

        /**
         * @class
         */
        var JsonGeneratorRendererText = function($editable, $container) {

            /**
             * @public
             * @type {JsonGeneratorObserver}
             */
            this.observer = new JsonGeneratorObserver();

            /**
             * @public
             * @param {Object} $data
             */
            this.render = function($data) {
                console.log("Rendering Text");
                var $text = document.createElement('span');
                $text.innerText = 'There is any configuration option for text';
                $container.appendChild($text);
            };

            /**
             * @public
             * @param {Object} $data
             */
            this.read = function() {
                return {};
            };

        };

        return JsonGeneratorRendererText;
    }
);
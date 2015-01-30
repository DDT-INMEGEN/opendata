function register_download(path) {
    w2popup.open({
        title   : 'Popup',
        width   : 400,
        height  : 400,
        body    : '<div style="margin-bottom: 1.3em; margin-top: 1em">Porfa regístrese para descargar <em>' + path + '</em></div><div id="download_form"></div>',
        onOpen  : function (event) {
            event.onComplete = function () {

                $('#download_form').w2form({ 
                    name   : 'download_form',
                    fields : [
                        { name: 'first_name', type: 'text', required: true, html: {caption: 'Nombre'} },
                        { name: 'last_name',  type: 'text', required: true, html: {caption: 'Apellidos' } },
                        { name: 'email',  type: 'email', required: true, html: {caption: 'Correo Electrónico' } },
                        { name: 'email_repeat',  type: 'email', required: true, html: {caption: 'Confirmar Correo' } },
                        { name: 'org',  type: 'text', required: true, html: {caption: 'Institución' } },
                        { name: 'comments',   type: 'textarea', html: {caption: 'Comentarios' }}
                    ],
                    onAction: function(event) {
                        if (event['target'] == 'save') {
                            if (this.record['email'] != this.record['email_repeat']) {
                                this.error('Verifique su correo electrónico.');
                                event.preventDefault();
                            }
                        }
                    },
                    actions: {
                        reset: function () {
                            this.clear();
                        },
                        save: function () {
                            errors = this.validate(showErrors=true);
                            if (errors.length==0) {
                                this.lock();
                                this.record['path'] = path
                                $.ajax({
                                    type: "POST",
                                    url: "/register",
                                    data: JSON.stringify( this.record ),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    error: function(errMsg) {
                                        this.error("AJAX error" + errMsg.responseText);
                                    },
                                    success: function( oid ) {
                                        w2ui['download_form'].destroy();
                                        w2popup.open({
                                            title   : 'Popup Title HTML',
                                            body    : 'Gracias. Liga de descarga: '+ oid['oid'],
                                            width   : 400,
                                            height  : 100
                                        });
                                    }});
                            }
                        }
                    }
                }); // form
            } // on complete
        }, // on open
    }); // pop up
}


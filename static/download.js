var path = 'affy100k';

$(function () {
    $('#download_form').w2form({ 
        name   : 'download_form',
        fields : [
            { name: 'first_name', type: 'text', required: true, html: {caption: 'Nombre' } },
            { name: 'last_name',  type: 'text', required: true, html: {caption: 'Apellidos' } },
            { name: 'email',  type: 'email', required: true, html: {caption: 'Correo Electrónico' } },
            { name: 'email_repeat',  type: 'email', required: true, html: {caption: 'Confirmar Correo' } },
            { name: 'comments',   type: 'textarea', html: {caption: 'Comentarios' }}
        ],
        actions: {
            reset: function () {
                this.clear();
            },

            save: function () {
                if (this.record['email'] == this.record['email_repeat']) {
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
                            console.log(oid['status']);
                            w2popup.open({
                                title   : 'Descargar de acá',
                                body    : 'Body HTML ' + oid['status'],
                            });
                            console.log('redirigiendo a ' + oid);
                        }
                    });

                } else {
                    this.error('No coinciden las direcciones de correo electrónico provistas.a');
                }
            }
        }

    });
});

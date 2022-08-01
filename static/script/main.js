var listaDados = []

$(document).ready(function() {
    $('#btnImportar').on('click', function() {
        var fd = new FormData();
        var files = $('#file')[0].files;
        var textArea = $('#textArea').val();

        // Check file selected or not
        if (textArea != '') {
            listRow = textArea.split('\n');

            var str_html = '<table class="table table-sm table-striped" style="font-size: 12px; font-family: Arial, Helvetica, sans-serif;">';

            if (listRow.length > 0) {
                listaDados = []
                firstElement = listRow[0].replaceAll(';', ',').split(',');

                str_html += '<thead><tr>';

                firstElement.forEach(element => {
                    str_html += '<th scope="col">' + element + '</th>';
                });
                listaDados.push(firstElement);

                listRow.shift()

                str_html += '</tr></thead>';

                str_html += '<tbody>';
                listRow.forEach(element => {
                    listaElement = element.replaceAll(';', ',').split(',')

                    str_html += '<tr>';

                    listaElement.forEach(element => {
                        str_html += '<td>' + element + '</td>';
                    });
                    str_html += '</tr>';

                    listaDados.push(listaElement);
                });
                str_html += '</tbody>';

                str_html += '</table>'

                $('#divTable').css('height', '400px');
                $('#divTable').html(str_html);
            }


        } else if (files.length > 0) {
            listaDados = []
            fd.append('file', files[0]);

            $.ajax({
                url: '/upload_file',
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function(result) {
                    var str_html = '<table class="table table-sm table-striped" style="font-size: 12px; font-family: Arial, Helvetica, sans-serif;">';

                    //header
                    str_html += '<thead><tr>';
                    header = result.result.listaTable[0]
                    header.forEach(element => {
                        str_html += '<th scope="col">' + element + '</th>';
                    })
                    listaDados.push(header);
                    str_html += '<tr></thead>';

                    //Body
                    str_html += '<tbody>';
                    listBody = result.result.listaTable
                    listBody.shift()
                    listBody.forEach(row => {
                        str_html += '<tr>';

                        row.forEach(element => {
                            str_html += '<td>' + element + '</td>';
                        });
                        str_html += '</tr>';

                        listaDados.push(row);
                    })
                    str_html += '</tbody>';

                    str_html += '</table>'

                    $('#divTable').css('height', '400px');
                    $('#divTable').html(str_html);



                },
            });

        } else {
            alert("Please select a file.");
        }

    });


    $('#btnExecutar').on('click', function() {
        var atributoTarget = '';
        var metricaAvaliacao = '';

        if ($("input[name='atributoTarget']:checked").val() == 'yes') {
            atributoTarget = 'yes'
        } else {
            atributoTarget = 'no'
        }

        if ($("input[name='metricaAvaliacao']:checked").val() == 'acc') {
            metricaAvaliacao = 'acc'
        } else {
            metricaAvaliacao = 'f1'
        }

        console.log('Chegou aqui hihi');
        console.log(atributoTarget);
        console.log(metricaAvaliacao);
        var data = {
            'atributoTarget': atributoTarget,
            'metricaAvaliacao': metricaAvaliacao
        }
        console.log(data)

        var fd = new FormData();
        fd.append('atributoTarget', JSON.stringify(atributoTarget));
        fd.append('metricaAvaliacao', JSON.stringify(metricaAvaliacao));
        fd.append('listaDados', JSON.stringify(listaDados));

        $.ajax({
            url: '',
            type: 'POST',
            contentType: false,
            //contentType: 'application/json; charset=utf-8',
            data: fd,
            processData: false,
            success: function(result) {
                console.log('result');
                console.log(result);


                if (result.result.atributoTarget == 'yes') {
                    metricaAvaliacao = result.result.metricaAvaliacao == 'acc' ? 'Acurácia' :
                        result.result.metricaAvaliacao == 'f1' ? 'F1 Score' : 'None';

                    resultado = 'O score final na métrica ' + metricaAvaliacao + ' foi de ' + result.result.score + '%';

                    alert(resultado);

                }

                var previsoes = JSON.stringify(result.result.previsoes).replace('[', '').replace(']', '');

                var a = document.createElement("a");
                const blob = new Blob([previsoes], { type: "octet/stream" });
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = "previsoes.csv";
                a.click();
                window.URL.revokeObjectURL(url);


            }
        });

    });

    $("#divTarget input:radio").click(() => {

        if ($("input[name='atributoTarget']:checked").val() == 'yes') {
            $('#divMetrica').css('visibility', 'visible');
        } else {
            $('#divMetrica').css('visibility', 'hidden');
        }


    });


});
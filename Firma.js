
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orden de Trabajo - Instalación de Servicios</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            max-width: 800px;
        }
        h2 {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        .signature-section {
            margin-top: 20px;
        }
        .signature-box {
            border: 1px solid #000;
            width: 100%;
            height: 120px;
            cursor: crosshair;
        }
        .clear-btn {
            margin-top: 5px;
            padding: 5px 10px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h2>Orden de Trabajo - Instalación de Servicios</h2>

    <table>
        <tr>
            <th>Fecha de Instalación</th>
            <td><input type="date"></td>
        </tr>
        <tr>
            <th>Técnico Asignado</th>
            <td><input type="text" placeholder="Nombre del técnico"></td>
        </tr>
        <tr>
            <th>Cliente</th>
            <td><input type="text" placeholder="Nombre del cliente"></td>
        </tr>
        <tr>
            <th>Dirección</th>
            <td><input type="text" placeholder="Dirección de instalación"></td>
        </tr>
        <tr>
            <th>Servicios Instalados</th>
            <td>
                <input type="checkbox"> Internet Fijo <br>
                <input type="checkbox"> Televisión <br>
                <input type="checkbox"> Otro: <input type="text" placeholder="Especificar">
            </td>
        </tr>
        <tr>
            <th>Observaciones</th>
            <td><textarea rows="3" placeholder="Notas adicionales"></textarea></td>
        </tr>
    </table>

    <div class="signature-section">
        <div>
            <strong>Confirmación del Cliente:</strong><br>
            Yo CLIENT_NAME Declaro que la instalación de los servicios por parte del personal tecnico de COMPANY_NAME se ha realizado correctamente y me encuentro satisfecho con la instalación realizada
Declaro que, despues de una inspección cuidadosa, no se han producido daños ni afectaciones a otros servicios domiciliarios, a la estructura de la vivienda ni a nigun bien material.

Acepto la instalación del servicio y declaro estar satisfecho con la calidad del trabajo realizado.
        </div>

        <div>
            <label>Firma del Cliente:</label>
            <canvas id="firmaCliente" class="signature-box"></canvas>
            <button class="clear-btn" onclick="clearCanvas('firmaCliente')">Limpiar</button>
        </div>

        <div>
            <label>Firma del Técnico:</label>
            <canvas id="firmaTecnico" class="signature-box"></canvas>
            <button class="clear-btn" onclick="clearCanvas('firmaTecnico')">Limpiar</button>
        </div>
    </div>

    <script>
        function initCanvas(canvasId) {
            let canvas = document.getElementById(canvasId);
            let ctx = canvas.getContext("2d");
            let painting = false;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            function startPosition(e) {
                painting = true;
                draw(e);
            }

            function endPosition() {
                painting = false;
                ctx.beginPath();
            }

            function draw(e) {
                if (!painting) return;

                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                ctx.strokeStyle = "black";

                let rect = canvas.getBoundingClientRect();
                let x = (e.clientX || e.touches[0].clientX) - rect.left;
                let y = (e.clientY || e.touches[0].clientY) - rect.top;

                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            }

            canvas.addEventListener("mousedown", startPosition);
            canvas.addEventListener("mouseup", endPosition);
            canvas.addEventListener("mousemove", draw);

            canvas.addEventListener("touchstart", startPosition);
            canvas.addEventListener("touchend", endPosition);
            canvas.addEventListener("touchmove", draw);
        }

        function clearCanvas(canvasId) {
            let canvas = document.getElementById(canvasId);
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        window.onload = function() {
            initCanvas("firmaCliente");
            initCanvas("firmaTecnico");
        };
    </script>

</body>
</html>
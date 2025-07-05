function buscarCanal() {
    const user = document.getElementById('usuario').value.trim();
    if (!user) {
        document.getElementById('canal-output').innerText = "Por favor ingresa un nombre de canal.";
        return;
    }
    // Simulación
    document.getElementById('canal-output').innerHTML =
        `<b>Canal encontrado:</b> ${user}<br>
         <b>Plataforma:</b> ${user.includes("twitch") ? "Twitch" : "YouTube"}<br>
         <b>Suscriptores:</b> ${Math.floor(Math.random()*1000000)+10000}<br>
         <b>Vistas totales:</b> ${Math.floor(Math.random()*50000000)+50000}`;
}

function mostrarStats() {
    document.getElementById('stats-output').innerHTML =
      `<b>Crecimiento semanal:</b> +${Math.floor(Math.random()*9000)+1000} suscriptores<br>
       <b>Ranking nacional:</b> #${Math.floor(Math.random()*200)+1}<br>
       <b>Videos subidos este mes:</b> ${Math.floor(Math.random()*20)+1}<br>
       <b>Engagement promedio:</b> ${Math.floor(Math.random()*80)+10}%`;
}

function generarMiniatura() {
    const tema = document.getElementById('miniatura-tema').value;
    document.getElementById('miniatura-output').innerText =
      tema ? `Usa colores brillantes, texto grande y rostro expresivo para el video de "${tema}".`
           : "Introduce el tema para generar una miniatura.";
}

function generarTitulo() {
    const tema = document.getElementById('titulo-tema').value;
    if (!tema) {
        document.getElementById('titulo-output').innerText = "Introduce el tema para sugerir títulos.";
        return;
    }
    const titulos = [
      `¡${tema} explicado en 5 minutos!`,
      `Todo sobre ${tema}: guía definitiva`,
      `¿Vale la pena ${tema}? Mi experiencia`
    ];
    document.getElementById('titulo-output').innerText = titulos.join('\n');
}

function generarDescripcion() {
    const tema = document.getElementById('descripcion-tema').value;
    document.getElementById('descripcion-output').innerText =
      tema ? `En este video te cuento todo sobre ${tema} y cómo aprovecharlo al máximo. ¡Dale like y suscríbete!`
           : "Introduce el tema para generar la descripción.";
}

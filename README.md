Amigo Secreto

Esta aplicación web interactiva permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para determinar quién es el "amigo secreto". Además, cada jugador en la lista puede ser eliminado individualmente, y el ganador se muestra con un efecto visual llamativo (texto con gradiente arcoíris).

Características

- Agregar nombres: Los usuarios ingresan el nombre de un amigo en el campo de texto y hacen clic en el botón Añadir para agregarlo a la lista.
- Validación de entrada: Se verifica que el campo de texto no esté vacío antes de agregar el nombre. Si está vacío, se muestra una alerta pidiendo que se inserte un nombre.
- Visualización de la lista: Los nombres ingresados se muestran en una lista en la página. Cada nombre en la lista incluye un botón de eliminación (×) para borrarlo sin recargar la página.
- Sorteo aleatorio: Al hacer clic en el botón Sortear amigo, se selecciona aleatoriamente uno de los nombres de la lista y se muestra un mensaje con el ganador. El mensaje incluye el sticker 🎉 y el nombre del ganador se muestra con un efecto de letras en colores de gradiente.

Estructura del proyecto

index.html  
Contiene la estructura HTML de la aplicación y enlaza con los archivos CSS y JavaScript.

style.css  
Incluye estilos para la aplicación, con diseño responsivo y efectos visuales (como el gradiente para el ganador y los estilos para el botón de eliminación).

app.js  
Contiene la lógica de la aplicación. Se encarga de capturar y validar el ingreso de nombres, actualizar la lista de amigos en la interfaz, implementar el sorteo aleatorio y permitir la eliminación individual de nombres de la lista.

assets/  
Carpeta que almacena las imágenes utilizadas en el proyecto (por ejemplo, el ícono de sorteo y la imagen representativa de Amigo Secreto).

Cómo utilizar la aplicación

1. Abrir el proyecto: Abre el archivo index.html en tu navegador preferido.
2. Agregar amigos: Escribe el nombre de un amigo en el campo de texto y haz clic en el botón Añadir. El nombre se agregará a la lista visible en la página.
3. Eliminar un amigo (opcional): Si deseas eliminar un nombre de la lista, haz clic en la × ubicada en la esquina superior derecha del elemento.
4. Realizar el sorteo: Una vez que tengas al menos un nombre en la lista, haz clic en el botón Sortear amigo. Se seleccionará aleatoriamente un nombre y se mostrará el mensaje con el ganador, acompañado del efecto de letras en gradiente.

Personalización y extensiones

Puedes ajustar el estilo visual modificando el archivo style.css, por ejemplo, para cambiar el gradiente o la posición del botón de eliminación.  
La lógica del sorteo y la gestión del array de amigos se encuentran en app.js, lo que permite extender o modificar la funcionalidad según tus necesidades.

Conclusión

Este proyecto es ideal para eventos de intercambio de regalos y reuniones, facilitando de forma divertida la selección de un amigo secreto.

Disfruta!

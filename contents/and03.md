# Miniproyecto

## Creación de Actividades

1. Para empezar, crearemos 3 botones y acomodaremos sus tamaños para que ocupen todo el ancho.

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso01.JPG" />



2. Ahora crearemos una nueva actividad, para eso haremos click derecho en la carpeta de nuestro proyecto y escogeremos New/Other...

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso02.JPG" />


3. Escogemos en Android/Android Activity

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso03.JPG" />


4. Escogeremos una actividad en blanco:

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso04.JPG" />


5. Y le damosun nombre y al boton Finish.

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso05.JPG" />



Una ves echo esto, tendremos  tendremos 2 nuevos archivos, el `Listar.java` y el `Activity_listar.xml` que estarán enlazados.

6. Ahora en nuestro Main_Activity.java  creamos la función `listarVista` para poder empezar una nueva actividad (una nueva pantalla, vista o como quieras llamarla) , donde declaramos un `Intent` que será un mediador para empezar un nuevo activity que al instanciarlo en su segundo paramentro, recibe el nombre de nuetra vista (`Listar.class`) y luego llamamos a la función `starActivity` donde le pasamos nuestro Intent creado para empezar el nuevo activity.


<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso06.JPG" />



8. Y en el archivo `activity_main.xml`, en nuestro boton listar declaramos que al hacer click, llame a la función `listarVista`

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso07.JPG" />



9. Ahora modificaremos el archivo `activity_listar.xml` para que se vea así:


<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso09.JPG" /> 



11. Dentro del archivo `listar.java` Tambíen crearemos un boton para volver al activity anterior, así que crearemos una función que se llame `finalizar`, y ahí llamaremos a la función `finish` para cerrar esa actividad y continuar en el activity que estabamos. 

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso10.JPG" />




Y también le decimos que el boton al hacer click, llame a la función `finalizar`


<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso09.JPG" />



11. Ahora debemos notar que al hacer click en nuestro botón, este llamará al nuevo activity.


<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso11.JPG" />



Al correr nuestra app deberiamos ver algo así:

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/gif01.gif" />




## Pasar datos entre actividades con Bundle'

1.  Para esto crearemos  un objeto Bundle en nuestra función `listarVista` del archivo `main.java`
2.  Ahí es donde le pasaremos los datos que queremos mandar a otro Activity como se ve en la siguiente imagen:

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso13.JPG" />



3. Una vez enviada, devemos recibirla en el Activity que necesitamos esa información, por lo que ahí tambien necesitaremos del objeto **Bundle**

<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso12.JPG" />




Y verémos que nuestros datos viajan entre Activities


<br>


<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/gif02.gif" />


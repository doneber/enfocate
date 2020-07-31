---
name: 'Miniproyecto en Android'
title: Creacion de proyecto con Android
year: 18 Julio 2020
color: 'green'
trans: 'Create a proyect with android'
id: 'miniproyect-android'
description: |
  Vamos creando un proyecto en android básico para principiantes y no principiantes
---

# Miniproyecto

### Puntos más importantes:

 - Creacion de Actividades (`Actívities`)
 - Manejo de datos con Bundle

## Creación de Actividades

1. Para empezar, crearemos 3 botones y acomodaremos sus tamaños para que ocupen todo el ancho.

![Activity Main](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso01.JPG)

<br>

2. Ahora crearemos una nueva actividad, para eso haremos click derecho en la carpeta de nuestro proyecto y escogeremos New/Other...

![Nueva Actividad](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso02.JPG)

<br>

3. Escogemos en Android/Android Activity

![Nueva Actividad](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso03.JPG)

<br>

4. Escogeremos una actividad en blanco:

![Nueva Actividad en blanco](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso04.JPG)

<br>

5. Y le damosun nombre y al boton Finish.

![Nueva Actividad nombre](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso05.JPG)

<br>

Una ves echo esto, tendremos  tendremos 2 nuevos archivos, el `Listar.java` y el `Activity_listar.xml` que estarán enlazados.

6. Ahora en nuestro Main_Activity.java  creamos la función `listarVista` para poder empezar una nueva actividad (una nueva pantalla, vista o como quieras llamarla) , donde declaramos un `Intent` que será un mediador para empezar un nuevo activity que al instanciarlo en su segundo paramentro, recibe el nombre de nuetra vista (`Listar.class`) y luego llamamos a la función `starActivity` donde le pasamos nuestro Intent creado para empezar el nuevo activity.

```java
	public void listarVista(View vista){
    	Intent v = new Intent(this, Listar.class); //Creamos la vista
    	startActivity(avion);
	}
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso06.JPG)

7. Y en el archivo `activity_main.xml`, en nuestro boton listar declaramos que al hacer click, llame a la función `listarVista`

```xml
    <Button
        android:id="@+id/button1"	
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="listarVista"
        android:text="Listar" />
    <Button
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso07.JPG)

8. Ahora modificaremos el archivo `activity_listar.xml` para que se vea así:

<img style="max-width:100%" src="https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso09.JPG" /> 

9. Dentro del archivo `listar.java` Tambíen crearemos un boton para volver al activity anterior, así que crearemos una función que se llame `finalizar`, y ahí llamaremos a la función `finish` para cerrar esa actividad y continuar en el activity que estabamos. 

```java
	public void finalizar (View vista){
		finish();
	}
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso10.JPG)

Y también le decimos que el boton al hacer click, llame a la función `finalizar`

```xml
    <Button
        android:id="@+id/button2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="finalizar"
        android:text="Volver" />
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso11.JPG)

Al correr nuestra app deberiamos ver algo así:

![ver gif](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/gif01.gif)

<br>

## Pasar datos entre actividades con Bundle'

1.  Para esto crearemos  un objeto Bundle en nuestra función `listarVista` del archivo `main.java`
2.  Ahí es donde le pasaremos los datos que queremos mandar a otro Activity como se ve en la siguiente imagen:

```java
	public void listarVista(View vista){
    	Intent avion = new Intent(this, Listar.class); //Creamos la vista
    	
    	Bundle caja = new Bundle();
    	caja.putString("nombre", p.getNombre());
    	
    	avion.putExtras(caja);
    	startActivity(avion);
	}
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso13.JPG)



3. Una vez enviada, devemos recibirla en el Activity que necesitamos esa información, por lo que ahí tambien necesitaremos del objeto **Bundle**
```java
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_listar);		
		try {
			Bundle cajaRecibida = this.getIntent().getExtras();
			String nombreRecibido = cajaRecibida.getString("nombre");
			EditText ed = (EditText) findViewById(R.id.editText1);
			ed.setText(nombreRecibido);	
			
		} catch (Exception e) {
			EditText ed = (EditText) findViewById(R.id.editText1);
			ed.setText("Hubo un  error al cargar los datos, intente mas tarde.");
		}		
	}
```

[Ver captura de pantalla](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/paso12.JPG)

Y verémos que nuestros datos viajan entre Activities

![ver gif](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase03/gif02.gif)


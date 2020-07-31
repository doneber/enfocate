---
name: 'Aplicación de Sumas'
title: Aplicación de Sumas
year: 7 Julio 2020
color: 'green'
trans: 'Sum App'
id: 'android02'
description: |
  Crearemos una simple aplicación donde manejaremos distitos componenentes utilizados en Android
---


### Objetivo
> Crear una aplicación Android que nos permita sumar 2 números

### Contenido
1. Creación del proyecto
2. Planificación
3. Desarrollo de la vista
4. Desarrollo de la lógica

### Recomendaciones
1. Conocimentos de programación básica
2. Tener instalado los programas necesarios (ADT y AVM)


## 1. Creación del proyecto
Creamos un nuevo proyecto en Android
Si aún no sabes como, puedes ver esta seccion

[Parte 1 Android](https://enfocate.tech/android/and01)

## 2. Desarrollo de la vista
Hacemos un diseño de la pantalla (es decir, botones, espacios de texto, espacios para recibir texto etc)


# Sobre la interfaz


![](https://github.com/doneber/POO/blob/master/Resources/clase02/estructura01.jpg?raw=true)


1. (Rojo) Ahí encontraremos una paleta de diferentes componentes que tenemos disponibles para nuestra APP
2. (Azul) Aquí podemos ver la estructura de nuestros componentes y sus respectivas propiedades
3. (Verde) Esta parte solo nos permite previsualizar de forma ligera nuestra app e ir agregando diferentes componentes
4. (Amarillo) Aquí podremos manejar la interfaz en su código XML
5. (Lila) Esta parte nos guiará para degubbear nuestro programa y ver otros datos de la app


## Paso 1

Lo primero que haremos es eliminar el texto que viene por defecto



![](https://github.com/doneber/POO/blob/master/Resources/clase02/paso01.jpg?raw=true)



## Paso 2


Luego cambiamos el layout por defecto haciendo click en cualquier parte de la previsualizacion de nuestra aplicación


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso02.jpg)


## Paso 3 (Configuración del Layout)


Y escogemos la orientación Vertical


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso03.jpg)


## Paso 4 (EditText)


En la parte de la paleta de componentes veremos varios accesorios en diferentes carpetas (explóralos!). Para esta ocasión arrastraremos uno hacia la pantalla para poder usarlo


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso04.jpg)


Como haremos una sumadora, necesitaremos 2, asi que arrastra 2

## Paso 5 (Button)

Tambien necesitaremos Botones


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso05.jpg)


## Paso 6 (TextViews)


Tambien necesitaremos un lugar para mostrar el resultado de la suma, entonces usaremos 


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso06.jpg)



## Paso 7 (Editar la propiedad)


Algo que también queremos hacer es cambiar el texto por defecto, entonces en la parte derecha podremos hacerlo, remplazándolo por lo que queramos (en este caso nada)


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso07.jpg)



Y con eso tendriamos algo para defendernos
# Desarrollo de la lógica del programa
Ahora debemos darle funcionalidad a nuestros componentes de android.
## Paso 8 (Abramos el archivo .java)
Nos ubicaremos en el archivo MainActivity.java y lo abriremos


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso08.jpg)


## Paso 9 (Creación de una función)


Para este paso crearemos una función llamada **suma**:

```java
public  void  suma(View  vista){
    EditText  et1 =(EditText) findViewById(R.id.editText1);
    EditText  et2=(EditText) findViewById(R.id.editText2);
    String  numStr1 = et1.getText().toString();
    String  numStr2 = et2.getText().toString();
    int  num1 = Integer.parseInt(numStr1);
    int  num2 = Integer.parseInt(numStr2);
    int  suma = num1+num2;
    String  sumaStr = String.valueOf(suma);
    TextView  resultado = (TextView) findViewById(R.id.textView1);
    resultado.setText(sumaStr);
}
```

Tal como vemos en la imagen


![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso09.jpg)


## Paso 10 (Función a un botón)


Ahora volvamos al archivo .xml y hagamos el siguiente cambio en la parte que dice `Button` .

```java
android:onClick="suma"
```

Tal como en la imagen:

![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso10.jpg)

Y listo!
Ya deberiamos poder correr y probar el programa.
Haciendolo correr deberemos tener:

![](https://raw.githubusercontent.com/doneber/POO/master/Resources/clase02/paso11.jpg)
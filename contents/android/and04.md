---
title: Creacion de proyecto con Android 2
year: 20 Julio 2020
icon: 'mdi-text-box-outline'
block: false
description: |
  Vamos creando un proyecto en android con Persistencia de objetos con archivos
---

# Miniproyecto parte 2
- Clases serializadas
- Permisos
- Persistencia de archivos

Primero hacemos uan vista en el `Activity_main.xml` como se ve en la imagen:

![Vistas](https://raw.githubusercontent.com/doneber/POO/master/Resources/android/clase04/layout.JPG)

Ahora para la Persistencia de Objetos debemos tomar muy en cuenta ***los permisos de la app *** para poder crear y leer archivos.
Para esto nos ubicaremos en el archivo `manifest.xml`
```xml
  <manifest  xmlns:android="http://schemas.android.com/apk/res/android" 
			 package="com.example.snazzyapp">  
			 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
       <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
			 <!-- other permissions go here -->
			 <application ...> 
			 </application>
	</manifest>
```
Otra cosa que debemos tomar en cuenta es que nuestras clases que queremos guardar en los archivos implementen de ***serializacion***
Esto se hace agregando `implements Serializable` e importandolo
```java
package com.example.myapplication;
import java.io.Serializable;

public class Persona implements Serializable {
    private String nombre;
    private String ci;
    public Persona(){
        this.nombre="";
        this.ci= "";
    }
    public Persona(String nom, String ci){
        this.nombre= nom;
        this.ci= ci;
    }
    public String  getCi(){
        return this.ci;
    }
    public String getNombre(){
        return this.nombre;
    }
}
```
Una vez hecho esto ya podemos implenetar persistencia de objetos con archivos en nuestra App!
En general las acciones mas importantes  son en famoso CRUD:
- **C**: Create (crear)
- **R**: Read (Leer)
- **U**: Update (Actualizar)
- **D**: Delete (Eliminar)

Para esto necesitaremos de nuestra clase `ArchivoPersona.java`:

`ArchivoPersona.java:`
```java
package com.example.myapplication;
import android.os.Environment;
import java.io.*;

public class ArchivoPersona {
        private String nombre;
        public ArchivoPersona(String nombre) {
            this.nombre = nombre;
        }
        public void agregar(String nombreNuevo, String ciNuevo) throws FileNotFoundException, IOException {
            String ruta = Environment.getExternalStorageDirectory().getAbsolutePath();
            File f1 = new File(this.nombre);
            if(!f1.exists()){
                ObjectOutputStream archivo1 = new ObjectOutputStream(new FileOutputStream(this.nombre));
                archivo1.close();
            }
            ObjectOutputStream copiaArchivo = new ObjectOutputStream( new FileOutputStream(ruta+"/archivoCopia.txt") );
            ObjectInputStream archivo = new ObjectInputStream(new FileInputStream(this.nombre));

            try {
                while(true){
                    Persona p = (Persona) archivo.readObject();
                    copiaArchivo.writeObject(p);
                }
            } catch (Exception e) {
                copiaArchivo.writeObject(new Persona(nombreNuevo,ciNuevo));
                copiaArchivo.close();
                archivo.close();
                File f2 = new File(ruta,"archivoCopia.txt");
                f1.delete();
                f2.renameTo(f1);

            }
        }
        public String listar() throws FileNotFoundException, IOException{
            String res="";
            File f1 = new File(this.nombre);
            if(!f1.exists()){
                ObjectOutputStream archivo1 = new ObjectOutputStream(new FileOutputStream(this.nombre));
                archivo1.close();
            }
            ObjectInputStream archivo = new ObjectInputStream(new FileInputStream(this.nombre));
            try {
                while(true){
                    Persona p = (Persona) archivo.readObject();
                    res += p.getNombre()+" "+p.getCi() + ".\n";
                }
            } catch (Exception e) {
                archivo.close();
            }
            return res;
        }
}
```

Para el agregar un objeto modificaremos en `MainActivity.java`

```java
	//...
    public void btnAgregar(View vista) throws FileNotFoundException, IOException {
        String nombreNuevo = ((EditText)findViewById(R.id.editText2)).getText().toString();
        String ciNuevo = ((EditText)findViewById(R.id.editText)).getText().toString();
        try {
            pArchi.agregar(nombreNuevo,ciNuevo);
            Toast.makeText(this, "Agregado",Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            Toast.makeText(this, "Error al agregar",Toast.LENGTH_SHORT).show();
        }
	//...
```
Para listar los objetos modificaremos en `MainActivity.java`
```java
	//...
	public void btnListar(View vista) throws FileNotFoundException, IOException {
        TextView t = findViewById(R.id.texto);
        try {
            String res = pArchi.listar();
            t.setText(res);
            Toast.makeText(this, "Listado",Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            Toast.makeText(this, "Error al listar",Toast.LENGTH_SHORT).show();
        }
    }
	//...
```

Ya solo es cuestion de darle funcionalidad a los botones creados y darle a la aplicacion persmisos de manejos de archivos si fuese necesario (en la configuración de la app)

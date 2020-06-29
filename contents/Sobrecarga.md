# Sobrecarga de métodos y operadores

Dada la el siguiete diagrama de clases: 
<img width="100%" src="https://github.com/doneber/POO/blob/master/Resources/OS-Program.JPG?raw=true"/>


Donde las filas de ***programas*** son <***nom***, ***tipo***, ***fecha***, ***tamaño***> donde:
| a | n |
|--|--|
| ***tipo*** | se refiere a si es con licencia o sin licencia |
| ***fecha*** | tiene el formato de dd/mm/aaaa |
&nbsp;


**Ejercicio:**
Sea un objeto Sistema_Operativo y un objeto Programa
- Instanciar un objeto Sistema Operativo y un objeto Programa, mostrar datos

Sobrecargar un método y un operador para:

- Mostrar los programas de menor tamaño del Sistema Operativo
- Determine cuantos y que programas del SistemaOperativo tienen el mismo año del objeto programa
- Instalar (Adicionar) el objeto programa (no necesita licencia, instalado en fecha de su defensa y su tamaño es 250MB) en el SistemaOperativo si y solo si este programa no se encuentre, si se encontrara adicionar 2 nuevos programas.
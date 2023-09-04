      ******************************************************************
      * Author: Enriquez Ignacio
      * Date: 2/6/2023
      * Purpose: Traer Datos de un Archivo .Dat
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. MOSTRAR-LISTA.

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.

       FILE-CONTROL.
           SELECT OPTIONAL EMPLEADOS-ARCHIVO
           ASSIGN TO "D:/Backup-Cobol/empleados.dat"
           ORGANIZATION IS LINE SEQUENTIAL .

       DATA DIVISION.
       FILE SECTION.
       FD EMPLEADOS-ARCHIVO.
       01 EMPLEADO-REGISTRO.
           05 WS-EMPLEADOS-LEGAJO PIC X(11).
           05 WS-EMPLEADOS-SECTOR PIC X(5).
           05 WS-EMPLEADOS-HORAS-TRABAJADAS PIC 99.

       WORKING-STORAGE SECTION.
       01 PRESENTACION.
           05 CT-TEXTO-LEGAJO PIC X(8) VALUE "LEGAJO :".
           05 WS-TEMPORAL-LEGAJO PIC 9(6).
           05 CT-TEXTO-SECTOR PIC X(9)
           VALUE " SECTOR :".
           05 WS-TEMPORAL-SECTOR PIC X(3).
           05 CT-TEXTO-HORAS-TRABAJADAS PIC X(19)
           VALUE " HORAS TRABAJADAS :".
           05 WS-TEMPORAL-HORAS-TRABAJADAS PIC 99.

       01  WS-FIN-DEL-ARCHIVO PIC X VALUE "1".
       01  WS-MAXIMO-REGISTROS PIC 99 VALUE ZEROES.
       01  WS-GUARDA-ENTER PIC X.


       PROCEDURE DIVISION.

           EMPIEZA-PROGRAMA.
           PERFORM APERTURA-ARCHIVO.
           PERFORM LEE-SIGUIENTE-REGISTRO.
           PERFORM MUESTRA-REGISTROS UNTIL WS-FIN-DEL-ARCHIVO = "0".
           PERFORM CIERRE-ARCHIVO.
           PERFORM CALCULAR-PROMEDIO.
           PERFORM PRESENTACION.
           PROGRAM-DONE.
           STOP RUN.

           APERTURA-ARCHIVO.
           OPEN INPUT EMPLEADOS-ARCHIVO.

           CIERRE-ARCHIVO.
           CLOSE EMPLEADOS-ARCHIVO.

           MUESTRA-REGISTROS.
           PERFORM MUESTRA-CAMPOS.
           PERFORM LEE-SIGUIENTE-REGISTRO.

           MUESTRA-CAMPOS.
           IF WS-MAXIMO-REGISTROS = 10
           PERFORM PULSAR-ENTER.
           MOVE WS-EMPLEADOS-LEGAJO TO WS-TEMPORAL-LEGAJO.
           MOVE WS-EMPLEADOS-SECTOR TO WS-TEMPORAL-SECTOR.
           MOVE WS-EMPLEADOS-HORAS-TRABAJADAS
           TO WS-TEMPORAL-HORAS-TRABAJADAS.
           DISPLAY PRESENTACION.
           ADD 1 TO WS-MAXIMO-REGISTROS.

           LEE-SIGUIENTE-REGISTRO.
           READ EMPLEADOS-ARCHIVO NEXT RECORD
           AT END MOVE "0" TO WS-FIN-DEL-ARCHIVO.




       END PROGRAM MOSTRAR-LISTA.

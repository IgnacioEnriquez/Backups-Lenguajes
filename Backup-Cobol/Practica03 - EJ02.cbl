      ******************************************************************
      * Author: Enriquez Ignacio
      * Date: 2/6/2023
      * Purpose: Cobol Training Practice
      * Tectonics: cbl
      ******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. EJERCICIO02-ENRIQUEZ.
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT OPTIONAL EMPLEADOS-ARCHIVO
           ASSIGN TO "D:/Backup-Cobol/empleados.dat"
           ORGANIZATION IS LINE SEQUENTIAL.

       DATA DIVISION.
       FILE SECTION.
       FD EMPLEADOS-ARCHIVO.
       01 EMPLEADO-REGISTRO.
           05 WS-EMPLEADOS-LEGAJO PIC X(11).
           05 WS-EMPLEADOS-SECTOR PIC X(5).
           05 WS-EMPLEADOS-HORAS-TRABAJADAS PIC 99.

       WORKING-STORAGE SECTION.
       01 AC-HORAS-TRABAJADAS PIC 9(10) VALUE ZEROES.
       01 CN-CANTIDAD-DE-EMPLEADOS PIC 9(4) VALUE ZEROES.
       01 WS-PROMEDIO-HORAS PIC 9(10) VALUE ZEROES.
       01 PRESENTACION.
           05 TEXTO-PROMEDIO PIC X(16) VALUE "EL PROMEDIO ES :".
           05 WS-TEMPORAL-PROMEDIO PIC 9(6).
           05 TEXTO-CANT-EMPLEADOS PIC X(31)
           VALUE "CANTIDAD DE EMPLEADOS TOTALES :".
           05 WS-TEMPORAL-CANT-EMPLEADOS PIC 9(3).
           05 TEXTO-HORAS-TRABAJADAS PIC X(27)
           VALUE "TOTAL DE HORAS TRABAJADAS :".
           05 WS-TEMPORAL-HORAS-TRABAJADAS PIC 9(6).

       01  WS-FIN-DEL-ARCHIVO PIC X VALUE "1".

       PROCEDURE DIVISION.
       MAIN-PROCEDURE.

           INICIO-PROGRAMA.
           PERFORM APERTURA-ARCHIVO.
           PERFORM LEE-SIGUIENTE-REGISTRO.
           PERFORM ACUMULO-DATOS UNTIL WS-FIN-DEL-ARCHIVO = "0".
           PERFORM CERRAR-ARCHIVO.
           PERFORM CALCULAR-PROMEDIO.
           PERFORM MOSTRAR-DATOS.
           PROGRAM-DONE.
           STOP RUN.

           APERTURA-ARCHIVO.
           OPEN INPUT EMPLEADOS-ARCHIVO.

           CERRAR-ARCHIVO.
           CLOSE EMPLEADOS-ARCHIVO.

           LEE-SIGUIENTE-REGISTRO.
           READ EMPLEADOS-ARCHIVO NEXT RECORD
           AT END MOVE "0" TO WS-FIN-DEL-ARCHIVO.

           ACUMULO-DATOS.
           ADD WS-EMPLEADOS-HORAS-TRABAJADAS TO AC-HORAS-TRABAJADAS
           GIVING AC-HORAS-TRABAJADAS.

           ADD 1 TO CN-CANTIDAD-DE-EMPLEADOS
           GIVING CN-CANTIDAD-DE-EMPLEADOS.

           PERFORM LEE-SIGUIENTE-REGISTRO.

           CALCULAR-PROMEDIO.
           DIVIDE AC-HORAS-TRABAJADAS BY CN-CANTIDAD-DE-EMPLEADOS
           GIVING WS-PROMEDIO-HORAS.

           MOSTRAR-DATOS.
           MOVE WS-PROMEDIO-HORAS TO WS-TEMPORAL-PROMEDIO.
           MOVE CN-CANTIDAD-DE-EMPLEADOS TO WS-TEMPORAL-CANT-EMPLEADOS.
           MOVE AC-HORAS-TRABAJADAS TO WS-TEMPORAL-HORAS-TRABAJADAS.
           DISPLAY PRESENTACION.
           PERFORM CALCULAR-PROMEDIO.



       END PROGRAM EJERCICIO02-ENRIQUEZ.

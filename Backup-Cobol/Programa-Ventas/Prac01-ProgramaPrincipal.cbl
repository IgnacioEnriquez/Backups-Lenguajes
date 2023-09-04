     ******************************************************************
      * Author:
      * Date:
      * Purpose:
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. PROGRAMA-PRINCIPAL.

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT OPTIONAL VENTAS-ARCHIVO
           ASSIGN TO "D:/Backup-Cobol/Programa-Ventas/ventas.dat"
           ORGANIZATION IS LINE SEQUENTIAL .

       DATA DIVISION.
       FILE SECTION.
       FD VENTAS-ARCHIVO.
       01 ARCHIVO-REGISTRO.
           05 WS-ARCHIVO-CANT-VENTAS    PIC 9(04)V99.
           05 FILLER            PIC X(20).

       WORKING-STORAGE SECTION.
       01 TABLA-DATOS-A-ENVIAR.
          05  CN-i               PIC 9(03) VALUE 0.
          05 TABLA-REGISTROS OCCURS 100 TIMES DEPENDING ON CN-i.
               10 WS-CANT-VENTAS  PIC 9(04)V99 VALUE ZEROES.

       01  WS-FIN-DEL-ARCHIVO PIC X VALUE "1".

       LINKAGE SECTION.

       PROCEDURE DIVISION.
           MAIN-PROCEDURE.
           PERFORM ABRIR-ARCHIVO.
           PERFORM LEE-SIGUIENTE-REGISTRO.
           PERFORM GUARDAR-REGISTROS UNTIL WS-FIN-DEL-ARCHIVO = "0"
           OR CN-i = 100.
           PERFORM CERRAR-ARCHIVO.
           CALL "YOUR-PROGRAM".
           STOP RUN.


           ABRIR-ARCHIVO.
           OPEN INPUT VENTAS-ARCHIVO.

           CERRAR-ARCHIVO.
           CLOSE VENTAS-ARCHIVO.

           LEE-SIGUIENTE-REGISTRO.
           READ VENTAS-ARCHIVO NEXT RECORD
           AT END MOVE "0" TO WS-FIN-DEL-ARCHIVO.

           GUARDAR-REGISTROS.
           ADD 1 TO CN-i.
           ADD WS-ARCHIVO-CANT-VENTAS TO WS-CANT-VENTAS(CN-i)
           GIVING WS-CANT-VENTAS(CN-i)
           PERFORM LEE-SIGUIENTE-REGISTRO.

       END PROGRAM PROGRAMA-PRINCIPAL.

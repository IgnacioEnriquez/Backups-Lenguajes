      ******************************************************************
      * Author: Enriquez Ignacio
      * Date: 6/6/2023
      * Purpose:
      * Tectonics: cobc
      ******************************************************************
       IDENTIFICATION DIVISION.
       PROGRAM-ID. PRUEBA-TABLAS.
       DATA DIVISION.
       FILE SECTION.
       WORKING-STORAGE SECTION.
       01 WKS-DATOS-TRAB OCCURS 5 TIMES.
           02 WKS-NOMBRE-TRAB PIC X(50).
           02 WKS-APELL-PAT   PIC X(50).
           02 WKS-APELL-MAT   PIC X(50).
           02 WKS-SALARIO     PIC S9(05)V99.
           02 WKS-ID-TRAB     PIC 9(2).

       77 WKS-FIN             PIC 9 VALUE 1.
       77 WKS-SAL-FORMATO     PIC ZZZZ9.99.

       PROCEDURE DIVISION.
           0000-PRINCIPAL.
            DISPLAY "NOMINA TRABAJADORES".
            PERFORM 00001-CAPTURA-TRAB UNTIL WKS-FIN > 5.
            MOVE 1 TO WKS-FIN.
            PERFORM 00002-CONSULTA-TRAB UNTIL WKS-FIN > 5.
            STOP RUN.


           00001-CAPTURA-TRAB.
           DISPLAY "NOMBRE DEL EMPLEADO :".
           ACCEPT WKS-NOMBRE-TRAB(WKS-FIN).
           DISPLAY "APELLIDO PATERNO DEL EMPLEADO :".
           ACCEPT WKS-APELL-PAT(WKS-FIN).
           DISPLAY "APELLIDO MATERNO DEL EMPLEADO :".
           ACCEPT WKS-APELL-MAT(WKS-FIN).
           DISPLAY "SALARIO DEL EMPLEADO :".
           ACCEPT WKS-SALARIO(WKS-FIN).

           ADD 1 TO WKS-ID-TRAB(WKS-FIN),
                    WKS-FIN.

           00002-CONSULTA-TRAB.
               DISPLAY "ID :" WKS-ID-TRAB(WKS-FIN).
               DISPLAY "NOMBRE : " WKS-NOMBRE-TRAB(WKS-FIN).
               DISPLAY "APELLIDOS : " WKS-APELL-PAT(WKS-FIN),
                                      WKS-APELL-PAT(WKS-FIN).
               MOVE WKS-SALARIO(WKS-FIN) TO WKS-SAL-FORMATO.
               DISPLAY "SALARIO : " WKS-SAL-FORMATO.
               ADD 1 TO WKS-FIN.


       END PROGRAM PRUEBA-TABLAS.

# AGENTE 0069
El agente 0069 lleva años utilizando un método de codificación de mensajes secretos. Si X es el
mensaje original, éste se codifica en dos etapas:

  1. X se transforma en X’ reemplazando cada sucesión de caracteres consecutivos que no sean vocales por su imagen especular.
  2. X’ se transforma en la sucesi´on de caracteres X” obtenida al ir tomando sucesivamente: el primer carácter de X’, luego el ´ultimo, luego el segundo, luego el pen´ultimo, etc.

Por ejemplo, para X = "Bond, James Bond", resultan:
X’ = "BoJ ,dnameB sodn"  y  X” = "BnodJo s, dBneam

## Sistema de Encriptación X’
Este sistema se basa en darle la vuelta (como si lo estuvieras mirando por un espejo) a aquellas cadena de caracteres que no sean vocales (incluyendo espacios).

Enctiptación:

APPLE

{A} {PPL} {E}

damos la vuelta como si lo estuvieramos viendo en un espejo, pero separadolos aquellas lineas o caracteres que no sean vocales

RESULTADO:

{A} {LPP} {E}

ALPPE

## Sistema de Encriptación X’’
Por ultimo lugar la encriptación realizada por X’’ consiste en realizar una cadena de caracteres pero comenzando con el primer caracter de la frase, después el ultimo, y luego el sgundo, seguido del penultimo... y asi sucesivamente hasta terminar la frase

Encriptación:

A  L  P  P  E

1  3  5  4  2


RESULTADO

A E L P P

1 2 3 4 5

Una vez sabemos esto, procedemos a traducir ambos algoritmos a codigo, despues juntamos para que funcionen de manera conjunta siendo X’ la primera encriptación a realizar, y X’’ el ultimo paso.

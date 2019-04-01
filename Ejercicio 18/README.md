# TASCA 18: Exercici 1 XPath

Donat el següent document XML, escriu les expressions XPath que retornin la resposta desitjada dels diferents apartats que hi trobaràs:
```
<?xml version="1.0" encoding="UTF-8"?>

<ies>
  <nombre>IES Abastos</nombre>
  <web>http://www.iesabastos.org</web>
  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2009" />
    </ciclo>
    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2010" />
    </ciclo>
    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo año="2008" />
    </ciclo>
  S</ciclos>
</ies>
```
**Apartat 1:**
```
<nombre>IES Abastos</nombre>
```
**Apartat 2:**

http://www.iesabastos.org

**Apartat 3:**
Administración de Sistemas Informáticos en Red
Desarrollo de Aplicaciones Web
Sistemas Microinformáticos y Redes

**Apartat 4:**
```
id="ASIR"
id="DAW"
id="SMR"
```

**Apartat 5:**
```
año="2009"
año="2010"
año="2008"
```
**Apartat 6: Resol aquest apartat de 2 formes diferents, amb un únic pas de cerca i amb 2 passos de cerca.**
```
<ciclo id="SMR">
  <nombre>Sistemas Microinformáticos y Redes</nombre>
  <grado>Medio</grado>
  <decretoTitulo año="2008"/>
</ciclo>
```
**Apartat 7: Resol aquest exercici de 2 formes diferents, en un únic pas de cerca i amb 2 passos de cerca.**
```
<nombre>Administración de Sistemas Informáticos en Red</nombre>
<nombre>Desarrollo de Aplicaciones Web</nombre>
```
**Apartat 8: Resol aquest exercici de 2 formes diferents, en un únic pas de cerca i amb 2 passos de cerca.**
Administración de Sistemas Informáticos en Red
Sistemas Microinformáticos y Redes

**Apartat 9: Resol aquest exercici de 2 formes diferents, en un únic pas de cerca i amb 2 passos de cerca.**
Desarrollo de Aplicaciones Web
Sistemas Microinformáticos y Redes

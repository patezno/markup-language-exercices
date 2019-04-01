# TASCA 20: Exercici 1 XSLT

Donat el següent document XML, escriu les fulles d’estil XSLT que retornen la resposta desitjada (mirar apartats):
```
<?xml version="1.0" encoding="UTF-8"?>
<ies nombre="IES Abastos" web="http://www.iesabastos.org/" >
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
  </ciclos>
</ies>
```

**Apartat 1: Volem obtenir aquest resultat:**
```
<?xml version="1.0" encoding="UTF-8"?>
Administración de Sistemas Informáticos en Red
Desarrollo de Aplicaciones Web
Sistemas Microinformáticos y Redes
```
**Apartat 2: Volem obtenir aquest resultat:**
```
<?xml version="1.0" encoding="UTF-8"?>
<html>
  <p>Administración de Sistemas Informáticos en Red</p>
  <p>Desarrollo de Aplicaciones Web</p>
  <p>Sistemas Microinformáticos y Redes</p>
</html>
```
**Apartat 3:**
```
<?xml version="1.0" encoding="UTF-8"?>
<html>
  <ul>
    <li>Administración de Sistemas Informáticos en Red</li>
    <li>Desarrollo de Aplicaciones Web</li>
    <li>Sistemas Microinformáticos y Redes</li>
  </ul>
</html>
```
**Apartat 4:**
```
<?xml version="1.0" encoding="UTF-8"?>
<html>
  <table border="1">
    <tr>
      <td>Administración de Sistemas Informáticos en Red</td>
    </tr>
    <tr>
      <td>Desarrollo de Aplicaciones Web</td>
    </tr>
    <tr>
      <td>Sistemas Microinformáticos y Redes</td>
    </tr>
  </table>
</html>
```

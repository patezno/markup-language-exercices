# TASCA 19: Exercici 2 XPath

Donat el següent document XML, escriu les expressions XPath
que retornin la resposta desitjada:
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
</ciclos>
<modulos>
  <modulo id="0228">
    <nombre>Aplicaciones web</nombre>
    <curso>2</curso>
    <horasSemanales>4</horasSemanales>
    <ciclo>SMR</ciclo>
  </modulo>
  <modulo id="0372">
    <nombre>Gestión de bases de datos</nombre>
    <curso>1</curso>
    <horasSemanales>5</horasSemanales>
    <ciclo>ASIR</ciclo>
  </modulo>
  <modulo id="0373">
    <nombre>Lenguajes de marcas y sistemas de gestión de información</nombre>
    <curso>1</curso>
    <horasSemanales>3</horasSemanales>
    <ciclo>ASIR</ciclo>
    <ciclo>DAW</ciclo>
  </modulo>
  <modulo id="0376">
    <nombre>Implantación de aplicaciones web</nombre>
    <curso>2</curso>
    <horasSemanales>5</horasSemanales>
    <ciclo>ASIR</ciclo>
  </modulo>
  </modulos>
</ies>
```

**Apartat 1: Nom dels mòduls del cicle “Sistemas Microinformáticos y Redes” (en l’expressió final no deuen apareixer les segles SMR)**

Aplicaciones web

**Apartat 2: Nom dels cicles que no inclouen el mòdul “Lenguajes de marcas y sistemas de gestión de información”**

Administración de Sistemas Informáticos en Red

Desarrollo de Aplicaciones Web

**Apartat 3: Nom dels mòduls de cicles de Grau Superior:**

Gestión de bases de datos

Lenguajes de marcas y sistemas de gestión de información

Implantación de aplicaciones web

**Apartat 4: Nom dels mòduls de cicles el títol dels quals es va aprovar en 2008:**

Aplicaciones web

**Apartat 5: Grau dels cicles amb mòduls de primer curs:**

Superior

Superior

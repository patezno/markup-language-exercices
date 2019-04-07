<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="xml" indent="yes"/>

  <xsl:strip-space elements="*"/>

  <xsl:template match="ciclos">
    <html>
      <xsl:apply-templates />
    </html>
  </xsl:template>

  <xsl:template match="ciclo">
    <xsl:for-each select="nombre">
      <p><xsl:value-of select="."/></p>
    </xsl:for-each>
  </xsl:template>

</xsl:stylesheet>

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="xml" indent="yes"/>

    <xsl:strip-space elements="*" />

    <xsl:template match="/">
        <html>
            <table border="1">
                <xsl:apply-templates/>
            </table>
        </html>
    </xsl:template>

    <xsl:template match="ciclo">
        <xsl:for-each select="nombre">
            <tr>
                <td><xsl:value-of select="."/></td>
            </tr>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>

# jquery.chosenHtml

Erweitert das jQuery-Addon chosen (https://github.com/harvesthq/chosen)

### Verwendung:
Binde Chosen und jQuery in deine Seite ein. (Wie im Projekt Chosen beschrieben)
Kopiere jquery.chosenhtml.js in deine Seite und binde es ein.

Benutzer nun anstelle von $('select).chosen(optionen); 
$('select).chosenHtml(chosenOptions, htmlOptions); 

### Optionen:
chosenOptions       Dieses Objekt wird an chosen weitergegeben,
                    Die möglichen Optionen kannst du auf der Seite
                    https://github.com/harvesthq/chosen entnehmen
htmlOptions         Object mit den Einstellungen für chosenHtml
                    attr_html           Attribut-Name in dem der HTML-Text steht
                                        Default: data-html
                    attr_tooltip        Attribut-Name in dem der Text für einen Tooltip steht
                                        Default: data-tooltip
                    attr_tooltip_to     Attribut-Name in das der Tooltip-Text in den Chosen results kopiert werden soll
                                        Default: title
                    init_tooltip        Wenn ein Tooltip übernommen wurde, muß dieser mit einer Tooltip-Funktion initialisiert                     werden
                                        Default: function(e) {
                                            $(e).tooltip();
                                        }
                                        
### Beispiel:
<select>
    <option data-html="<b>HTML</b> text" value="0">Plain Text</option>
</select>
<script>
$('select').chosenHtml();
</script>

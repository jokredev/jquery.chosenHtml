# jquery.chosenHtml

Erweitert das jQuery-Addon chosen (https://github.com/harvesthq/chosen)

### Verwendung:
Binde Chosen und jQuery in deine Seite ein. (Wie im Projekt Chosen beschrieben)
Kopiere jquery.chosenhtml.js in deine Seite und binde es ein.

Benutze nun anstelle von 
```javascript
//$('select').chosen(optionen); 
$('select').chosenHtml(chosenOptions, htmlOptions); 
```

### Optionen:
#### chosenOptions
Option | Typ | Beschreibung
------------ | ------------ | -------------
chosenOptions|object|Dieses Objekt wird an chosen weitergegeben. (Die möglichen Optionen kannst du auf der Seite https://github.com/harvesthq/chosen) entnehmen


#### htmlOptions
Option | Typ | Beschreibung
------------ | ------------ | -------------
attr_html | <addr>string</addr> `default: data-html` | Attribut-Name in dem der HTML-Text steht 
attr_tooltip | <addr>string</addr> `default: data-tooltip` | Attribut-Name in dem der Text für einen Tooltip steht
attr_tooltip_to | <addr>string</addr> `default: title` | Attribut-Name in das der Tooltip-Text in den Chosen results kopiert werden soll
init_tooltip | <addr>function</addr> `default: javascript function(e) { $(e).tooltip(); } ` | Wenn ein Tooltip übernommen wurde, muß dieser mit einer Tooltip-Funktion initialisiert werden

### Beispiel:

```html
<select>
    <option data-html="<b>HTML</b> text" value="0">Plain Text</option>
</select>
<script>
$('select').chosenHtml();
</script>
```html

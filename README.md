# WhereToWatch

#Situation
Man möchte einen Film oder eine Serie schauen. Bei der großen Auswahl an Streaming 
Diensten mitlerweile weiß man aber nicht mehr wo der Film oder die Serie verfügbar ist. 
Oder man weiß noch nicht was man schauen möchte und möchte Streaming Dienst 
übergreifend sehen was aktuell angesagt ist.

WhereToWatch setzt genau da an.

#Pages

#LandingPage/Homescreen
Hier landet der Nutzer nach dem Start der App. Der Nutzer wird individuell begrüßt und 
bekommt die aktuell angesagten Filme und Serien vorgeschlage.
Umgesetzt durch einen https://api.themoviedb.org/3/trending/all/day Aufruf.
Wenn ein interessanter Film/Serie unter den Vorschlägen dabei ist kann der Nutzer diese 
antippen und landet auf der Results Page. Homescreen übergibt Results den Title des Films oder der Serie.
Wenn der Nutzer eine spezielle Serie oder einen spieziellen Film sucht kann er über den 
Suchbutton in der unteren Bildschirmhälfte weiter zur Suche.


#Search
Klassisch sitzt die Suchbar am oberen Bildschirmrand.
Ab drei Buchstaben wird ein Api Request gemacht um Vorschläge anzuzeigen.
Umgesetzt durch den https://api.themoviedb.org/3/search/multi Aufruf.
Bei jedem neuen Buchstaben werden die Vorschläge aktualisiert.
Wenn der gewünschte Vorschlag in der Liste auftaucht kann der Nutzer diesen antippen
und landet auf der Results Page
Search übergibt Results den Title des Films oder der Serie.

#Results
Hier sieht der Nutzer Informationen über den Film oder die Serie welcher er ausgewählt hat.
Die Information welcher Streaming Dienst diese Serie oder Film im Angebot hat steht im 
Vordergrund. Der Nutzer hat sein Ziel erreicht. 
Umgesetzt durch den https://streaming-availability.p.rapidapi.com/v2/search/title Aufruf.



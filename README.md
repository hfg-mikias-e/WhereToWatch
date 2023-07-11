# WhereToWatch

#Situation

Man möchte einen Film oder eine Serie schauen. Bei der großen Auswahl an Streaming
Diensten mittlerweile weiß man aber nicht mehr, wo der Film oder die Serie verfügbar ist.
Oder man weiß noch nicht, was man schauen möchte und möchte Streaming Dienst
übergreifend sehen, was aktuell angesagt ist.

WhereToWatch setzt genau da an.

#Pages


#LandingPage/Homescreen

Hier landet der Nutzer nach dem Start der App. Der Nutzer wird individuell begrüßt und
bekommt die aktuell angesagten Filme und Serien vorgeschlagen.
Umgesetzt durch einen https://api.themoviedb.org/3/trending/all/day Aufruf.
Falls ein interessanter Film/Serie unter den Vorschlägen dabei ist, kann der Nutzer diese
antippen und landet auf der Results Page. Homescreen übergibt Results den Title des Films oder der Serie.
Möchte der Nutzer eine spezielle Serie oder einen spieziellen Film suchen kann er über den
Suchbutton in der unteren Bildschirmhälfte weiter zur Suche.

#Search

Klassisch sitzt die Suchbar am oberen Bildschirmrand.
Ab drei Buchstaben wird ein Api Request gemacht, um Vorschläge anzuzeigen.
Umgesetzt durch den https://api.themoviedb.org/3/search/multi Aufruf.
Bei jedem neuen Buchstaben werden die Vorschläge aktualisiert.
Sobald der gewünschte Vorschlag in der Liste auftaucht, kann der Nutzer diesen antippen
und landet auf der Results Page
Search übergibt Results den Title des Films oder der Serie.

#Results

Hier sieht der Nutzer Informationen über den Film oder die Serie, welcher er ausgewählt hat.
Die Information, welcher Streaming-Dienst diese Serie oder Film im Angebot hat, steht im
Vordergrund. Der Nutzer hat sein Ziel erreicht.
Umgesetzt durch den https://streaming-availability.p.rapidapi.com/v2/search/title Aufruf

#APIs


#The Movie Database API

The Movie Database (TMDB) ist eine von der Community aufgebaute Film- und TV-Datenbank.
Diese API nutzen wir für die generellen Film-/Seriendaten.
Poster, Title, Beschreibung, Erscheinungsdatum usw.
Wir nutzen die Search und die Trending Befehle.
Begrenzung auf 40 Aufrufe innerhalb von 10 Sekunden.
Kein monatliches Limit.

#Streaming Availability API

Die Streaming Availability API wird bei Rapid API zur Verfügung gestellt und
wurde von dem Nutzer Movie-of-the-Night veröffentlicht.
Diese API nutzen wir für die Liste der verfügbaren Streamingdienste.
Wir nutzen den Search Befehl der API.
Diese API greift auf die Datenbank der The Movie Database API zu.
1000 freie Aufrufe am Tag sind für das Testen ausreichend, aber für die
Ausstellung wurde Premium für einen Monat bezahlt. Der Monat wurde am 1
0.07.23 gekauft. Mit Premium sind 10000 Aufrufe am Tag möglich.


Die App WhereToWatch wurde von Mikias Ehrmann, Lars Grasmann und Matteo Scholz entwickelt.

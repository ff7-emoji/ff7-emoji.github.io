f = open("data.txt", "r", encoding="utf-8")
o = open("../data.js", "w", encoding="utf-8")
d = f.read()
o.write('data="'+d.replace('\r','').replace('\n','\\n')+'"\n')
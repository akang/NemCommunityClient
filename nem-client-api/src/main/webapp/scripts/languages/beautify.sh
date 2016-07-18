
for f in *.js; do
	js-beautify -t $f > $f.xxx
done

for f in *.js; do
	mv $f.xxx $f
done

for f in *.js; do
	grep ":" $f | sed "s/\([^:]*\).*/\1/" > $f.xxx
done

for f in *.xxx; do
	diff -u english.js.xxx $f
done

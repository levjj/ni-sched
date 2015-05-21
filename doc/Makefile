TEX=pdflatex -interaction=nonstopmode
MAIN=main

all: clean build

clean:
	rm -f *.aux *.log $(MAIN).pdf *.bbl *.blg *.brf *.fdb_latexmk *.out *.idx *.lof *.lol *.lot *.toc *.acn *.acr *.glg *.glo *.gls *.ilg *.dvi *.alg *.ist *.ind

build:
	$(TEX) $(MAIN).tex
	bibtex $(MAIN).aux
	$(TEX) $(MAIN).tex
	$(TEX) $(MAIN).tex

watch:
	nodemon -e .tex -w . -x $(TEX) $(MAIN).tex

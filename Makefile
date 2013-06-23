SOURCES := $(wildcard extension/*)

all: zip

zip: $(SOURCES)
	zip -r pinterest-me-not.zip extension

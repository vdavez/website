hyphen:= -
empty:=
space:= $(empty) $(empty)
SLUGTITLE:= $(subst $(space),$(hyphen),$(TITLE))

serve:
	@hugo serve -D

new:
	@hugo new posts/$$(date +%Y-%m-%d)-$(SLUGTITLE).md

clean:
	@git checkout main && git branch | grep -v '^*' | xargs git branch -d

.PHONY: serve new clean

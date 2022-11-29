hyphen:= -
empty:=
space:= $(empty) $(empty)
SLUGTITLE:= $(subst $(space),$(hyphen),$(TITLE))

serve:
	@hugo serve -D

new:
	@hugo new posts/$$(date +%Y-%m-%d)-$(SLUGTITLE).md

.PHONY: serve new

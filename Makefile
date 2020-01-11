serve:
	@hugo serve -D

new:
	@hugo new posts/$$(date +%Y-%m-%d)-$(TITLE).md

.PHONY: serve new

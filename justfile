# Hugo site automation commands

# Show available commands (default)
default:
    @just --list

# Serve the site with drafts enabled
serve:
    hugo serve -D

# Create a new blog post with today's date (usage: just new "My Post Title")
new title:
    #!/usr/bin/env bash
    slug=$(echo "{{title}}" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
    hugo new posts/$(date +%Y-%m-%d)-$slug.md

# Clean up local git branches (keep main, delete others)
clean:
    git checkout main && git branch | grep -v '^*' | xargs -r git branch -d

# Build the site for production
build:
    hugo --minify

# Build and serve production version locally
serve-prod: build
    cd public && python3 -m http.server 8080

# Quick deploy to production (customize for your deployment)
deploy: build
    echo "Add your deployment commands here (rsync, git push, etc.)"

# Show recent posts
recent:
    ls -la content/posts/ | tail -10

# Install and setup pre-commit hooks
setup-precommit:
    uv tool install pre-commit
    pre-commit install
    pre-commit install --hook-type commit-msg

# Run all pre-commit hooks on all files
check:
    pre-commit run --all-files

# Update pre-commit hook versions
update-hooks:
    pre-commit autoupdate

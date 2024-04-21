# Makefile for packaging the project. DO NOT EDIT THIS UNLESS YOU KNOW WHAT YOU ARE DOING
# GNU Make 4.4
# Built for x86_64-pc-msys
# Copyright (C) 1988-2022 Free Software Foundation, Inc.
# License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
#===================================================================================

# Allow only one "make -f Makefile2" at a time, but pass parallelism
.NOTPARALLEL:

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE)
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands
$(VERBOSE).SILENT:

#===================================================================================

.DEFAULT_GOAL := help

UNAME := $(shell uname)

define HELP_BODY
Usage:
  make <command>

Commands:
  build                      Build docker image.
  run                        Run existing docker image.
  prune                      Prune unused docker images.
endef
export HELP_BODY

build:
	docker build -t storyweb .
.PHONY: build

run:
	docker run -p 3000:3000 storyweb
.PHONY: run

prune:
	docker system prune -a
.PHONY: prune

help:
	@echo "$$HELP_BODY"
.PHONY: help
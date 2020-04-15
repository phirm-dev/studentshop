#! /usr/bin/env bash

kops create cluster --name=kubernetes.phirmware.me --state=s3://kops-state-3249 --zones=eu-central-1a --node-count=2 --node-size=t2.micro --master-size=t2.micro --dns-zone=kubernetes.phirmware.me 
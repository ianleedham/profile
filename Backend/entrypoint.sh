#!/bin/bash
set -e
run_cmd="dotnet watch -p BriansBlog run"

dotnet restore

until dotnet ef -s BriansBlog -p BriansBlog database update; do
>&2 echo "DB is starting up"
sleep 1
done

>&2 echo "DB is up - executing command"

exec $run_cmd


#!/bin/bash

# 检查 docs/ 目录是否有文件变化
if git diff --quiet HEAD^ HEAD -- docs; then
  echo "No changes in docs directory, skipping build."
  exit 0
else
  echo "Changes detected in docs directory, proceeding with build."
  exit 1
fi
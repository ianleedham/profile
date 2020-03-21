#! /bin/bash
# exit script when any command ran here returns with non-zero exit code
set -e

COMMIT_SHA1=$CIRCLE_SHA1

# We must export it so it's available for envsubst
export COMMIT_SHA1=$COMMIT_SHA1

# since the only way for envsubst to work on files is using input/output redirection,
#  it's not possible to do in-place substitution, so we need to save the output to another file
#  and overwrite the original with that one.
# envsubst <./kube/do-sample-deployment.yml >./kube/do-sample-deployment.yml.out
# mv ./kube/do-sample-deployment.yml.out ./kube/do-sample-deployment.yml

echo $DOCKER_KEY > key.pem
echo $DOCKER_CERT > cert.pem
echo $DOCKER_CA > ca.pem

docker \
  -H=$DOCKER_SERVER \
  --tlscacert=ca.pem \
  --tlskey=key.pem \
  --tlscert=cert.pem \
  --tlsverify
  info

echo $IMAGE_NAME:$CIRCLE_SHA1
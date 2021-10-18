#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./generated/

PROTOC_GEN_TS_PATH="D:\Fontys\PROEP\Orders-Status-Service\node_modules\.bin\protoc-gen-ts.cmd"

echo ${PROTOC_GEN_TS_PATH}
mkdir -p ${PROTO_DEST}

    # --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
# JavaScript code generation
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    -I ./proto/ \
    proto/*/*.proto

# TypeScript code generation
npx protoc \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --ts_out=${PROTO_DEST} \
    -I ./proto/ \
    proto/*/*.proto
    
cd ${PROTO_DEST}
jsTypeData='{"type": "commonjs"}'
echo $jsTypeData > package.json
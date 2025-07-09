#!/usr/bin/env sh
set -eu

# 1) make sure we pick up node_modules/.bin
export PATH="$(pwd)/node_modules/.bin:$PATH"

PROTO_DIR="src/grpc/proto"
OUT_DIR="src/grpc/build"

echo "🔍 Using protoc:    $(command -v protoc || echo 'NOT FOUND')"
echo "🔍 Using ts-proto:  $(command -v protoc-gen-ts_proto || echo 'NOT FOUND')"

# 2) sanity check
command -v protoc >/dev/null 2>&1 \
  || { echo "❌ protoc not installed – install protobuf-compiler or grpc-tools"; exit 1; }
command -v protoc-gen-ts_proto >/dev/null 2>&1 \
  || { echo "❌ protoc-gen-ts_proto not installed – run npm install --save-dev ts-proto"; exit 1; }

# 3) clean & prepare output folder
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

# 4) compile all .proto → TS
protoc \
  -I"$PROTO_DIR" \
  --plugin="protoc-gen-ts_proto=$(command -v protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --ts_proto_opt="outputEncodeMethods=true,outputJsonMethods=true" \
  "$PROTO_DIR"/*.proto

echo "✅ Protos compiled into $OUT_DIR"

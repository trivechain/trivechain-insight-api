FROM node:8-alpine

RUN apk add --update --no-cache \
                            git \
                            libzmq \
                            zeromq-dev \
                            python \
                            make \
                            g++

WORKDIR /insight

# Copy trivechaincore-node
RUN git clone --branch master --single-branch --depth 1 https://github.com/trivechain/trivechaincore-node.git .

# Copy config file
COPY trivechaincore-node.json .

ARG VERSION

# Install npm packages
RUN npm ci

# Install Insight API module
RUN bin/trivechaincore-node install trivechain/trivechain-insight-api@${VERSION}

FROM node:8-alpine

LABEL maintainer="Trivechain Developers <dev@trivechain.org>"
LABEL description="Dockerised Insight API"

WORKDIR /insight

# Copy project files
COPY --from=0 /insight/ .

EXPOSE 3001

CMD ["bin/trivechaincore-node", "start"]

FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/andymrlit/MRLIT-XD /root/andymrlit/
WORKDIR /root/andymrlit/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]

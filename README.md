# ITAPI

Incredible Travel API

GraphQL proxy for REST services. It's working with itaka.pl public endpoints. Other service providers coming soon.

## Vagrant config

etc/hosts:

```
192.168.56.152 itapi.vagrant
```

Vagrant docker-compose plugin

```
vagrant plugin install vagrant-docker-compose
```

## Development

```
yarn install
yarn bootstrap
yarn watch
yarn start
```

## Entrypoints

On host: `http://localhost:3000/graphql`

With vagrant / docker:
`http://itapi.vagrant:3000/graphql`

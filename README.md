# Dungeon Master API

Dungeon master is the never ending story of Raid Guild.

## Getting Started

With Docker

```bash
docker-compose up
```

NPM & Mongo

```bash
# install dependencies
# install mongo
```

## Endpoints

defaults to `localhost:5000`

~~set ENV for DB_HOST~~

Create new objects in the db

`/create/{MODEL}`

ex

```json
{
    "raid_name": "test",
    "cleric_name": "testing",
    "status": "Raiding",
    "category": "Frontend"
}
```

Fetch & Update

`/graphql`

ex.

```graphql
{
    raids {
        raid_name
    }
}
```

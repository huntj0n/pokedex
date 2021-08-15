-- Three tables, users & teams.

CREATE TABLE pokedex_users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    passowrd VARCHAR(500)
)

CREATE TABLE pokedex_pokemon (
    team_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES pokedex_users(user_id)
    pokemon_id INTEGER
)

CREATE TABLE 
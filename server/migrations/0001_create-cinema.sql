CREATE EXTENSION pgcrypto;

-- -----------------------------------------------------
-- Table: cinema
--
-- Description:
--
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS cinemas (
    cinema_id BIGSERIAL PRIMARY KEY NOT NULL,
    area_id BIGSERIAL NOT NULL,
    company_id VARCHAR(3) NOT NULL,
    cinema_name VARCHAR(255) NOT NULL,
    cinema_name_local VARCHAR(255) NOT NULL,
    cinema_address VARCHAR(255) NOT NULL,
    cinema_phone VARCHAR(20) NOT NULL,
    cinema_url VARCHAR(255),
    cinema_thumbnail_url VARCHAR(255),
    cinema_google_map TEXT,
    cinema_coord_lat NUMERIC,
    cinema_coord_long NUMERIC,
    cinema_active BOOLEAN DEFAULT true
);


CREATE TABLE IF NOT EXISTS areas (
    area_id BIGSERIAL PRIMARY KEY NOT NULL,
    city_id BIGSERIAL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS cities (
    city_id BIGSERIAL PRIMARY KEY NOT NULL,
    region_id BIGSERIAL NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS regions (
    region_id BIGSERIAL PRIMARY KEY NOT NULL,
    country_id VARCHAR(3) NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS countries (
    country_id VARCHAR(3) PRIMARY KEY NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS companies (
    id VARCHAR(3) PRIMARY KEY NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS cinema_screens (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    cinema_id BIGSERIAL NOT NULL,
    seat_count SMALLINT NOT NULL,
    sound_system VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS cinema_pricing (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    cinema_id BIGSERIAL NOT NULL,
    price_regular NUMERIC NOT NULL
);


CREATE TABLE IF NOT EXISTS company (
    id VARCHAR(3) PRIMARY KEY NOT NULL,
    company_name VARCHAR(255) NOT NULL
);


-- -----------------------------------------------------
-- Table: movies
--
-- Description:
--
-- movie_language: ISO 639-3 Alpha-3 code
--
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies (
    id BIGSERIAL NOT NULL,
    country_id VARCHAR(3) NOT NULL,
    director_id BIGSERIAL NOT NULL,
    genre_id VARCHAR(255) NOT NULL,
    language_id VARCHAR(5) NOT NULL,
    movie_title TEXT NOT NULL,
    movie_title_local TEXT NOT NULL,
    movie_content_rating_local VARCHAR(255) NOT NULL,
    movie_content_rating_mpaa VARCHAR(255) NOT NULL,
    movie_runtime SMALLINT NOT NULL,
    movie_thumbnail_url VARCHAR(255),
    movie_version VARCHAR(255),
    movie_imdb_url VARCHAR(255),
    movie_trailer_url VARCHAR(255),
    movie_rating SMALLINT,
    movie_rating_imdb SMALLINT,
    movie_release_date DATE,
    movie_plot TEXT,
    movie_plot_local TEXT,
    movie_tagline TEXT,
    movie_tagline_local TEXT
);


CREATE TABLE IF NOT EXISTS movie_cast (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    movie_id BIGSERIAL NOT NULL,
    actor_id BIGSERIAL NOT NULL
);


CREATE TABLE IF NOT EXISTS actors (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS directors (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS genres (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS languages (
    id VARCHAR(5) PRIMARY KEY NOT NULL,
    code_639_1 VARCHAR(2) NOT NULL,
    code_639_3 VARCHAR(3) NOT NULL,
    en_us VARCHAR(255) NOT NULL,
    zh_cn VARCHAR(255),
    zh_hk VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS movie_showings (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    cinema_id BIGSERIAL NOT NULL,
    movie_id BIGSERIAL NOT NULL,
    showing_from_date DATE NOT NULL,
    showing_to_date DATE NOT NULL
);


CREATE TABLE IF NOT EXISTS performances (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    cinema_id BIGSERIAL NOT NULL,
    screen_id BIGSERIAL NOT NULL,
    movie_id BIGSERIAL NOT NULL,
    booked_seats_count SMALLINT NOT NULL DEFAULT 0,
    showing_start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    showing_end_time TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_cinema_id on cinemas (id);
CREATE UNIQUE INDEX idx_area_id on areas (area_id);
CREATE UNIQUE INDEX idx_city_id on cities (city_id);
CREATE UNIQUE INDEX idx_region_id on regions (region_id);
CREATE UNIQUE INDEX idx_country_id on countries (country_id);
CREATE UNIQUE INDEX idx_company_id on companies (id);
CREATE UNIQUE INDEX idx_actor_id on actors (id);
CREATE UNIQUE INDEX idx_director_id on directors (id);
CREATE UNIQUE INDEX idx_genre_id on genres (id);
CREATE UNIQUE INDEX idx_language_id on languages (id);
CREATE UNIQUE INDEX idx_movie_id on movies (id);
CREATE UNIQUE INDEX idx_screen_id on cinema_screens (id);
CREATE UNIQUE INDEX idx_showing_id on movie_showings (id);
CREATE UNIQUE INDEX idx_performance_id on performances (id);

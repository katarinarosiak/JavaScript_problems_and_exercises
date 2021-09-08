--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: grade_type; Type: TYPE; Schema: public; Owner: katarina
--

CREATE TYPE public.grade_type AS ENUM (
    'A',
    'B',
    'C',
    'D',
    'F'
);


ALTER TYPE public.grade_type OWNER TO katarina;

--
-- Name: spectraltype; Type: TYPE; Schema: public; Owner: katarina
--

CREATE TYPE public.spectraltype AS ENUM (
    'O',
    'B',
    'A',
    'F',
    'G',
    'K',
    'M'
);


ALTER TYPE public.spectraltype OWNER TO katarina;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: planets; Type: TABLE; Schema: public; Owner: katarina
--

CREATE TABLE public.planets (
    id integer NOT NULL,
    designation character varying(1) NOT NULL,
    mass numeric NOT NULL,
    star_id integer NOT NULL,
    semi_major_axis numeric,
    CONSTRAINT planets_mass_check CHECK ((mass > 0.0))
);


ALTER TABLE public.planets OWNER TO katarina;

--
-- Name: planets_id_seq; Type: SEQUENCE; Schema: public; Owner: katarina
--

CREATE SEQUENCE public.planets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planets_id_seq OWNER TO katarina;

--
-- Name: planets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: katarina
--

ALTER SEQUENCE public.planets_id_seq OWNED BY public.planets.id;


--
-- Name: stars; Type: TABLE; Schema: public; Owner: katarina
--

CREATE TABLE public.stars (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    distance numeric NOT NULL,
    spectral_type public.spectraltype,
    companions integer NOT NULL,
    CONSTRAINT stars_companions_check CHECK ((companions >= 0)),
    CONSTRAINT stars_distance_check CHECK ((distance > (0)::numeric))
);


ALTER TABLE public.stars OWNER TO katarina;

--
-- Name: stars_id_seq; Type: SEQUENCE; Schema: public; Owner: katarina
--

CREATE SEQUENCE public.stars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stars_id_seq OWNER TO katarina;

--
-- Name: stars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: katarina
--

ALTER SEQUENCE public.stars_id_seq OWNED BY public.stars.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: katarina
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name text NOT NULL,
    year_of_birth date,
    phone_num integer,
    average_points numeric(2,1),
    highest_grade public.grade_type,
    CONSTRAINT students_average_points_check CHECK (((average_points >= 0.0) AND (average_points <= 9.9)))
);


ALTER TABLE public.students OWNER TO katarina;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: katarina
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO katarina;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: katarina
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: planets id; Type: DEFAULT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.planets ALTER COLUMN id SET DEFAULT nextval('public.planets_id_seq'::regclass);


--
-- Name: stars id; Type: DEFAULT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.stars ALTER COLUMN id SET DEFAULT nextval('public.stars_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: planets; Type: TABLE DATA; Schema: public; Owner: katarina
--

INSERT INTO public.planets VALUES (5, 'b', 0.0036, 1, NULL);
INSERT INTO public.planets VALUES (6, 'c', 0.1, 2, NULL);


--
-- Data for Name: stars; Type: TABLE DATA; Schema: public; Owner: katarina
--

INSERT INTO public.stars VALUES (1, 'Alpha Centauri B', 4.37, 'K', 3);
INSERT INTO public.stars VALUES (2, 'Epsilon Eridani', 10.5, 'K', 0);
INSERT INTO public.stars VALUES (11, 'Epsilon Eridanii', 10.5, 'K', 0);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: katarina
--

INSERT INTO public.students VALUES (1, 'Harry', '1987-02-04', 909432987, 1.0, 'A');
INSERT INTO public.students VALUES (2, 'Ben', '1976-11-13', 99876567, 6.0, 'A');
INSERT INTO public.students VALUES (3, 'Marry', '1995-03-21', 98787654, 7.0, 'A');
INSERT INTO public.students VALUES (4, 'Marry', '1995-03-21', 908675356, 0.0, 'A');
INSERT INTO public.students VALUES (5, 'Edd', '1990-01-02', 123123432, 0.8, NULL);


--
-- Name: planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: katarina
--

SELECT pg_catalog.setval('public.planets_id_seq', 6, true);


--
-- Name: stars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: katarina
--

SELECT pg_catalog.setval('public.stars_id_seq', 11, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: katarina
--

SELECT pg_catalog.setval('public.students_id_seq', 5, true);


--
-- Name: planets planets_designation_key; Type: CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_designation_key UNIQUE (designation);


--
-- Name: planets planets_pkey; Type: CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);


--
-- Name: stars stars_name_key; Type: CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_name_key UNIQUE (name);


--
-- Name: stars stars_pkey; Type: CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_pkey PRIMARY KEY (id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: planets planets_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: katarina
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.stars(id);


--
-- PostgreSQL database dump complete
--


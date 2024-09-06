# sveltekit-with-pocketbase

Aplicacion de ejemplo sobre como desplegar una app de SvelteKit unida a una instancia de Pocketbase local.

## SvelteKit targets

El `Dockerfile` del proyecto de SvelteKit necesita que la variable `SVELTEKIT_TARGET` este definida en el entorno. Las dos opciones son:

- debug
- prod

La primera inicia el servidor en modo debug con hot reloading, mientras que el otro compila el proyecto para ser ejecutado con `node`.

Se recomienda pasar esta variable al momento de ejecutar `docker compose`, como:

```
SVELTEKIT_TARGET=debug docker compose up --build
```

## Exponer los ports apropiados

Para que la aplicacion pueda conectase al localhost de la computadora, los ports deben ser expuestos. Esto varia dependiendo de la aplicacion.

En el caso de SvelteKit (con `vite`) esto es agregando `--host` a los comandos del último.

En el caso de Pocketbase, el comando debe ser algo como:

```
./pocketbase serve --http=0.0.0.0:8090
```


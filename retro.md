# Retrospectiva Grupo 1 KDDS

## Análisis general
Este sprint fue bastante laborioso , tuvimos que llevar nuestras habilidades de comunicación al siguiente nivel para poder estar al día con lo esperado, pudimos dividirnos correctamente las tareas y ayudarnos mutuamente.

## Retrospectiva Sprint 1

### Seguir haciendo:
- Reuniones al comienzo y durante el sprint.
### Hacer mas:
- Ordenar mejor las tareas de cada uno
### Empezar a hacer:
- Preguntar dudas
### Hacer menos: 
- Dedicarle tiempo a tareas que no son primordiales.
### Dejar de hacer:
- No sentimos que hagamos algo de mas.
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/login.html"))
});
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/register.html"))
});
#!/bin/bash

# Construye el proyecto
npm run build

# Copia el contenido de dist a la raíz del repo (sobrescribiendo)
cp -r dist/* .

# Añade todos los cambios
git add .

# Commit con mensaje de fecha y hora
git commit -m "Deploy sitio actualizado $(date '+%Y-%m-%d %H:%M:%S')"

# Empuja a la rama main
git push origin main

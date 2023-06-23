import { jsPDF } from 'jspdf';

const generarReporte = async () => {
  const pdf = new jsPDF();

  // Obtén los datos de las películas desde tu base de datos
  try {
    const response = await fetch('http://localhost:3000/api/peliculas'); // Ajusta la ruta de acuerdo a tu configuración
    const peliculas = await response.json();

    // Define las coordenadas iniciales para escribir en el PDF
    let x = 10;
    let y = 10;

    // Itera sobre las películas y agrega los datos al reporte
    peliculas.forEach((pelicula) => {
      // Agrega los datos de la película al reporte
      pdf.text(`Título: ${pelicula.titulo}`, x, y);
      y += 10;
      pdf.text(`Género: ${pelicula.genero}`, x, y);
      y += 10;
      pdf.text(`Director: ${pelicula.director}`, x, y);
      y += 10;
      pdf.text(`Actores: ${pelicula.actores.join(', ')}`, x, y);
      y += 20; // Espacio adicional entre cada película
    });

    // Guarda el reporte en formato PDF
    pdf.save('reporte_peliculas.pdf');
  } catch (error) {
    console.error('Error al obtener las películas:', error);
  }
};

generarReporte();

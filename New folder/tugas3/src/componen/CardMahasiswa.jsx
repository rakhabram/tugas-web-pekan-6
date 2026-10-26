function CardMahasiswa({ nama, nim, jurusan = "Informatika" }) {
  return (
    <div>
      <h3>{nama}</h3>
      <p>NIM: {nim}</p>
      <p>Jurusan: {jurusan}</p>
    </div>
  );
}

export default CardMahasiswa

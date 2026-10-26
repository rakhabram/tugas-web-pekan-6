async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data.name);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

getUser();

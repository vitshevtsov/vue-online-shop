export function getImages(index) {
  //  Получаем массив путей к изображениям товаров, сохраняем его в state
  // 2й аргумент метода context (boolean) - нужно ли рекурсивно просматривать всю папку
  //   ф-ция возвращает путь к изображению, соответствующий переданному в нее индексу
  const reqImgs = require.context("../assets/images", false, /\.webp$/);
  const pathToImgs = reqImgs.keys();
  const arrayOfImgs = pathToImgs.map((path) => reqImgs(path));
  return arrayOfImgs[index];
}

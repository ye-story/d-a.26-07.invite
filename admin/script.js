const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "Александр, Екатерина, Ксения" },
  { id: "2", names: "Денис и Виктория, Матвей" },
  { id: "3", names: "Дедушка Женя, Бабушка Света, Прабабушка Нина" },
  { id: "4", names: "Крёстный Дима и Александра, дети Ксения и Тимофей" },
  { id: "5", names: "Сергей и Татьяна, Данил и Тимофей, прабабушка Людмила" },
  { id: "6", names: "Василий и Наталья" },
  { id: "7", names: "Александр и Елена, дети Иван и Елизавета" },
  { id: "8", names: "Ванесс и Надежда" },
  { id: "9", names: "Федор и Надежда" },
  { id: "10", names: "Крёстная Екатерина и Артём" },
  { id: "11", names: "Дедушка Василий, бабушка Ольга, Иван" },
  { id: "12", names: "Бабушка Лена" },
  { id: "13", names: "Александр и Анастасия" },
  { id: "14", names: "Андрей и Наталья" },
  { id: "15", names: "Кирилл и Анна" },
  { id: "16", names: "Игорь и Анжела" },
  { id: "17", names: "Наталья Леонидовна и Ирина Анатольевна" },
  { id: "18", names: "Александр и Альбина" },
  { id: "19", names: "Дмитрий и Марина" },
  { id: "20", names: "Денис и Марина" },
  { id: "21", names: "Максим, Екатерина, Милана" },
  { id: "22", names: "Дорогая Алёна" },
  { id: "23", names: "Николай и Роза" },
  { id: "24", names: "Сергей Васильевич и Инга Вячеславовна" },
  { id: "25", names: "Дорогие Алексей и Алина" },
  { id: "26", names: "Данила и Камилла" },
  { id: "27", names: "Дима и Лера" },
  { id: "28", names: "Владислав" },
  { id: "29", names: "Дорогой друг Влад" },
  { id: "30", names: "Дорогой друг Егор" },
  { id: "31", names: "Дорогой Данила" },  
  { id: "32", names: "Александр и Анна" },
];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});

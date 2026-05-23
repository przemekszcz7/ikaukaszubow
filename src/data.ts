/**
 * Smażalnia IKA u Kaszuba - Site Data & Menu structure
 */

export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  size?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const RESTAURANT_IMAGES = {
  hero: "https://i.ibb.co/QjNw6wD6/690971523-1587765983356384-4735183458827790611-n.jpg",
  fishPlate: "https://i.ibb.co/pm2yMVd/694148093-1587766030023046-4603139822571741757-n.jpg",
  barInside: "https://i.ibb.co/sfWLdFf/692517343-1587766053356377-3738279416170795597-n.jpg",
  traditionalSoup: "https://i.ibb.co/prRW0tHg/692099029-1587766103356372-7869514409079074920-n.jpg",
  wafflesGofry: "https://i.ibb.co/0y5mc5dN/694841657-1587766256689690-8445722253332200907-n.jpg",
  cozyPlate: "https://i.ibb.co/svy36FWM/693819812-1587766290023020-7660581271506095915-n.jpg",
  fishFrying: "https://i.ibb.co/3LNdvZD/694951451-1587766286689687-5127972616098908474-n.jpg",
  coldDrink: "https://i.ibb.co/xSPb5LdJ/692938516-1587766356689680-7368082607301503977-n.jpg",
  favicon: "https://i.ibb.co/6JWnbcGD/686895095-1580343450765304-2749685320227830794-n.jpg"
};

export const INSTAGRAM_GALLERY = [
  { url: RESTAURANT_IMAGES.hero, label: "Nasza kultowa smażalnia" },
  { url: RESTAURANT_IMAGES.fishPlate, label: "Pyszny, chrupiący zestaw z dorszem" },
  { url: RESTAURANT_IMAGES.barInside, label: "Szeroki wybór orzeźwiających napojów" },
  { url: RESTAURANT_IMAGES.traditionalSoup, label: "Domowy żurek i kultowa zupa rybna" },
  { url: RESTAURANT_IMAGES.wafflesGofry, label: "Chrupkie gofry z bitej śmietany i owocami" },
  { url: RESTAURANT_IMAGES.cozyPlate, label: "Smakowite tradycyjne pierogi" },
  { url: RESTAURANT_IMAGES.fishFrying, label: "Nasza rybka prosto z pieca" },
  { url: RESTAURANT_IMAGES.coldDrink, label: "Orzeźwiający drink na letni wieczór" }
];

export const HOURLY_TIMETABLE = [
  { day: "poniedziałek", hours: "09:00 - 23:00" },
  { day: "wtorek", hours: "09:00 - 23:00" },
  { day: "środa", hours: "09:00 - 23:00" },
  { day: "czwartek", hours: "09:00 - 23:00" },
  { day: "piątek", hours: "09:00 - 22:00" },
  { day: "sobota", hours: "09:00 - 23:00" },
  { day: "niedziela", hours: "09:00 - 23:00" }
];

export const CONTACT_INFO = {
  phone: "501 571 221",
  address: "al. Jana Pawła II 2, 81-001 Gdynia",
  facebookUrl: "https://www.facebook.com/gdyniaukaszuba",
  mapsIFrame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.8220347117517!2d18.5530243!3d54.5189999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73920563239%3A0x674d730bb2ea0ae5!2sSma%C5%BCalnia%20ryb%20IKA%20-%20U%20Kaszuba%20Bar%20Pomorza!5e0!3m2!1spl!2spl!4v1779514999212!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
};

export const BREAKFAST_MENU: MenuCategory = {
  id: "breakfast",
  title: "Śniadania",
  subtitle: "Serwujemy codziennie do godziny 12:00",
  items: [
    {
      name: "AKSAMITNY PÓŁMISEK ŚNIADANIOWY",
      price: "40zł",
      desc: "jajko gotowane, ser żółty, pachnąca szynka, świeży pomidor i chrupiący ogórek, słodki dżem, domowy twaróg, pieczywo, masło, podawany w zestawie z gorącą herbatą"
    },
    {
      name: "TRADYCYJNA JAJECZNICA Z KURNIKA",
      price: "25zł",
      desc: "puszysta jajecznica z 2-3 świeżych jaj, serwowana z pieczywem, masłem, pomidorem oraz gorącą herbatą"
    },
    {
      name: "KLASYCZNE PARÓWKI NA GORĄCO",
      price: "25zł",
      desc: "3 sztuki wybornych, gorących parówek, pikantna musztarda, pieczywo, masło, porcja gorącej herbaty"
    }
  ]
};

export const FISH_MENU: MenuCategory = {
  id: "fish-main",
  title: "Ryby z patelni i pieca",
  subtitle: "Cena za 100g. Porcje serwujemy zazwyczaj od 200g",
  items: [
    { name: "DORSZ FILET", price: "16zł", size: "100g", desc: "Smażony na złoto, kruchy i delikatny" },
    { name: "DORSZ FILET PANIEROWANY", price: "17zł", size: "100g", desc: "W naszej chrupiącej, tradycyjnej panierce" },
    { name: "DORSZ FILET Z PIECA", price: "17zł", size: "100g", desc: "Znakomity z dodatkiem ziół, wyjątkowo soczysty" },
    { name: "FLĄDRA TUSZA", price: "14zł", size: "100g", desc: "Bałtycki klasyk o maślanym smaku" },
    { name: "FLĄDRA FILET", price: "15zł", size: "100g", desc: "Wygodny, bez ości, smażony na świeżo" },
    { name: "PSTRĄG CAŁY", price: "15zł", size: "100g", desc: "Pieczony w całości, aromatyczny z masełkiem" },
    { name: "HALIBUT STEK", price: "17zł", size: "100g", desc: "Złocisty stek o wybornym, zwartym błękitnym mięsie" },
    { name: "HALIBUT STEK Z PIECA", price: "18zł", size: "100g", desc: "Lekka, pieczona wersja premium halibutowej rozkoszy" },
    { name: "TURBOT TUSZA", price: "19zł", size: "100g", desc: "Królewska ryba bałtycka, chrupiąca skórka, niesamowity smak" },
    { name: "SANDACZ FILET", price: "18zł", size: "100g", desc: "Szlachetna ryba słodkowodna o zwartym, białym mięsie" },
    { name: "ŁOSOŚ FILET", price: "18zł", size: "100g", desc: "Smażona klasyka z patelni" },
    { name: "ŁOSOŚ FILET Z PIECA", price: "19zł", size: "100g", desc: "Lekki i prozdrowotny łosoś pieczony pod ziołowym akcentem" },
    { name: "KERGULENA TUSZA", price: "20zł", size: "100g", desc: "Rarytas z zimnych wód antarktycznych o absolutnie unikalnym smaku" },
    { name: "KALMARY", price: "25zł", size: "9 szt.", desc: "Chrupiące krążki z kalmarów, idealne jako przekąska" }
  ]
};

export const FISH_SETS_MENU: MenuCategory = {
  id: "fish-sets",
  title: "Zestawy Rybne",
  subtitle: "W zestawie pełna porcja: chrupiące frytki lub gotowane ziemniaczki oraz zestaw świeżych surówek",
  items: [
    { name: "ZESTAW Z FILETEM Z DORSZA", price: "58zł", size: "ok. 170g ryby", desc: "Kultowy zestaw, którego trzeba spróbować nad morzem!" },
    { name: "ZESTAW Z FILETEM Z FLĄDRY", price: "55zł", size: "ok. 170g ryby", desc: "Świeży filet bałtyckiej flądry w komplecie obiadowym" },
    { name: "ZESTAW Z FILETEM Z SANDACZA", price: "59zł", size: "ok. 170g ryby", desc: "Wyjątkowy, luksusowy filet piaskowego sandacza" },
    { name: "KLASYCZNY FISH & CHIPS", price: "48zł", size: "200g / 100g", desc: "Chrupiące fileciki rybne z dużymi frytkami, sos tatar" },
    { name: "DORSZ Z PIECA Z WARZYWAMI", price: "62zł", desc: "Lekki filet z dorsza pieczony w towarzystwie bukietu soczystych warzyw" },
    { name: "DORSZ W DELIKATNYM SOSIE SZPINAKOWYM", price: "62zł", desc: "Delikatna kulinarna kompozycja ryby w kremowym szpinaku ze śmietanką" },
    { name: "DORSZ W SŁYNNYM SOSIE KURKOWYM", price: "65zł", desc: "Wyśmienita ryba pod aksamitnym sosem z prawdziwych leśnych kurków" },
    { name: "DORSZ W SOSIE POROWO-ŚMIETANOWYM", price: "62zł", desc: "Tradycyjny sos śmietankowy z nutą słodkiego poru" },
    { name: "ŁOSOŚ Z PIECA W SOSIE PIECZARKOWYM", price: "65zł", desc: "Kremowy sos pieczarkowo-śmietankowy rozlewany na pieczonym łososiu" }
  ]
};

export const ACC_MENU: MenuCategory = {
  id: "additions",
  title: "Dodatki do dań",
  items: [
    { name: "ZESTAW ŚWIEŻYCH SURÓWEK", price: "14zł", size: "porcja" },
    { name: "FRYTKI MAŁE", price: "14zł", size: "100g" },
    { name: "FRYTKI DUŻE", price: "24zł", size: "200g" },
    { name: "ZIEMNIAKI GOTOWANE", price: "13zł", size: "porcja" },
    { name: "ZIEMNIAKI OPIEKANE", price: "14zł", size: "porcja" },
    { name: "PLACKI ZIEMNIACZANE", price: "16zł", size: "4 szt." },
    { name: "BUKIET WARZYW GOTOWANYCH", price: "14zł", size: "porcja" },
    { name: "RYŻ GOTOWANY", price: "10zł", size: "150g" },
    { name: "CHRUPIĄCE PIECZYWO", price: "2zł", size: "porcja" },
    { name: "AROMATYCZNE PIECZYWO CZOSNKOWE", price: "9zł", size: "porcja" },
    { name: "DODATKOWY SOS LUB KETCHUP", price: "2zł", size: "porcja" }
  ]
};

export const MEAT_MENU: MenuCategory = {
  id: "meat-dishes",
  title: "Dania Mięsne i Tradycyjne",
  subtitle: "W zestawie pełna porcja: frytki lub ziemniaczki oraz zestaw surówek. Duże, uczciwe porcje!",
  items: [
    { name: "TRADYCYJNY KOTLET SCHABOWY PANIEROWANY", price: "39zł", size: "140g" },
    { name: "KOTLET SCHABOWY ZAPIEKANY Z PIECZARKAMI I SEREM", price: "43zł", size: "170g" },
    { name: "SOCZYSTA PIERŚ Z KURCZAKA PANIEROWANA", price: "39zł", size: "140g" },
    { name: "PIERŚ Z KURCZAKA ZAPIEKANA Z PIECZARKAMI I SEREM", price: "43zł", size: "170g" },
    { name: "KOTLET PO HAWAJSKU Z ANANASEM I SEREM", price: "43zł", size: "170g" },
    { name: "CHRUPIĄCE POLĘDWICZKI Z KURCZAKA", price: "39zł", size: "4 szt." },
    { name: "KULTOWY KOTLET DEVOLAILLE", price: "39zł", size: "150g", desc: "Z płynącym masłem i chrupiącą panierką" },
    { name: "Aromatyczny SZASZŁYK DROBIOWY", price: "42zł", size: "170g" },
    { name: "GYROS DROBIOWY", price: "39zł", size: "130g", desc: "Dobrze doprawione paski mięsa drobiowego" },
    { name: "KIEŁBASA ZAPIEKANA Z CEBULKĄ", price: "36zł", size: "180g" },
    { name: "PYSZNY DOMOWY KOTLET MIELONY", price: "33zł", size: "200g" }
  ]
};

export const PIEROGI_MENU: MenuCategory = {
  id: "pierogi",
  title: "Pielęgnowane Domowe Pierogi",
  subtitle: "Tradycyjna receptura, porcja zawiera 7 sztuk",
  items: [
    { name: "PIEROGI Z MIĘSEM", price: "28zł" },
    { name: "PIEROGI UKRAIŃSKIE (RUSKIE)", price: "28zł", desc: "Z twarogiem, ziemniakami i podsmażoną cebulką" },
    { name: "PIEROGI Z KAPUSTĄ I GRZYBAMI", price: "28zł" },
    { name: "PIEROGI Z SEREM (NA SŁODKO)", price: "28zł", desc: "Słodki klasyk, wyśmienity także dla najmłodszych" }
  ]
};

export const SOUPS_MENU: MenuCategory = {
  id: "soups",
  title: "Domowe Zupy",
  subtitle: "Pożywne i rozgrzewające, porcje 400ml",
  items: [
    { name: "RYBNA PO KASZUBSKU", price: "27zł", desc: "Wyrazista, obfity bulion rybny od szefowej kuchni" },
    { name: "ROSÓŁ Z MAKARONEM", price: "16zł", desc: "Tradycyjny, długo gotowany rosół domowy" },
    { name: "POMIDOROWA Z MAKARONEM", price: "16zł" },
    { name: "ŻUREK Z JAJKIEM I KIEŁBASĄ", price: "20zł", desc: "Prawdziwy żur na zakwasie z białą kiełbaską" },
    { name: "FLAKI WOŁOWE", price: "20zł" }
  ]
};

export const KIDS_MENU: MenuCategory = {
  id: "kids",
  title: "Dania Dla Najmłodszych",
  subtitle: "W zestawie z frytkami lub ziemniaczkami oraz łagodną surówką",
  items: [
    { name: "FILECIKI RYBNE DLA DZIECI", price: "32zł", size: "4 szt.", desc: "Bez ości, chrupiące i przyjazne maluchom" },
    { name: "DOMOWE NUGGETSY Z PIERSI", price: "30zł", size: "4 szt." },
    { name: "KURCZAK W PANIERCE", price: "30zł", size: "porcja" },
    { name: "DELIKATNA GRILLOWANA PIERŚ Z KURCZAKA", price: "30zł", size: "porcja" }
  ]
};

export const FASTFOOD_MENU: MenuCategory = {
  id: "fastfood",
  title: "Szybka Przekąska / Fast Food",
  items: [
    { name: "KULTOWA ZAPIEKANKA TRADYCYJNA", price: "20zł", size: "30cm", desc: "Z pieczarkami, serem i sosem" },
    { name: "ZAPIEKANKA GIGANT", price: "26zł", size: "50cm", desc: "Dla naprawdę głodnych!" },
    { name: "KEBAB ROLLO", price: "26zł" },
    { name: "KEBAB BOX Z FRYTKAMI", price: "26zł" },
    { name: "BIG HAMBURGER WOŁOWY", price: "26zł" },
    { name: "BIG CHEESEBURGER Z SEREM", price: "28zł" },
    { name: "BURGER Z PYSZNĄ RYBĄ", price: "30zł", desc: "Chrupiący panierowany dorsz, sałata, plaster pomidora, sos tatar" },
    { name: "BURGER Z SOCZYSTĄ PIERSIĄ Z KURCZAKA", price: "30zł" },
    { name: "HOT-DOG FRANCUSKI", price: "12zł" }
  ]
};

export const SALAD_MENU: MenuCategory = {
  id: "salads",
  title: "Świeże Sałatki",
  items: [
    { name: "SAŁATKA GRECKA", price: "28zł", desc: "Oliwki, ser typu feta, ogórek, pomidor, oliwa z ziółkami" },
    { name: "SAŁATKA Z CHRUPIĄCYM GYROSEM", price: "32zł" },
    { name: "SAŁATKA Z PIECZONYM ŁOSOSIEM", price: "38zł" }
  ]
};

export const DESSERT_MENU: MenuCategory = {
  id: "desserts",
  title: "Gofry, Naleśniki i Słodkości",
  items: [
    { name: "CIASTO DOMOWE (SERNIK I INNE)", price: "12zł", desc: "Codziennie świeży wypiek Pani Irenki" },
    { name: "KOKTAJL TRUSKAWKOWY", price: "16zł", size: "300ml", desc: "Aksamitny, robiony z prawdziwych truskawek" },
    { name: "KAWA MROŻONA Z LODAMI", price: "18zł", size: "350ml", desc: "Z gałką lodów waniliowych i puszystą bitą śmietaną" }
  ]
};

export const DRINKS_HOT_MENU: MenuCategory = {
  id: "drinks-hot",
  title: "Napoje Gorące",
  items: [
    { name: "KAWA PARZONA TRADYCYJNIE", price: "12zł", size: "250ml" },
    { name: "KAWA Z EKSPRESU CIŚNIENIOWEGO", price: "12zł", size: "200ml" },
    { name: "MOCNE ESPRESSO", price: "10zł", size: "100ml" },
    { name: "Puszyste CAPPUCCINO", price: "13zł", size: "250ml" },
    { name: "LATTE MACCHIATO", price: "15zł", size: "250ml" },
    { name: "HERBATA Z ORZEŹWIAJĄCĄ CYTRYNĄ", price: "9zł", size: "250ml" },
    { name: "LIMITOWANA HERBATA ZIMOWA / ROZGRZEWAJĄCA", price: "16zł", size: "350ml", desc: "Z pomarańczą, goździkami i imbirem" },
    { name: "GORĄCA CZEKOLADA Z BITĄ ŚMIETANĄ", price: "15zł", size: "250ml" }
  ]
};

export const DRINKS_COLD_MENU: MenuCategory = {
  id: "drinks-cold",
  title: "Napoje Zimne",
  items: [
    { name: "PEPSI / MIRINDA / 7UP", price: "9zł", size: "0.5l" },
    { name: "NAPOJE OWOCOWE NIEGAZOWANE", price: "9zł", size: "0.5l" },
    { name: "WODA GAZOWANA", price: "7zł", size: "0.5l" },
    { name: "WODA NIEGAZOWANA", price: "7zł", size: "0.5l" },
    { name: "SOK 100% OWOCOWY", price: "8zł", size: "0.33l", desc: "Pomarańczowy / Jabłkowy / Multiwitamina / Czarna porzeczka" },
    { name: "DOMOWA ORZEŹWIAJĄCA LEMONIADA", price: "14zł", size: "0.4l" },
    { name: "ŚWIEŻO WYCISKANY SOK Z POMARAŃCZY", price: "14zł", size: "0.2l" }
  ]
};

export const DRINKS_ALCO_MENU: MenuCategory = {
  id: "drinks-alco",
  title: "Piwo, Wino i Drinki",
  items: [
    { name: "PIWO TYSKIE BEZPOŚREDNIO Z NALEWAKA", price: "13 / 15zł", size: "0.3l / 0.5l" },
    { name: "PIWO KSIĄŻĘCE PSZENICZNE", price: "14 / 16zł", size: "0.3l / 0.5l" },
    { name: "KORZENNE PIWO GRZANE Z PRZYPRAWAMI", price: "18zł", size: "0.5l" },
    { name: "KLASYCZNE WINO BIAŁE / CZERWONE", price: "20zł", size: "200ml" },
    { name: "ROZGRZEWAJĄCE WINO GRZANE Z POMARAŃCZAMI", price: "18zł", size: "200ml" },
    { name: "DRINK APEROL SPRITZ", price: "28zł", size: "300ml", desc: "Prosecco, Aperol, woda gazowana, plaster pomarańczy" },
    { name: "DRINK MALIBU SUNRISE", price: "29zł", size: "300ml", desc: "Malibu, sok pomarańczowy, odrobina grenadyny" },
    { name: "PROSECCO MUSUJĄCE", price: "20zł", size: "300ml" },
    { name: "KASZUBSKI SHOT \"PSZCZÓŁKA\"", price: "11zł", size: "50ml", desc: "Złoty shot o miodowym akcencie" },
    { name: "SHOT MAD DOG (WŚCIEKŁY PIES)", price: "11zł", size: "50ml", desc: "Wódka, sok malinowy, pikantny Tabasco" }
  ]
};

export const TESTIMONIALS = [
  {
    author: "Mikołaj Z. z Gdyni",
    quote: "Najlepsza zupa rybna jaką w życiu jadłem! Po KASZUBSKU, bogata, pełna smaku. Co roku muszę tu przyjechać chociaż raz.",
    tag: "Stały klient"
  },
  {
    author: "Karolina i Piotr, Poznań",
    quote: "Pani Irenka czyni cuda z rybą z pieca! Dorsz był tak soczysty i delikatny, że rozpływał się w ustach. Do tego cudowny, przyjazny, nadmorski klimat.",
    tag: "Rodzinny obiad"
  },
  {
    author: "Tomasz W.",
    quote: "Świetna lokalizacja na Bulwarze w Gdyni, rewelacyjny Aperol Spritz na tarasie i szczera, domowa kuchnia bez oszukiwania. Zapiekanka 50cm to hit syna!",
    tag: "Niezapomniany wieczór"
  }
];

import { useRef, useState, useEffect } from "react";

export const MONTH_RU = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

export function fmtDate(d: string) {
  if (!d) return "";
  const dt = new Date(d);
  return `${dt.getDate()} ${MONTH_RU[dt.getMonth()]} ${dt.getFullYear()}`;
}

export const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

export const DMITRY_PHOTO = "https://cdn.poehali.dev/projects/756e28ae-f342-42b1-ab53-44233856dec1/bucket/6e2df17f-042f-4f94-95b3-dfc3557a23c0.png";

export const INSTRUCTORS_MAIN = [
  { name: "Дмитрий\nХара", img: DMITRY_PHOTO },
  { name: "Мария\nСветлова", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80" },
  { name: "Анна\nБерёзова", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80" },
  { name: "Иван\nПетров", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80" },
  { name: "Ольга\nМорозова", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80" },
  { name: "Сергей\nВолков", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" },
  { name: "Наталья\nЛебедева", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80" },
  { name: "Павел\nСоколов", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80" },
  { name: "Елена\nКузнецова", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80" },
  { name: "Алина\nФёдорова", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80" },
];

export const ELEMENTS_16 = [
  { n: "1", title: "Земля", desc: "Устойчивость, опора, принятие себя" },
  { n: "2", title: "Вода", desc: "Поток, гибкость, эмоциональный интеллект" },
  { n: "3", title: "Огонь", desc: "Трансформация, сила воли, энергия действия" },
  { n: "4", title: "Воздух", desc: "Свобода, лёгкость, широта восприятия" },
  { n: "5", title: "Эфир", desc: "Единство, пространство, безмолвие" },
  { n: "6", title: "Звук", desc: "Вибрация, мантра, резонанс с миром" },
  { n: "7", title: "Свет", desc: "Ясность, осознанность, внутренний свет" },
  { n: "8", title: "Тьма", desc: "Принятие тени, интеграция, глубина" },
  { n: "9", title: "Движение", desc: "Тело как инструмент трансформации" },
  { n: "10", title: "Покой", desc: "Остановка, созерцание, тишина" },
  { n: "11", title: "Дыхание", desc: "Пранаяма, жизненная сила, пробуждение" },
  { n: "12", title: "Взаимодействие", desc: "Зеркало, контакт, поле группы" },
  { n: "13", title: "Голос", desc: "Самовыражение, освобождение, звукотерапия" },
  { n: "14", title: "Касание", desc: "Телесный контакт, границы, присутствие" },
  { n: "15", title: "Пространство", desc: "Расширение, выход за рамки, горизонты" },
  { n: "16", title: "Интеграция", desc: "Объединение опыта в целостность жизни" },
];

export const AFTER_MEDITATION = [
  "Тело расслаблено и наполнено энергией",
  "Ум ясный и спокойный",
  "Эмоции выровнены",
  "Чувствуешь связь с собой",
  "Снят накопленный стресс",
  "Появляется ощущение лёгкости",
  "Повышается чувствительность",
  "Углубляется самопонимание",
];

export const INSTRUCTORS_FULL = [
  { name: "Дмитрий Хара", city: "Москва", role: "Основатель метода", img: DMITRY_PHOTO, tg: "#", ig: "#" },
  { name: "Мария Светлова", city: "Санкт-Петербург", role: "Инструктор", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", tg: "#", ig: "#" },
  { name: "Анна Берёзова", city: "Новосибирск", role: "Инструктор", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", tg: "#", ig: "#" },
  { name: "Иван Петров", city: "Казань", role: "Инструктор", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", tg: "#", ig: "#" },
  { name: "Ольга Морозова", city: "Краснодар", role: "Инструктор", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", tg: "#", ig: "#" },
  { name: "Сергей Волков", city: "Воронеж", role: "Инструктор", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", tg: "#", ig: "#" },
  { name: "Наталья Лебедева", city: "Самара", role: "Инструктор", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", tg: "#", ig: "#" },
  { name: "Павел Соколов", city: "Уфа", role: "Инструктор", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", tg: "#", ig: "#" },
  { name: "Елена Кузнецова", city: "Ростов-на-Дону", role: "Инструктор", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", tg: "#", ig: "#" },
  { name: "Алина Фёдорова", city: "Пермь", role: "Инструктор", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", tg: "#", ig: "#" },
  { name: "Виктор Орлов", city: "Екатеринбург", role: "Инструктор", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80", tg: "#", ig: "#" },
  { name: "Светлана Жукова", city: "Омск", role: "Инструктор", img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&q=80", tg: "#", ig: "#" },
];

export const NAV = [
  { label: "О методе", href: "#about" },
  { label: "Практики", href: "#elements" },
  { label: "Инструкторы", href: "#instructors" },
  { label: "Мероприятия", href: "#events" },
  { label: "Контакты", href: "#contact" },
];

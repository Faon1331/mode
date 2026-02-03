import { Product, Service, Testimonial } from './types';

export const CATEGORIES = ['Все', 'Мужское', 'Женское', 'Аксессуары', 'Обувь'];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Классическое пальто",
    price: 12900,
    category: "Женское",
    image: "https://picsum.photos/id/1059/800/1000",
    description: "Элегантное бежевое пальто из качественной шерсти. Идеально для осенней погоды.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Кожаная куртка Biker",
    price: 18500,
    category: "Мужское",
    image: "https://picsum.photos/id/1005/800/1000",
    description: "Классическая косуха из натуральной кожи. Надежная фурнитура и стильный крой.",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Шелковое платье",
    price: 8900,
    category: "Женское",
    image: "https://picsum.photos/id/338/800/1000",
    description: "Легкое вечернее платье из натурального шелка. Подходит для особых случаев.",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Кроссовки Urban Run",
    price: 6500,
    category: "Обувь",
    image: "https://picsum.photos/id/103/800/1000",
    description: "Удобные городские кроссовки с амортизирующей подошвой.",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Сумка-шоппер",
    price: 3200,
    category: "Аксессуары",
    image: "https://picsum.photos/id/20/800/1000",
    description: "Вместительная сумка на каждый день. Прочный материал и лаконичный дизайн.",
    isFeatured: false,
  },
  {
    id: 6,
    name: "Джинсы Slim Fit",
    price: 4500,
    category: "Мужское",
    image: "https://picsum.photos/id/445/800/1000",
    description: "Джинсы классического кроя из плотного денима.",
    isFeatured: true,
  },
  {
    id: 7,
    name: "Вязаный свитер",
    price: 5400,
    category: "Женское",
    image: "https://picsum.photos/id/1027/800/1000",
    description: "Уютный свитер крупной вязки. Сохраняет тепло и дарит комфорт.",
    isFeatured: false,
  },
  {
    id: 8,
    name: "Часы Chrono",
    price: 25000,
    category: "Аксессуары",
    image: "https://picsum.photos/id/175/800/1000",
    description: "Стильные наручные часы с металлическим ремешком.",
    isFeatured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Бесплатная доставка",
    description: "Мы доставляем заказы по всей стране абсолютно бесплатно при заказе от 5000₽.",
    iconName: 'truck',
  },
  {
    id: 2,
    title: "Гарантия качества",
    description: "Используем только проверенные материалы и тщательно следим за производством.",
    iconName: 'shield',
  },
  {
    id: 3,
    title: "Поддержка 24/7",
    description: "Наши специалисты готовы помочь вам с выбором и ответить на вопросы в любое время.",
    iconName: 'clock',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Анна Смирнова",
    role: "Дизайнер",
    text: "Потрясающее качество одежды! Купила пальто полгода назад, и оно выглядит как новое. Очень довольна сервисом.",
    avatar: "https://picsum.photos/id/64/100/100",
  },
  {
    id: 2,
    name: "Игорь Петров",
    role: "Предприниматель",
    text: "Отличный магазин для мужчин. Нашел здесь идеальный костюм и куртку. Быстрая доставка, все подошло по размеру.",
    avatar: "https://picsum.photos/id/91/100/100",
  },
  {
    id: 3,
    name: "Елена Волкова",
    role: "Блогер",
    text: "Люблю MODA за стиль и минимализм. Вещи отлично сочетаются между собой, собирать капсульный гардероб — одно удовольствие.",
    avatar: "https://picsum.photos/id/129/100/100",
  },
];

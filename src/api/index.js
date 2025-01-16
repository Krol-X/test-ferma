import * as tasks from './tasks'

tasks.init([
  {
    date: 'Сегодня',
    title: 'Завершить проект по настройке Vite для темы WordPress.',
    done: true
  },
  {
    date: 'Сегодня',
    title: 'Завершить написание SEO-текста с учетом всех требований.',
    done: false
  },
  {
    date: 'Сегодня',
    title: 'Продолжить работу над кубиком Рубика в Three.js',
    done: false
  },
  {
    date: 'Сегодня',
    title: 'Просмотреть новые видео по интересующим темам на YouTube.',
    done: false
  }
])

export default {
  tasks
}

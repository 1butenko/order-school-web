import { AnimatedProps } from "@/types/motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="relative w-full min-h-screen">
      <div className="max-w-6xl mx-auto text-center text-foreground px-4">
        <h1 className="text-4xl tracking-wider uppercase font-sans mb-2">
          Відповіді на поширені запитання
        </h1>
        <div className="my-6 mx-auto max-w-xl h-1 bg-primary rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto font-mono mt-16">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Хто може взяти участь?</AccordionTrigger>
            <AccordionContent>
              Гурток відкритий для учнів 8–11 класів. Не потрібно спеціальної підготовки — достатньо цікавитися тим, як влаштований світ.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Чи потрібні знання з політології, щоб почати?
            </AccordionTrigger>
            <AccordionContent>
              Ні, спеціальних знань не потрібно. Ми починаємо з базових понять і поступово занурюємось у складніші теми. Достатньо цікавитися тим, як працює політика й суспільство.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-3">
            <AccordionTrigger>
              Чи можу я записатись лише на один модуль?
            </AccordionTrigger>
            <AccordionContent>
              Так. Ви можете обрати і записатись на ті модулі які вас цікавлять. Але ми радимо пройти річний курс повністю, щоб отримати найбільше досвіду і знань.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Як відбуваються заняття?
            </AccordionTrigger>
            <AccordionContent>
              Навчання проходить офлайн у головному кампусі KSE. Польові заняття можуть відбуватись як на вулиці так і у різних інституціях: посольства, суди, верховна рада. Кожен модуль складається з трьох занять типових форматів: теорія, практика та досвід.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Чи будуть записи занять?
            </AccordionTrigger>
            <AccordionContent>
              Так. Заняття на яких читається лекція будуть записані і додані до метеріалів курсу.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Скільки часу займає навчання?
            </AccordionTrigger>
            <AccordionContent>
              Одне заняття триває 2 години. Підготовка до заняття буде займати орієнтовно 2-3 години.  Курс триває протягом навчального року, але можна приєднатися з будь-якого модуля.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Чи можна поєднувати з навчанням у школі?
            </AccordionTrigger>
            <AccordionContent>
              Так. Ми спеціально розробили формат, який зручний для школярів — зустрічі ввечері або у вихідні.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-8">
            <AccordionTrigger>
              Чи буде можливість ставити питання поза заняттями?
            </AccordionTrigger>
            <AccordionContent>
              Так. Учасники гуртка матимуть спільний чат, де можна обговорювати теми курсу, ставити питання лекторам та обмінюватися думками з іншими учнями. Викладачі завжди відкриті для зворотного зв’язку.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-9">
            <AccordionTrigger>
              Чи можна отримати сертифікат?
            </AccordionTrigger>
            <AccordionContent>
              Так, після завершення навчання учні отримують сертифікат Київської школи економіки.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Як зареєструватися?
            </AccordionTrigger>
            <AccordionContent>
              Натисни кнопку «Хочу на курс» і заповни коротку форму. Після цього ми звʼяжемось з вами у телеграмі або надішлемо всі деталі на твою пошту.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

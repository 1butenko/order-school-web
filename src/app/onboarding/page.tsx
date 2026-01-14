"use client"

import React from 'react';
import { useForm } from '@tanstack/react-form';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

import * as fbq from '@/lib/tracker';

export default function PoliticalStudiesForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      role: '',
      fullName: '',
      school: '',
      grade: '',
      module: '',
      telegram: '',
      phone: '',
      howDidYouHear: '',
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);

      try {
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlmnbPihX9FPIcVju8YjOHzi1c7dM3n4f_Yg8PAFIK1ixg0RFW087hcxHTKD_wPjCmBA/exec';

        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(value),
        });

        fbq.event('CompleteRegistration');

        setShowSuccess(true);

        form.reset();

      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Виникла помилка при відправці форми. Будь ласка, спробуйте ще раз.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'oklch(90.91% 0.023 93.34)' }}>
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 md:mt-48">
          <div className="space-y-6">
            <FieldSet>
              <FieldGroup>
                <FieldLegend className="text-2xl font-bold" style={{ color: 'oklch(21.99% 0.014 278.80)' }}>
                  Хочу на Гурток політичних студій
                </FieldLegend>
                <FieldDescription className="text-sm leading-relaxed" style={{ color: 'oklch(21.99% 0.014 278.80)', opacity: 0.7 }}>
                  Заповніть цю форму якщо бажаєте дізнатись більше деталей про
                  гурток або зареєструватись. Ми звʼяжемось з вами протягом
                  одного-двох днів для уточнення усіх деталей, відповідей на ваші
                  запитання і продовження реєстрації на гурток.
                </FieldDescription>

                <div className="space-y-6 mt-6">
                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return 'Email є обовʼязковим';
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                          return 'Введіть коректний email';
                        }
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Email <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="example@gmail.com"
                          type="email"
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="role"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? 'Оберіть хто ви' : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel>
                          Хто ви <span className="text-red-500">*</span>
                        </FieldLabel>
                        <RadioGroup
                          value={field.state.value}
                          onValueChange={field.handleChange}
                          className="space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="parent" id="parent" />
                            <Label htmlFor="parent" className="cursor-pointer">
                              Батько/Maти
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="student" id="student" />
                            <Label htmlFor="student" className="cursor-pointer">
                              Школяр
                            </Label>
                          </div>
                        </RadioGroup>
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="fullName"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? "Прізвище та імʼя є обовʼязковими" : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Ваше Прізвище, Імʼя <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Дьюї Джон"
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="school"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? 'Назва школи є обовʼязковою' : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Школа в якій навчається ваша дитина. Або ви (якщо ви
                          школяр) <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Назва школи"
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="grade"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? 'Оберіть клас' : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Клас <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Select
                          value={field.state.value}
                          onValueChange={field.handleChange}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Оберіть клас" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="11">11</SelectItem>
                          </SelectContent>
                        </Select>
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="module"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? 'Оберіть модуль' : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Який модуль вас цікавить? <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Select
                          value={field.state.value}
                          onValueChange={field.handleChange}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Оберіть модуль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="intro">Вступ</SelectItem>
                            <SelectItem value="Міжнародне право">Міжнародне право</SelectItem>
                            <SelectItem value="Війна, торг, правила">Війна, торг, правила</SelectItem>
                            <SelectItem value="Політичні Режими">Політичні Режими</SelectItem>
                            <SelectItem value="Корупція та як політики (не)можуть на неї впливати">Корупція та як політики (не)можуть на неї впливати</SelectItem>
                            <SelectItem value="Весь курс">Весь курс</SelectItem>
                          </SelectContent>
                        </Select>
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="telegram"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return 'Telegram є обовʼязковим';
                        if (!value.startsWith('@') && !value.startsWith('+')) {
                          return 'Введіть username (@username) або номер телефону';
                        }
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Телеграм для звʼязку з вами <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="@username"
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="phone"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return 'Номер телефону є обовʼязковим';
                        if (!/^\+?[\d\s\-()]+$/.test(value)) {
                          return 'Введіть коректний номер телефону';
                        }
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Ваш номер телефону <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="+380 XX XXX XX XX"
                          type="tel"
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>

                  <form.Field
                    name="howDidYouHear"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? 'Це поле є обовʼязковим' : undefined,
                    }}
                  >
                    {(field) => (
                      <FieldGroup>
                        <FieldLabel htmlFor={field.name}>
                          Як ви дізналися про курс? <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Tiktok, Instagram, від друзів..."
                          className="bg-white"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500 mt-1">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </FieldGroup>
                    )}
                  </form.Field>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={handleSubmit}
                    className="w-full text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                    size="lg"
                    style={{ backgroundColor: 'oklch(62.51% 0.232 24.41)' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Відправка...' : 'Відправити форму'}
                  </Button>
                </div>
              </FieldGroup>
            </FieldSet>
          </div>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
              <div className="mb-6">
                <svg
                  className="mx-auto h-16 w-16 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="oklch(62.51% 0.232 24.41)"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'oklch(21.99% 0.014 278.80)' }}>
                  Форму успішно відправлено!
                </h2>
                <p className="text-base" style={{ color: 'oklch(21.99% 0.014 278.80)', opacity: 0.7 }}>
                  Дякуємо за звернення! Ми звʼяжемось з вами протягом одного-двох днів для уточнення деталей.
                </p>
              </div>
              <Button
                onClick={() => window.location.href = '/'}
                className="w-full text-white font-semibold hover:opacity-90 transition-opacity"
                size="lg"
                style={{ backgroundColor: 'oklch(62.51% 0.232 24.41)' }}
              >
                На головну
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
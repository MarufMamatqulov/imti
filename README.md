# IMTI — Ijtimoiy-Ma'naviy Tadqiqotlar Instituti

Respublika Ma'naviyat va Ma'rifat Markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar
Instituti uchun tayyorlangan, to'liq frontendga asoslangan zamonaviy institutsional veb-sayt.

Sayt [academy.uz](https://academy.uz/uz) uslubidan ilhomlanib, institut, xizmatlar, yangiliklar,
ilmiy nashrlar, hujjatlar, galereya va aloqa bo'limlarini o'z ichiga olgan holda qurilgan.

## Texnologiyalar

- **Next.js 16** (App Router, static export uchun to'liq mos)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — skroll animatsiyalari
- **lucide-react** — ikonalar

Barcha ma'lumotlar (`src/data/*.ts`) frontendning o'zida saqlanadi — backend yoki
ma'lumotlar bazasi talab qilinmaydi. Kelajakda haqiqiy backend/CMS ulanganda, shu
`src/data` fayllaridagi funksiyalarni (masalan, `getLatestNews`) API chaqiruvlariga
almashtirish kifoya.

## Loyiha tuzilmasi

```
src/
  app/                  # Sahifalar (App Router)
    institut/           # Institut haqida, rahbariyat, tuzilma, vakansiya
    faoliyat/           # Faoliyat yo'nalishlari
    ilmiy-faoliyat/     # Ilmiy loyihalar
    yangiliklar/        # Yangiliklar ro'yxati va [slug] sahifasi
    nashrlar/           # Elektron kutubxona
    hujjatlar/          # Normativ-huquqiy hujjatlar
    galereya/           # Foto galereya
    aloqa/              # Murojaat shakli va xarita
  components/           # UI va sahifaga xos komponentlar
  data/                 # Barcha statik kontent (yangilik, xizmat, hujjat va h.k.)
```

## Ishga tushirish

```bash
npm install
npm run dev
```

Sayt `http://localhost:3000` manzilida ochiladi.

Build va production tekshiruvi uchun:

```bash
npm run build
npm run start
```

## Vercelda joylashtirish (deploy)

Loyiha Vercel uchun maxsus sozlashsiz ham to'liq tayyor (`vercel.json` shart emas):

1. Loyihani GitHub/GitLab/Bitbucket'ga yuklang (`git init`, `git add`, `git commit`, `git push`).
2. [vercel.com](https://vercel.com) da **Add New → Project** tugmasini bosing va repozitoriyani tanlang.
3. Framework sifatida Vercel avtomatik ravishda **Next.js**ni aniqlaydi — qo'shimcha sozlash shart emas.
4. **Deploy** tugmasini bosing. Bir necha daqiqada sayt jonli havolaga ega bo'ladi.

Yoki Vercel CLI orqali to'g'ridan-to'g'ri joylashtirish:

```bash
npm install -g vercel
vercel        # birinchi marta sozlash
vercel --prod # production'ga chiqarish
```

## Kontentni yangilash

- **Rahbariyat ma'lumotlari** hozircha namunaviy (`src/data/leadership.ts`) — saytni
  ishga tushirishdan oldin haqiqiy F.I.Sh., lavozim va rasm bilan almashtiring.
- **Rasmlar**: hozirda `picsum.photos` orqali vaqtinchalik (placeholder) tasvirlar
  ishlatilgan. Haqiqiy sayt uchun institutning o'z fotosuratlarini `public/` papkasiga
  joylashtirib, tegishli `src/data/*.ts` fayllaridagi `image`/`photo`/`cover`
  maydonlarini shu fayllarga yo'naltiring.
- **Yangiliklar, nashrlar, hujjatlar, vakansiyalar** — mos `src/data/*.ts` fayliga
  yangi obyekt qo'shish orqali yangilanadi, sahifalar avtomatik yangi kontentni chiqaradi.
- **Aloqa formasi** hozircha faqat frontendda ishlaydi (real yuborish logikasi yo'q).
  Uni ishga tushirish uchun `src/components/contact/ContactForm.tsx` ichida `handleSubmit`
  funksiyasini real API/E-mail xizmati (masalan, Formspree, EmailJS yoki o'z backend
  endpoint'ingiz) bilan bog'lang.

## Domen va SEO

- `src/app/sitemap.ts` va `src/app/robots.ts` avtomatik generatsiya qilinadi va
  `src/data/site.ts` dagi `domain` maydonidan foydalanadi.
- Haqiqiy domen aniq bo'lgach, faqat `src/data/site.ts` dagi `domain` qiymatini
  o'zgartiring — u butun sayt bo'ylab (metadata, sitemap, robots) qo'llanadi.
- Telefon, manzil va ijtimoiy tarmoq havolalari ham shu faylda joylashgan.

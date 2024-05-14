<template>
  <section class="fixed w-screen h-screen -ml-1">
    <NuxtImg
      class="absolute inset-0 animate-zoomIn"
      src="/homepage.svg"
      alt="homepage"
      sizes="100vw"
    />
    <article
      class="relative flex flex-col h-full justify-center pl-[10%] gap-10 -mt-10"
    >
      <h1 class="text-5xl text-black font-bold tracking-normal">
        Welcome to paradise
      </h1>
      <p class="max-w-md text-lg">
        Let us organize your dream vacation. Tell us everything you would like
        to do and we will create the best possible recommendations based on your
        preferences.
      </p>
      <q-btn
        color="secondary"
        no-caps
        class="self-start rounded-full text-[17px] p-3 w-[10rem] h-[3rem] text-black"
      >
        <NuxtLink to="/survey"> Start Survey </NuxtLink>
      </q-btn>
    </article>
  </section>
</template>

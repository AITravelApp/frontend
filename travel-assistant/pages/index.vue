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
        preference.
      </p>
      <button
        class="self-start bg-secondary hover:bg-hoverprime rounded-full text-[17px] p-3 w-[10rem] h-[3rem]"
      >
        <NuxtLink to="/survey"> Start Survey </NuxtLink>
      </button>
    </article>
  </section>
</template>
